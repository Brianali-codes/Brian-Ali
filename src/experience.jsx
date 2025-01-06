import React from 'react';

const ExperienceItem = ({ title, company, location, dates, responsibilities }) => {
  return (
    <div style={styles.experienceItem}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.company}>{company}</p>
      <p style={styles.location}>{location}</p>
      <p style={styles.dates}>{dates}</p>
      <ul style={styles.responsibilities}>
        {responsibilities.map((resp, index) => (
          <li key={index} style={styles.responsibility}>
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Front-end Developer',
      company: 'Quick-Tech College',
      location: 'Quick Park Village Plaza, Kangudo Road, Nairobi, Kenya',
      dates: '01/2024 – Present',
      responsibilities: [
        'Developed the Quick-Tech College website as the sole front-end developer, delivering a modern and formal UI that enhances the user experience while maintaining its informative nature.',
        'Utilized modern JavaScript technologies and libraries, including React, to create an SEO-friendly website with a dynamic and intuitive interface for improved navigation.',
        'Enhanced communication and presentation skills through regular interactions with senior staff, adopting their professional communication methods.',
        'Designed the overarching theme of the college, establishing a consistent blueprint for the institution\'s branding.',
      ],
    },
    {
      title: 'Assistant',
      company: 'Quick Cyber-Café',
      location: 'Quick Park Village Plaza, Kangudo Road, Nairobi, Kenya',
      dates: '01/2023 – 05/2024',
      responsibilities: [
        'Provided Cyber Café services such as eCitizen support, maintenance, stock management, and basic tasks like photocopying, printing, typesetting, and PC troubleshooting.',
        'Acquired practical skills by shadowing senior staff, gaining insights into organizational policies, operations, and procedures.',
        'Ensured adherence to rules and regulations, resulting in timely, high-quality, and standardized work.',
      ],
    },
  ];

  return (
    <div style={styles.container}>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  experienceItem: {
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
    paddingBottom: '10px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  company: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '5px 0',
  },
  location: {
    fontSize: '14px',
    color: '#555',
  },
  dates: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  },
  responsibilities: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  responsibility: {
    fontSize: '14px',
    marginBottom: '5px',
  },
};

export default Experience;
