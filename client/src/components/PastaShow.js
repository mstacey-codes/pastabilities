import React, { useState, useEffect } from 'react'
import ErrorList from './ErrorList.js'
import translateServerErrors from '../services/translateServerErrors'
import PastaReviewForm from './PastaReviewForm'
import ReviewTile from './ReviewTile'

const PastaShow = (props) => {
    const [pasta, setPasta] = useState({
        name: '',
        description: '',
        category: {},
        reviews: []
    })
    const [errors, setErrors] = useState([])

    const pastaId = props.match.params.id

    const getPasta = async () => {
        
        try {
            const response = await fetch(`/api/v1/pastas/${pastaId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            setPasta(body.pasta)
        } catch (error) {
            console.error(`Error in fetch ${error.message}`)
        }
    }

    useEffect(() => {
        getPasta()
    }, [])

    const postReview = async (newReviewData) => {
        try {
            const response = await fetch (`/api/v1/pastas/${pastaId}/newReview`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(newReviewData)
            })
            if (!response.ok) {
                if(response.status === 422) {
                    const body = await response.json()
                    const newErrors = translateServerErrors(body.errors)
                    return setErrors(newErrors)
                } else {
                    const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw(error)
                }
            } else {
                const body = await response.json()
                const updatedReviews = pasta.reviews.concat(body.reviews)
                setErrors([])
                setPasta({...pasta, reviews: updatedReviews})
                }
        } catch(error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    let reviewTiles
    if (!pasta.reviews[0]) {
        reviewTiles = `There are currently no reviews for this pasta!`
    } else {
        reviewTiles = pasta.reviews.map((reviewObject) => {
            return (
                <ReviewTile
                    key={reviewObject.id}
                    {...reviewObject}
                />
            )
            })
        }

    return (
        <>
            <div className="pasta-info">
                <h1 className='pasta-title'>{pasta.name}</h1>
                <p className="pasta-desc">{pasta.description}</p>
                <p className="pasta-category">Category: {pasta.category.name}</p>
                {reviewTiles}
            </div>
            <div>
                <ErrorList errors={errors} />
                <PastaReviewForm
                    postReview={postReview}
                />
            </div>
        </>
    )
}

export default PastaShow
