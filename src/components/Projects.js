import React from 'react'
import Project from './Project'

const projectData = [
  { name: 'Project 1', team: 'Team A', likes: 62, views: '38.5k' },
  { name: 'Project 2', team: 'Team B', likes: 45, views: '21.2k' },
  { name: 'Project 3', team: 'Team C', likes: 30, views: '10.4k' },
  { name: 'Project 4', team: 'Team D', likes: 50, views: '19.1k' },
  { name: 'Project 5', team: 'Team E', likes: 75, views: '45.3k' },
  { name: 'Project 6', team: 'Team F', likes: 22, views: '8.2k' },
  { name: 'Project 7', team: 'Team G', likes: 34, views: '12.7k' },
  { name: 'Project 8', team: 'Team H', likes: 55, views: '20.5k' },
  { name: 'Project 9', team: 'Team I', likes: 47, views: '16.9k' },
]

function Projects() {
  return (
    <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-10'>
      {projectData.map((project, index) => (
        <Project 
          key={index}
          name={project.name}
          team={project.team}
          likes={project.likes}
          views={project.views}
        />
      ))}
    </div>
  )
}

export default Projects
