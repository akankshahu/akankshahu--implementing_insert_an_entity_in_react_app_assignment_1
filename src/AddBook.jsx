import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./AddBook.css";
const AddBook=()=>{
const [formData,setFormData]=useState({
    title:"",
    author:"",
    description:"",
    coverImage:"",


});
const navigate=useNavigate();
const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({ ...formData, [name]:value  });
};
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Book added: ",formData);
    navigate("/");

};
return(
    <div className="add-book-container">
        <h1>Add a new Book</h1>
        <form className="add-book-form" onSubmit={handleSubmit}>
            <label >
                Title :
                <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                />


            </label>
            <label>
                Author:
                <input 
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required 
                />


            </label>
            <label>
                Description:
                <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                />

            </label>
            <label>
                Cover Iamge URL:
                <input
                type="url"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                required
                />

            </label>
            <button type="submit">Submit</button>

        </form>
        
    </div>
);


};
export default AddBook;