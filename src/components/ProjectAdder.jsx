import { useState } from "react";
import styles from '../styles/ProjectAdder.module.css'

function ProjectAdder({ onAddProject }) {
    {/* callback function to send data from ProjectAdder to parent component App */}
    const [formData, setFormData] = useState({  title: "", description: "", imageURL: "" });

    const handleFormChange =(event) => {
        setFormData({...formData, [event.target.name]: event.target.value});  
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddProject(formData);
    };

    return (
        <>
        <div className={styles.ProjectAdder}>
            <h2>Add Project</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleFormChange} required></input>

                <br></br>

                <label>Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleFormChange} required></input>

                <br></br>

                <label>Image URL</label>
                <input type="text" name="imageURL" value={formData.imageURL} onChange={handleFormChange}></input>
                <button type="submit">Add</button>
            </form>
        </div>
        </>
    );
};

export default ProjectAdder