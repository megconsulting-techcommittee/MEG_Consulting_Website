import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const PROJECT_EXAMPLES = [
  {
    tag: "Expansion into new market",
    client: "Aerospace Components Manufacturer",
    industry: "Aerospace · Mfg",
    scope:
      "Identified high-value adjacent markets for a precision aerospace components manufacturer through competitive landscape analysis, customer-segment sizing, and channel-partner mapping across commercial and defense.",
    delivered:
      "Three-tier go-to-market roadmap with prioritized customer targets and a 12-month sales playbook.",
    accent: "#C0AEDE",
  },
  {
    tag: "Internal AI integration",
    client: "National Medical Insurance Provider",
    industry: "Healthcare insurance",
    scope:
      "Assessed workforce readiness for AI integration across claims, member services, and provider relations — combining technical-capability audits with cultural surveys to surface adoption blockers.",
    delivered:
      "AI governance framework with KPI dashboards, a department-by-department rollout plan, and a change-management toolkit.",
    accent: "#C0AEDE",
  },
  {
    tag: "Business transformation",
    client: "Local Ann Arbor Restaurant",
    industry: "Food & beverage",
    scope:
      "Diagnosed margin and traffic challenges for a long-running Ann Arbor restaurant by analyzing POS data, customer reviews, and competitive positioning across Main Street and Kerrytown.",
    delivered:
      "Refreshed menu architecture, a digital-presence playbook, and a 90-day operations checklist for the owner-operator team.",
    accent: "#C0AEDE",
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
  align-items: center;
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

const TitleText = styled.h2`
  font-family: futura-pt, sans-serif;
  font-size: clamp(36px, 7vmin, 80px);
  font-weight: 900;
  line-height: 0.88;
  margin: 0 0 56px 0;
  color: #1e1e1e;
  text-transform: uppercase;
  text-align: left;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: #faf7fe;
  border: 1px solid #1e1e1e;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateY(${({ visible }) => (visible ? "0" : "22px")});
  transition: opacity 1.1s cubic-bezier(0.22, 0.61, 0.36, 1)
      ${({ delay }) => delay}s,
    transform 1.1s cubic-bezier(0.22, 0.61, 0.36, 1)
      ${({ delay }) => delay}s;
`;

const CardMeta = styled.div`
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1e1e1e;
  opacity: 0.65;
  margin-bottom: 8px;
`;

const CardTag = styled.h3`
  font-family: futura-pt, sans-serif;
  font-size: clamp(20px, 2.6vmin, 26px);
  font-weight: 900;
  margin: 0 0 6px;
  line-height: 1.05;
  text-transform: uppercase;
  color: #1e1e1e;
`;

const CardClient = styled.div`
  font-family: futura-pt, sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #1e1e1e;
  margin-bottom: 20px;
`;

const AccentBar = styled.div`
  height: 6px;
  width: 64px;
  background: ${({ color }) => color};
  margin-bottom: 20px;
`;

const ScopeText = styled.p`
  font-family: futura-pt, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.55;
  color: #1e1e1e;
  margin: 0;
  flex: 1;
`;

const DeliveredBlock = styled.div`
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(30, 30, 30, 0.2);
`;

const DeliveredLabel = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #1e1e1e;
  opacity: 0.65;
  margin-bottom: 6px;
`;

const DeliveredText = styled.p`
  font-family: futura-pt, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #1e1e1e;
  margin: 0;
`;

function SkillsSection() {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!gridRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <SectionContainer>
      <ScrollWrapper>
        <Inner>
          <SectionLabel>
            <span>02</span>
            <span className="rule" />
            <span>Example Project Scopes</span>
          </SectionLabel>
          <TitleText>
            Recent work,<br />real outcomes.
          </TitleText>
          <CardsGrid ref={gridRef}>
            {PROJECT_EXAMPLES.map((p, i) => (
              <Card key={i} visible={visible} delay={0.1 + i * 0.4}>
                <CardMeta>
                  0{i + 1} · {p.industry}
                </CardMeta>
                <CardTag>{p.tag}</CardTag>
                <CardClient>{p.client}</CardClient>
                <AccentBar color={p.accent} />
                <ScopeText>{p.scope}</ScopeText>
                <DeliveredBlock>
                  <DeliveredLabel>Delivered</DeliveredLabel>
                  <DeliveredText>{p.delivered}</DeliveredText>
                </DeliveredBlock>
              </Card>
            ))}
          </CardsGrid>
        </Inner>
      </ScrollWrapper>
    </SectionContainer>
  );
}

export default SkillsSection;