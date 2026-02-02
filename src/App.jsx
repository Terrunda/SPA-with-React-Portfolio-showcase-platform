import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import ProjectAdder from './components/ProjectAdder'
import ProjectList from './components/ProjectList'
import './App.css'

{/* Styles */}
import styles from './styles/ProjectAdder.module.css'

function App() {
const [projects, setProjects] = useState([]);

    function addProject(newProject) {
        setProjects([...projects, newProject]);
    };

    return (
        <div>
            <h1>Personal Project Showcase App</h1>
            <ProjectAdder onAddProject={addProject} /> {/*Updating state  */}
            <ProjectList projects={projects} />
        </div>
  );
}

export default App
