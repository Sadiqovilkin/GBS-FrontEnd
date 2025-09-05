import React from "react";
import "./ProjectCard.scss";
import { projectData } from "../../../MyDatas/MyDatas";
import { NavLink } from "react-router-dom";
const ProjectCard = () => {
  return (
    <section id="projectCard">
      <div className="container">
        <div className="row">
            <h2 className="pageTitle">Successful Projects Showcasing Our Expertise and Reliability</h2>
        </div>
        <div className="row">
          {projectData.map((item,idx) => (
            <div key={idx}  className="col-lg-6 g-3">
              <div
                className="prCard"
                style={{ backgroundImage: `url(${item.image})` }}
              >
             <div className="cardBox">
                   <div className="cardContents">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="cardButtons">
                  <p>{item.description}</p>

                  <NavLink to={`/project/${item.id}`}>
                    <span className="icon">→</span>
                    <span className="text">About Project</span>
                  </NavLink>
                </div>
             </div>
             <div className="overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
