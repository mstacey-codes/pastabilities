import React, { useState } from 'react'

const PastaReviewForm = ({ postReview, user }) => {
    const [newReview, setNewReview] = useState({
        title: '',
        rating: '',
        body: '',
        recipe: '',
        userId: null
    })

    if (newReview.userId === null){
        if (user) {
        setNewReview({... newReview,
        userId: user.id})
        }
    }

    const handleInputChange = event => {
        setNewReview({
            ...newReview,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        // newReview.userId = user.id
        const validPost = await postReview(newReview)
        if (validPost) {
        clearForm()}
    }

    const clearForm = () => {
        setNewReview({
            title: '',
            rating: '',
            body: '',
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
                        name='body'
                        onChange={handleInputChange}
                        value={newReview.body}
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