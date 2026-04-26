import Nav from "../Components/General/Nav";
import ProjectHome from "../Components/Projects/ProjectHome";
import BuildingSection from "../Components/Projects/BuildingSection";
import SkillsSection from "../Components/Projects/SkillsSection";
import TimelineSection from "../Components/Projects/TimelineSection";
import TeamSection from "../Components/Projects/TeamSection";
import PastClientsSection from "../Components/Projects/PastClientsSection";
import FAQSection from "../Components/Projects/FAQSection";
import JoinSection from "../Components/Projects/JoinSection";
import ToTeamSection from "../Components/Projects/ToTeamSection";

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from "react-ga4";
import rg4js from "raygun4js";

function Projects() {

  let location = useLocation();
  ReactGA.initialize("G-GC3DF08WD9");

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: '/' + window.location.pathname });
    rg4js('trackEvent', {
      type: 'pageView',
      path: '/' + window.location.hash
    });
  }, [location])

  return (
    <div>
      <ProjectHome />
      <BuildingSection />
      <SkillsSection />
      <TimelineSection />
      <TeamSection />
      <PastClientsSection />
      <FAQSection />
      <JoinSection />
      <ToTeamSection />
      <Nav color={0} home={1} />
    </div>
  );
}

export default Projects;