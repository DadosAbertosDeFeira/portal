import React from 'react';
import { render } from '@testing-library/react';

import ProjectCard from './ProjectCard';

describe('<ProjectCard />', () => {
  const project = {
    name: 'Maria Quitéria',
    type: ['raspagem de dados', 'busca de dados'],
    description:
      'Tem a missão de libertar dados do município de Feira de Santana. Responsável pela raspagem e o armazenamento.',
    link: '',
    logo: {
      path: '/assets/icons/maria-quiteria.svg',
      description: 'Logo do Projeto Maria Quitéria',
    },
  };

  it('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <ProjectCard project={project} />
    );

    expect(getByAltText('Logo do Projeto Maria Quitéria')).toBeInTheDocument();
    expect(getByText('Maria Quitéria')).toBeInTheDocument();
    expect(getByText(project.description)).toBeInTheDocument();
    expect(getByText('raspagem de dados')).toBeInTheDocument();
    expect(getByText('busca de dados')).toBeInTheDocument();
    expect(getByText('Link')).toBeInTheDocument();
  });
});
