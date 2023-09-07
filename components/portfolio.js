'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from '@styles/components/portfolio.module.scss';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const response = await fetch('/api/projects');
    const data = await response.json();

    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className={styles.portfolio} id="portfolio">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <div key={project._id}>
            <article className={styles.item}>
              <div className={styles.img}>
                <Image src={project.image} alt="" aria-hidden="true" />
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className={styles.projecttitle}>
                  <span>{project.title}</span>
                  <FiExternalLink />
                </h3>
              </a>

              <div className={styles.description}>
                <p>{project.description}</p>
                <p className={styles.keyTech}>
                  Key Tech: <span className={styles.bold}>{project.stack}</span>
                </p>
              </div>

              <a
                href={project.github}
                className={styles.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Repo <FaGithubAlt className={styles.githubicon} />
              </a>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
