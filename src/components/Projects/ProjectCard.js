import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowUpRight } from 'react-icons/fi';

import Tag from '../Tag';
import Link from '../Link';

import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
  return (
    <div className={`${styles.card} flex m-md tablet:m-xl rounded`}>
      {/* Logo Wrapper */}
      <div>
        <img
          className={`${styles.icon} rounded-tl rounded-bl`}
          src={project.logo.path}
          alt={project.logo.description}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col pr-xs pb-xs tablet:pr-sm tablet:pt-sm tablet:pb-xs">
        <h3 className="mb-sm tablet:mb-md">{project.name}</h3>
        <p className="text-black text-xs flex-1">{project.description}</p>

        <div className={`flex flex-row ${styles.footer}`}>
          <div>
            {project.type.map((tag) => (
              <Tag key={tag} className="mr-xs">
                {tag}
              </Tag>
            ))}
          </div>

          <Link
            className={`${styles.projectLink} flex items-center`}
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Link
            <FiArrowUpRight className={`ml-xs ${styles.projectLinkIcon}`} />
          </Link>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    link: PropTypes.string,
    logo: PropTypes.shape({
      path: PropTypes.string,
      description: PropTypes.string,
    }),
  }),
};

ProjectCard.defaultProps = {
  project: {},
};

export default ProjectCard;
