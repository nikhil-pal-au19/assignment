import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Movie from '../screens/Movie'
import movies from '../../movies'

const Home = () =>{
    return(
        <>
            <h1>Latest Movies</h1>
            <Row>
                {movies.map(movie => (
                    <Col key={movie._id} sm={12} md={6} lg={4} xl={3}>
                    <Movie movie={movie} />
                    </Col>
                ))}
            </Row>

        </>

    )
}

export default Home