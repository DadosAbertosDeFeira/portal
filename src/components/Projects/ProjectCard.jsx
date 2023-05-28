import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { FiArrowUpRight } from 'react-icons/fi';

import Link from 'next/link';
import Tag from '../Tag';

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-[500px] flex align-center tablet:flex m-md tablet:m-xl rounded shadow-[0px_6px_12px_#0000000d]">
      {/* Logo Wrapper */}
      <div>
        <Image
          className="max-w-[initial] h-auto rounded-tl rounded-bl"
          src={project.logo.path}
          alt={project.logo.description}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col pr-sm pl-sm pb-xs tablet:pr-sm tablet:pt-sm tablet:pb-xs tablet:pl-sm">
        <h3 className="mb-sm tablet:mb-md">{project.name}</h3>
        <p className="text-black text-xs flex-1">{project.description}</p>

        <div className="flex flex-row justify-between">
          <div className="hidden sm:flex">
            {project.type.map((tag) => (
              <Tag key={tag} className="mr-xs">
                {tag}
              </Tag>
            ))}
          </div>

          <Link
            className="text-primary"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center">
              Link
              <FiArrowUpRight className="ml-xs stroke-primary" />
            </div>
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
      // eslint-disable-next-line react/forbid-prop-types
      path: PropTypes.object,
      description: PropTypes.string,
    }),
  }),
};

ProjectCard.defaultProps = {
  project: {},
};

export default ProjectCard;
