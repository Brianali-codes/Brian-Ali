import React from 'react';

const ExperienceItem = ({ title, company, location, dates, responsibilities }) => {
  return (
    <div className="border-b border-gray-300 dark:border-gray-700 mb-5 pb-2">
      <h3 className="text-lg font-bold dark:text-gray-200 Desc">{title}</h3>
      <p className="text-md font-semibold dark:text-gray-300 Desc">{company}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 Desc">{location}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 Desc" >{dates}</p>
      <ul className="list-disc pl-5 text-sm text-gray-800 dark:text-gray-300 Desc">
        {responsibilities.map((resp, index) => (
          <li key={index} className="mb-1 Desc">
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
      dates: '01/2024 - Present',
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
      dates: '01/2023 - 05/2024',
      responsibilities: [
        'Provided Cyber Café services such as eCitizen support, maintenance, stock management, and basic tasks like photocopying, printing, typesetting, and PC troubleshooting.',
        'Acquired practical skills by shadowing senior staff, gaining insights into organizational policies, operations, and procedures.',
        'Ensured adherence to rules and regulations, resulting in timely, high-quality, and standardized work.',
      ],
    },
  ];

  return (
    <div className="p-1 Desc dark:bg-black">
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;
