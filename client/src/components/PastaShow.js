import React, { useState, useEffect } from 'react'

const PastaShow = (props) => {
    const [pasta, setPasta] = useState({
        name: '',
        description: '',
        category: {}
    })

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

    return (
        <>
            <div>
                <h1>{pasta.name}</h1>
                <p>{pasta.description}</p>
                <p>Category: {pasta.category.name}</p>
            </div>
        </>
    )
}

export default PastaShow