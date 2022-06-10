import { FC } from 'react';
import { ProjectPage } from './projects/ProjectsPage';
import './App.scss';

export const App: FC = () => {
  return (
    <div className="container">
      <ProjectPage
      name= 'react typescript'
      frameWork='react'
      number={3}

      />

    </div>
  );
}

