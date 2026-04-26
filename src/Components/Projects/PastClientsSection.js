import styled from "styled-components";
import NextSection from "../General/NextSection";
import dominos from "../../Images/Projects/Clients/dominos.png";
import ford from "../../Images/Projects/Clients/ford.png";
import gm from "../../Images/Projects/Clients/gm.png";
import lazboy from "../../Images/Projects/Clients/lazboy.png";
import mcdonalds from "../../Images/Projects/Clients/mcdonalds.png";
import michigan from "../../Images/Projects/Clients/michigan.png";
import mosburger from "../../Images/Projects/Clients/mosburger.png";
import nba from "../../Images/Projects/Clients/nba.png";
import siemens from "../../Images/Projects/Clients/siemens.png";
import wholefoods from "../../Images/Projects/Clients/wholefoods.png";
import bluecrossblueshield from "../../Images/Projects/Clients/bluecrossblueshield.png";
import atandt from "../../Images/Projects/Clients/at&t.png";
import zingermans from "../../Images/Projects/Clients/zingermans.png";
import boeing from "../../Images/Projects/Clients/boeing.png";
import washtenawdairy from "../../Images/Projects/Clients/washtenawdairy.png";
import dematic from "../../Images/Projects/Clients/dematic.png";
import ge_aerospace from "../../Images/Projects/Clients/ge_aerospace.png";
import amway from "../../Images/Projects/Clients/amway.png";
import cityofa2 from "../../Images/Projects/Clients/cityofa2.png";
import mdcr from "../../Images/Projects/Clients/mdcr.png";

const SectionContainer = styled.div`
  width: 100vw;
  height: 125vh;
  background-color: #D0D1F2;
  box-sizing: border-box;
  position: sticky;
  top: -1px;
  overflow: hidden;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 12vh;
  box-sizing: border-box;
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

const BottomText = styled.p`
  font-size: 3vmin;
  font-family: futura-pt, sans-serif;
  font-weight: 400;
  color: #1e1e1e;
  margin-top: 1em;
  text-align: center;
`;

const ClientLogo = styled.img`
  width: 100%;
  max-height: 10vh;
  object-fit: contain;
`;

function PastClientsSection() {
  const clients = [
    mcdonalds,
    dominos,
    ford,
    gm,
    boeing,
    atandt,
    wholefoods,
    bluecrossblueshield,
    nba,
    siemens,
    ge_aerospace,
    lazboy,
    amway,
    michigan,
    cityofa2,
    mosburger,
    zingermans,
    washtenawdairy,
    mdcr,
    dematic,
  ];

  return (
    <SectionContainer>
      <ScrollWrapper>
        <TextContainer>
          <TitleText>WHO WE'VE WORKED WITH</TitleText>
        </TextContainer>
        <ClientsContainer>
          {clients.map((client, index) => (
            <ClientLogo key={index} src={client} alt={`Client ${index + 1}`} />
          ))}
        </ClientsContainer>
        <BottomText>AND MANY MORE...</BottomText>
      </ScrollWrapper>
    </SectionContainer>
  );
}

export default PastClientsSection;