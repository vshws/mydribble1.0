import React, { useState } from 'react';
import Project from './Project';
import Menu from './Menu';

const initialProjects = [
  { name: 'Project 1', team: 'Team A', likes: 62, views: '38.5k', img: 'https://images.unsplash.com/photo-1618886487325-f665032b6352?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww' },
  { name: 'Project 2', team: 'Team B', likes: 45, views: '21.2k', img: 'https://cdn.dribbble.com/userupload/11973895/file/original-298803cb45251cd4255d83afd0a9584c.jpg?resize=400x300&vertical=center' },
  { name: 'Project 3', team: 'Team C', likes: 30, views: '10.4k', img: 'https://cdn.dribbble.com/userupload/15292209/file/still-6273f93ed581484d34fec1a438671c9c.png?resize=400x300&vertical=center' },
  { name: 'Project 4', team: 'Team D', likes: 50, views: '19.1k', img: 'https://cdn.dribbble.com/userupload/15325327/file/original-638556fcaec240a249ac007c505dd6c7.jpg?resize=400x300&vertical=center' },
  { name: 'Project 5', team: 'Team E', likes: 75, views: '45.3k', img: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Project 6', team: 'Team F', likes: 22, views: '8.2k', img: 'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Project 7', team: 'Team G', likes: 34, views: '12.7k', img: 'https://images.unsplash.com/photo-1618886487325-f665032b6352?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww' },
  { name: 'Project 8', team: 'Team H', likes: 55, views: '20.5k', img: 'https://images.unsplash.com/photo-1618886487325-f665032b6352?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww' },
  { name: 'Project 9', team: 'Team I', likes: 47, views: '16651665.9k', img: 'https://images.unsplash.com/photo-1618886487325-f665032b6352?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww' },
];

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  return (
    <div>
      <Menu projects={initialProjects} setFilteredProjects={setFilteredProjects} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-10'>
        {filteredProjects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            team={project.team}
            likes={project.likes}
            views={project.views}
            img={project.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
