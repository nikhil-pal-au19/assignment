import React from "react";
import { useState } from "react";
import Axios from "axios"

const Create = () => {
    const [formData,SetFormData] = useState({
        movie:"",
        rating:"",
        release:""
    })
   const onchange=(e)=>{
       e.preventDefault();
       SetFormData((prevstate)=>({...prevstate,[e.target.name]:e.target.value}))
        
    }
    const {movie,realeseDate,rating}=formData
    const onSubmit = (e) => {
        e.preventDefault()
            const userData = {
                movie,
                realeseDate,
                rating

        }
        console.log(userData)
        Axios.post("http://localhost:5000/movieservice",userData)
        
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                
                <label>MovieName</label>
                <input type="text"name="movie" value={movie} onChange = {onchange}></input>
                <label>RelaseDate</label>
                <input type="text" name="realeseDate" value={realeseDate} onChange={onchange}></input>
                <label>Rating</label>
                <input type="number" name="rating" value={rating} onChange={onchange}></input>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Create