import React from "react";
import styled from "styled-components";

const ROLES = [
    {
        role: "Executive Board",
        desc:
            "Sets strategic direction and signs off on engagements. Your first point of contact for new partnerships.",
    },
    {
        role: "Senior Advisor",
        desc:
            "Senior with experience in consulting or the corresponding industry who provides high-level guidance.",
    },
    {
        role: "Project Manager",
        desc:
            "Manages project workflows, coordinates weekly/bi-weekly check-ins, and guides Business Analysts.",
    },
    {
        role: "Business Analysts (×4)",
        desc:
            "A team of four analysts running primary research, modeling, and synthesis under the PM's direction.",
    },
];

const SectionContainer = styled.div`
  width: 100vw;
  height: 125vh;
  background-color: #e0cff2;
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
  padding: 14vh clamp(24px, 5vw, 96px);
  box-sizing: border-box;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: futura-pt, sans-serif;
  font-size: 14px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #1e1e1e;
  opacity: 0.7;
  margin-bottom: 24px;
  font-weight: 500;

  span.rule {
    width: 24px;
    height: 1px;
    background: #1e1e1e;
    opacity: 0.4;
  }
`;

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 40px;
  align-items: end;
  margin-bottom: 56px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TitleText = styled.h2`
  font-family: futura-pt, sans-serif;
  font-size: clamp(36px, 7vmin, 80px);
  font-weight: 900;
  line-height: 0.88;
  margin: 0;
  color: #1e1e1e;
  text-transform: uppercase;
`;

const Blurb = styled.p`
  font-family: futura-pt, Helvetica, sans-serif;
  font-size: clamp(18px, 1.9vmin, 18px);
  line-height: 1.6;
  color: #1e1e1e;
  margin: 0;
  opacity: 0.85;
  max-width: 46ch;
`;

const RolesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border: 1px solid #1e1e1e;
`;

const RoleRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 2fr;
  gap: 24px;
  padding: 24px clamp(20px, 3vw, 36px);
  align-items: baseline;
  background: ${({ alt }) => (alt ? "#F2EAFB" : "#FAF7FE")};
  border-bottom: ${({ last }) =>
        last ? "none" : "1px solid rgba(30,30,30,0.15)"};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const RoleNum = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  letter-spacing: 0.14em;
  opacity: 0.55;
`;

const RoleName = styled.div`
  font-family: futura-pt, sans-serif;
  font-size: clamp(18px, 2.4vmin, 24px);
  font-weight: 900;
  text-transform: uppercase;
  color: #1e1e1e;
  line-height: 1.1;
`;

const RoleDesc = styled.p`
  font-family: futura-pt, Helvetica, sans-serif;
  font-size: clamp(18px, 1.8vmin, 17px);
  line-height: 1.55;
  color: #1e1e1e;
  margin: 0;
`;

function TeamSection() {
    return (
        <SectionContainer>
            <ScrollWrapper>
                <Inner>
                    <SectionLabel>
                        <span>04</span>
                        <span className="rule" />
                        <span>How We Staff a Project</span>
                    </SectionLabel>
                    <HeaderGrid>
                        <TitleText>
                            Six people<br />on your team.
                        </TitleText>
                        <Blurb>
                            Every engagement is staffed with a Senior Advisor, a Project
                            Manager, and four Business Analysts. The Executive Board oversees
                            scoping and sign-off; you talk primarily to the PM.
                        </Blurb>
                    </HeaderGrid>
                    <RolesList>
                        {ROLES.map((r, i) => (
                            <RoleRow
                                key={i}
                                alt={i % 2 === 1}
                                last={i === ROLES.length - 1}
                            >
                                <RoleNum>0{i + 1}</RoleNum>
                                <RoleName>{r.role}</RoleName>
                                <RoleDesc>{r.desc}</RoleDesc>
                            </RoleRow>
                        ))}
                    </RolesList>
                </Inner>
            </ScrollWrapper>
        </SectionContainer>
    );
}

export default TeamSection;