import styled from "styled-components";
import building1 from "../../Images/Projects/Buildings/building1.jpg";
import NextSection from "../General/NextSection";
import { useState, useEffect } from "react";

const SectionContainer = styled.div`
  width: 100vw;
  height: 125vh;
  background-color: #E0CFF2;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: -1px;
  max-width: 100%;
  @media (max-aspect-ratio: 1233/870) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${building1});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const ImageCoverContainer = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute;
  top: -150vh;
  max-width: 100%;
`;

const ImageCover = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${building1});
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0px;
`;

const TextContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #D0D1F2;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;

const LineBreak = styled.div`
  width: 100%;
  height: 0;
`;

const SectionLabelRow = styled.div`
  width: 100%;
  padding-inline: 4vw;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5vh;
  font-family: futura-pt, sans-serif;
  font-size: 1.5vmin;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #1e1e1e;
  opacity: 0.7;
  font-weight: 500;
`;

const Rule = styled.span`
  width: 24px;
  height: 1px;
  background: #1e1e1e;
  opacity: 0.4;
`;

const TitleText = styled.h1`
  display: inline-block;
  width: fit-content;
  font-size: 7vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  margin-top: 0;
  font-weight: 900;
  text-align: left;
  line-height: 1;
  color: #1e1e1e;
  padding-inline: 4vw;
  width: 100%;
`;

const OutlineText = styled.h1`
  display: inline-block;
  width: fit-content;
  font-size: 3vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  padding-inline: 4vw;
  padding-top: 2vh;
  font-weight: 300;
  text-align: left;
  -webkit-text-stroke: 0.03em #1e1e1e;
`;

const CTARow = styled.div`
  width: 100%;
  padding-inline: 4vw;
  padding-top: 4vh;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  font-family: futura-pt, sans-serif;
  font-size: 1.6vmin;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const PrimaryCTA = styled.a`
  padding: 14px 28px;
  background: #1e1e1e;
  color: #E0CFF2;
  text-decoration: none;
  font-weight: 600;
`;

const EmailCTA = styled.a`
  padding: 14px 0;
  color: #1e1e1e;
  text-decoration: none;
  border-bottom: 1.5px solid #1e1e1e;
  font-weight: 500;
`;

function BuildingSection() {
  const [scroll, setScroll] = useState(window.scrollY);
  const handleScroll = () => setScroll(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={126} color="white" />
      <TextContainer>
        <SectionLabelRow>
          <span>01</span>
          <Rule />
          <span>Clients &amp; Projects</span>
        </SectionLabelRow>

        <TitleText>EXPLORE YOUR </TitleText>
        <TitleText>BUSINESS POTENTIAL</TitleText>
        <LineBreak />

        <OutlineText>
          MEG is a multidisciplinary, student-led consulting group at the
          University of Michigan serving the local and global community. We
          empower Fortune 500s, nonprofits, and Ann&nbsp;Arbor businesses with
          research-backed recommendations across strategy, marketing,
          technology, and operations.
        </OutlineText>

        <CTARow>
          <PrimaryCTA href="mailto:meg.eboard@umich.edu">Start a project →</PrimaryCTA>
          <EmailCTA href="mailto:meg.eboard@umich.edu">
            meg.eboard@umich.edu
          </EmailCTA>
        </CTARow>
      </TextContainer>

      <ImageContainer>
        <ImageCoverContainer>
          <ImageCover
            style={{ display: scroll < vh(150) ? "none" : "inline-block" }}
          />
        </ImageCoverContainer>
      </ImageContainer>
    </SectionContainer>
  );
}

export default BuildingSection;