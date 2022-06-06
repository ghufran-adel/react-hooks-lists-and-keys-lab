import React from "react";

function ProjectItem({ name, about, technologies }) {
  const Tech=technologies.map((el,i)=>{
    return <span key={el}>{el}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {Tech}
      </div>
    </div>
  );
}

export default ProjectItem;
