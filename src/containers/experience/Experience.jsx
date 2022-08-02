import React from 'react';
import "./experience.css";


  

function Experience() {
  return (
  <div className='web__experience section' id='experience'>
    <div className='web__experience-content'>
      <div className='lines'>
        <div /*empty div*/ />
      </div>
      <h1 className="gradient__text">Experience</h1>
        <div className='exp1'>
          <h2>Software Engineering Intern @ Endofotonics</h2>
          <ul className='menu-drop1'>
            <li>Develop and build UI using C#</li>
            <li>Create unit test codes</li>
            <li>Create and review software documents </li>
          </ul>
        </div>      
        <div className='exp2'>
          <h2>Associate Sensei @ Skill Samurai Singapore</h2>
          <ul className='menu-drop2'>
            <li>Coding instructor for kids</li>
            <li>Review assignments</li>
            <li>Teach the students how to create and design their game using coding </li>
            <li>Work with students to help them understand the codes</li>
          </ul>
        </div>
      
    </div>

  

  </div>
  )
}

export default Experience