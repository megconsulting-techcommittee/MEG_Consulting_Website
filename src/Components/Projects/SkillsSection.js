import React from "react";
import styled from "styled-components";
import SkillDropdown from "../General/SkillDropdown";
import NextSection from "../General/NextSection";
import { useState, useRef } from "react";

const SectionContainer = styled.div`
  padding-top: 20vh;
  width: 100vw;
  min-height: 100vh;
  background-color: #E0CFF2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-anchor: none;
`;

const TextContainer = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  flex-direction: column;
  display: flex;
`;

const TitleText = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0 0 20px 0;
  font-weight: 900;
  text-align: left;
  color: #1e1e1e;
`;


const SkillsSection = () => {

  return (
    <SectionContainer>
      <TitleText>OUR CAPABILITIES</TitleText>
      <TextContainer>
        <SkillDropdown
          title="CUSTOMER RETENTION"
          client="Fortune 500 Midwest Retailer"
          scope="Orchestrated customer acquisition and retention campaign for $21B retailer by studying Gen Z retail preferences and competitor loyalty programs. Launched Qualtrics survey, focus group and conducted internal analysis in order to deliver UI/UX recommendations and new features ideas for rewards app of 8M users."
        />
        <SkillDropdown
          title="AI INTEGRATION"
          client="National Medical Insurance Provider"
          scope="Assessed healthcare insurer’s workforce readiness for AI integration, focusing on technical and cultural alignment, to build an AI integration framework based on the AI governance model that included KPI dashboards, cultural surveys, and review systems."
        />
        <SkillDropdown
          title="MARKET GROWTH"
          client="International Fast-Food Chain"
          scope="Formulated a burger franchise's market expansion strategy through regional analysis to restructure store fleet, as well as ideated initiatives such as food trucks and pop-ups to expand beyond traditional walk-in stores and capture untapped customer bases."
        />
        <SkillDropdown
          title="COMMUNITY OUTREACH"
          client="Local Nonprofit Animal Shelter"
          scope="Engineered strategic initiatives for mid-sized city animal shelter to promote services and establish robust local partnerships by evaluating demographics, pet care accessibility and district culture through census data, online forums and outreach to identify priority areas."
        />
      </TextContainer>
    </SectionContainer>
  );
};

export default SkillsSection;
