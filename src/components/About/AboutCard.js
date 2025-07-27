import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kiran Biju</span>
            {` `}
            from <span className="purple">[Your City, Your Country]</span>.
            <br />
            I am passionate about full‑stack development and I’ve also explored
            cybersecurity and penetration testing.
            <br />
            I love building applications, securing them, and constantly learning
            new tech skills.
            <br />
            <br />
            Apart from coding and security work, here are some activities I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing and Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build and secure things that make a difference!"
          </p>
          <footer className="blockquote-footer">Kiran Biju</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;