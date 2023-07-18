// components/Scrollspy.js
import React, { useState, useEffect } from 'react';

const Scrollspy = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionElements = sections.map((section) => ({
        id: section,
        offsetTop: document.getElementById(section).offsetTop,
      }));

      const currentSection = sectionElements.reduce((prev, curr) =>
        curr.offsetTop <= scrollY ? curr : prev
      );

      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <ul className="scrollspy-menu">
      {sections.map((section) => (
        <li key={section}
        className='transition-all duration-300 my-16'>
          <a
            href={`#${section}`}
            className={activeSection === section ? 'rounded-full w-2 h-2 bg-purple-500 flex justify-between items-center transition-all duration-300 ' : 'w-2 h-2 bg-light rounded-full flex justify-between items-center transition-all duration-300'}>
            <p className='ml-4'>{section}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Scrollspy;
