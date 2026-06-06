import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, Loader } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';



const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const [loading, setLoading] = useState(false);

  const handleToggle = (value) => {
    setLoading(true);
    setToggle(value);
    setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate a delay for loading
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => handleToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => handleToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'static web app' ?
            <ToggleButton active value="static web app" onClick={() => handleToggle('static web app')}>StaticWEB APP'S</ToggleButton>
            :
            <ToggleButton value="static web app" onClick={() => handleToggle('static web app')}>Static WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => handleToggle('web app')}>DynamicWEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => handleToggle('web app')}>Dynamic WEB APP'S</ToggleButton>
          }
        </ToggleButtonGroup>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <CardContainer>
            {toggle === 'all' && projects
              .map((project) => (
                <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
            {projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
          </CardContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
