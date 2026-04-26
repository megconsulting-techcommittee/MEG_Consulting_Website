import styled from "styled-components";
import { keyframes } from "styled-components";
import NextSection from "../General/NextSection";

const TextShift = keyframes`
  0% {transform: translate(0,100%);}
  100% {transform: translate(0,37.5%);}
`;

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #E0CFF2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
    align-content: center;
  position: sticky;
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;
`;

const TitleTextContainer = styled.div`
  background-color: transparent;
  width: fit-content;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const TitleText = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  -webkit-text-stroke: 0.03em #1e1e1e;
  color: transparent;
  font-weight: 900;
  line-height: 82%;
  animation-name: ${TextShift};
  animation-delay: 0.2s;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const TitleTextStill = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  color: transparent;
  font-weight: 900;
  line-height: 82%;
  color: #1e1e1e;
`;

const LineBreak = styled.div`
  width: 100%;
  height: 0;
`;

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

function ProjectHome() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={150} ScrollAlready={0} color="black" />
      <TitleTextContainer style={{ transform: "translate(0,75%)" }}>
        <TitleText style={{ transform: "translate(0,100%)" }}>
          OUR CLIENTS
        </TitleText>
      </TitleTextContainer>
      <LineBreak />
      <TitleTextContainer style={{ transform: "translate(0,37.5%)" }}>
        <TitleText style={{ transform: "translate(0,100%)" }}>
          OUR CLIENTS
        </TitleText>
      </TitleTextContainer>
      <LineBreak />
      <TitleTextContainer>
        <TitleText style={{ transform: "translate(0,100%)" }}>
          OUR CLIENTS
        </TitleText>
      </TitleTextContainer>
      <LineBreak />
      <TitleTextContainer>
        <TitleTextStill>OUR CLIENTS</TitleTextStill>
      </TitleTextContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default ProjectHome;