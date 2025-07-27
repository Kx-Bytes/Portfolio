import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
} from "react-icons/si";
import { TbLetterC } from "react-icons/tb"; // ✅ thinner C icon

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      {/* C (thinner icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <TbLetterC style={{ fontSize: "3rem" }} />
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* MongoDB */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      {/* Firebase */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;