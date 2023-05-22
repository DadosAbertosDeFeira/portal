import React from 'react';
import Image from 'next/image';

import projects from '../../utils/projects';
import IconProject from '../../../public/assets/icons/icon-projects.svg';

import ProjectCard from './ProjectCard';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-center">
        <Image
          className={`${styles.icon} mb-md`}
          src={IconProject}
          alt="Logo da sessão de projetos"
        />
        <h2>Projetos</h2>
      </div>

      {/* Content */}
      <div
        className={`${styles.contentWrapper} flex flex-col tablet:flex-row tablet:flex-wrap tablet:justify-center tablet:content-evenly mt-md`}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
