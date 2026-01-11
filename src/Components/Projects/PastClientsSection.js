import styled from "styled-components";
import NextSection from "../General/NextSection";
import dominos from '../../Images/Projects/Clients/dominos.png';
import ford from '../../Images/Projects/Clients/ford.png';
import gm from '../../Images/Projects/Clients/gm.png';
import lazboy from '../../Images/Projects/Clients/lazboy.png';
import mcdonalds from '../../Images/Projects/Clients/mcdonalds.png';
import michigan from '../../Images/Projects/Clients/michigan.png';
import mosburger from '../../Images/Projects/Clients/mosburger.png';
import nba from '../../Images/Projects/Clients/nba.png';
import siemens from '../../Images/Projects/Clients/siemens.png';
import wholefoods from '../../Images/Projects/Clients/wholefoods.png';
import bluecrossblueshield from '../../Images/Projects/Clients/bluecrossblueshield.png';
import soulcycle from '../../Images/Projects/Clients/soulcycle.png';
import zingermans from '../../Images/Projects/Clients/zingermans.png';
import zoominfo from '../../Images/Projects/Clients/zoominfo.png';
import washtenawdairy from '../../Images/Projects/Clients/washtenawdairy.png';
import dematic from '../../Images/Projects/Clients/dematic.png';
import ge_aerospace from '../../Images/Projects/Clients/ge_aerospace.png';
import amway from '../../Images/Projects/Clients/amway.png';
import cityofa2 from '../../Images/Projects/Clients/cityofa2.png';
import greendoor from '../../Images/Projects/Clients/greendoor.png';

const SectionContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #E0CFF2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TextContainer = styled.div`
  margin-bottom: 2em;
  text-align: center;
`;

const TitleText = styled.h1`
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: #1e1e1e;
  text-align: center;
`;

const ClientsContainer = styled.div`
  width: 60%;
  max-width: 1200px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2em;
  justify-items: center;
  align-items: center;
`;

const ClientLogo = styled.img`
  width: 100%;
  max-height: 10vh;
  object-fit: contain;
`;

function SummarySection() {
  const clients = [
    mcdonalds,
    dominos,
    ford,
    gm,
    nba,
    siemens,
    ge_aerospace,
    lazboy,
    amway,
    michigan,
    cityofa2,
    mosburger,
    wholefoods,
    bluecrossblueshield,
    soulcycle,
    zingermans,
    zoominfo,
    washtenawdairy,
    greendoor,
    dematic,
  ];

  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={450} color="black"></NextSection>
      <TextContainer>
        <TitleText>WHO WE'VE WORKED WITH</TitleText>
      </TextContainer>
      <ClientsContainer>
        {clients.map((client, index) => (
          <ClientLogo key={index} src={client} alt={`Client ${index + 1}`} />
        ))}
      </ClientsContainer>

    </SectionContainer>
  );
}

export default SummarySection;
