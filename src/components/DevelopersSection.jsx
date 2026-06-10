import React from "react";
import "./DevelopersSection.css";
import tejasviImg from "../assets/team/tejasvi.png";
import kaiwalyaImg from "../assets/team/kaiwalya.png";
import parthImg from "../assets/team/parth.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const developers = [
  
  {
    name: "Rtr. Kaiwalya Agham",
    role: "Project Architect and Lead",
    contribution: "Lead Developer",
    image: kaiwalyaImg,
    linkedin: "",
    github: "https://github.com/hp709101",
  },
  {
    name: "Rtr. Tejasvi Jadhao",
    role: "Project Manager and Co-lead",
    contribution: "Co-Developer",
    image: tejasviImg,
    linkedin: "https://www.linkedin.com/in/tejasvi-jadhao/",
    github: "https://github.com/Tejasvi-eng",
  },
  {
    name: "Rtr. Parth Khobragade",
    role: "Content & Design",
    contribution: "Creative Contributor",
    image: parthImg,
    linkedin: "https://www.linkedin.com/in/parth-khobragade-b877a1315?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/Parth070-collab",
  },
];

function DevelopersSection() {
  return (
    <section className="developers-section">
      <div className="developers-gear developers-gear-left"></div>
      <div className="developers-gear developers-gear-right"></div>

      <div className="developers-container">
        <div className="developers-header">
          <div className="developers-eyebrow">
            <span></span>
            <p>✦ Behind the Website ✦</p>
            <span></span>
          </div>

          <h2>Meet the Developers</h2>

          <p>
            The creative and technical minds who designed, developed, and
            brought the Rotaract Club of YCCE website to life.
          </p>
        </div>

        <div className="developers-grid">
          {developers.map((dev) => (
            <article className="developer-card" key={dev.name}>
              <div className="developer-image-wrap">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="developer-image"
                />
              </div>

              <div className="developer-info">
                <h3>{dev.name}</h3>
                <p className="developer-role">{dev.role}</p>
                <p className="developer-contribution">{dev.contribution}</p>

                <div className="developer-links">
                  <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${dev.name} LinkedIn`}>
                    <FaLinkedinIn />
                  </a>
                  <a href={dev.github} target="_blank" rel="noopener noreferrer" aria-label={`${dev.name} GitHub`}>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevelopersSection;