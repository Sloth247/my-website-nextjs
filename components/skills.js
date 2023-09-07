'use client';

import { useState, useEffect } from 'react';

import styles from '@styles/components/skills.module.scss';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    const response = await fetch('/api/skills');
    const data = await response.json();

    setSkills(data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.inner}>
        <h2 className={styles.title}>Skills</h2>

        <div className={styles.container}>
          {skills.map((skill) => (
            <div className={styles.item}>
              <img
                src={skill.image}
                alt=""
                aria-hidden="true"
                className={styles.icon}
              />
              <p className={styles.name}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
