import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// 👉 Add your images to Assets/Projects and update these imports
import safety from "../../Assets/Projects/safety.png";
import trip from "../../Assets/Projects/trip.png";
import todo from "../../Assets/Projects/todo.jpg";
import cloud from "../../Assets/Projects/cloud.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 🚀 Safety App */}
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={safety}
            isBlog={false}
            title="Safety App"
            description="A personal safety application that enables quick SOS alerts, live location sharing, and instant notifications to pre-configured emergency contacts. Built with React frontend and a robust backend, integrated with real-time location APIs and containerized with Docker."
            ghLink="https://github.com/yourusername/safety-app"
            demoLink="https://your-safety-app-demo-link.com"
            imgStyle={{ width: "80%", height: "30%" }} // 👈 Add this prop if ProjectCard supports it
          />
        </Col>

          {/* 🤖 AI Trip Planner */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trip}
              isBlog={false}
              title="AI Trip Planner"
              description="An AI-powered trip planning web app built using Streamlit and Python. It generates optimized travel itineraries, suggests destinations, and integrates with maps and external APIs to make travel planning easier and smarter."
              ghLink="https://github.com/Kx-Bytes/Traveezy-AI-Travel-App"
              demoLink="https://your-ai-trip-planner-demo.com"
            />
          </Col>

          {/* ☁️ Cloud Image Duplication */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Cloud Image Duplication"
              description="A cloud-based system that detects and removes duplicate images in storage to save space and optimize usage. Built with scalable backend services, image hashing algorithms, and integrated with cloud storage APIs."
              ghLink="https://github.com/Kx-Bytes/cloud"
              demoLink="https://your-cloud-image-duplication-demo.com"
            />
          </Col>

          {/* ✅ ToDo DevOps Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo DevOps Project"
              description="A full-stack ToDo List API built with Java Spring Boot and a React frontend. Fully Dockerized and integrated with a complete CI/CD pipeline using Jenkins, Maven, JUnit, and Ansible/Terraform. Includes Graphite and Grafana monitoring."
              ghLink="https://github.com/Kx-Bytes/todo-java-app"
              demoLink="https://your-todo-devops-demo.com"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;