import "./ProjectCard.css";
import React from "react";
import { NavLink } from "react-router-dom";


const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="IMG" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn" target="blank">
            Website Link
          </NavLink>
          <NavLink to={props.source} className="btn" target="blank">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
