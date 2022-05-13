import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Movie = ({movie}) => {
  return (
    <Card className = 'my-3 p-3 rounded'>
        <a href = {`/movie/${movie._id}`}>
            <Card.Img src = {movie.image} variant="top" />
        </a>

        <Card.Body>
            <a href={`/movies/${movie._id}`}>
                <Card.Title as='div'>
                    <strong>{movie.name}</strong>
                </Card.Title>
            </a>

        <Card.Text as='div'>
            <Rating value={movie.rating} 
            text={`${movie.numReviews} reviews`}>
            </Rating>
        </Card.Text>
    
        </Card.Body>
    </Card>
  )
}


export default Movie