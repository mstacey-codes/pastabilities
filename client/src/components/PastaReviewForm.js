import React, { useState } from 'react'

const PastaReviewForm = ({ postReview }) => {
    const [newReview, setNewReview] = useState({
        title: '',
        rating: '',
        review: '',
        recipe: ''
    })

    const handleInputChange = event => {
        setNewReview({
            ...newReview,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        postReview(newReview)
        clearForm()
    }

    const clearForm = () => {
        setNewReview({
            title: '',
            rating: '',
            review: '',
            recipe: ''
        })
    }


    
    return (
        <div className='review-form'>
            <h2>Add A New Review!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type='text'
                        name='title'
                        onChange={handleInputChange}
                        value={newReview.title}
                    />
                </label>
                <label>
                    Review:
                    <input
                        type='text'
                        name='review'
                        onChange={handleInputChange}
                        value={newReview.review}
                    />
                </label>
                <label>
                    Recipe (Optional):
                    <input
                        type='text'
                        name='recipe'
                        onChange={handleInputChange}
                        value={newReview.recipe}
                    />
                </label>
                <label>
                    Rating (1 (Terrible) - 5 (Amazing)):
                    <input
                        type='number'
                        name='rating'
                        onChange={handleInputChange}
                        value={newReview.rating}
                        min='1'
                        max='5'
                    />
                </label>

                <div className="button">
                    <input className="button" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default PastaReviewForm