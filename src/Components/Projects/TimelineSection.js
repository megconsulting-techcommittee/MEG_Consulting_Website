import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const PHASES = [
    {
        week: "Weeks 1–2",
        label: "Kickoff & scoping",
        detail: "Introductions, NDA, scope alignment.",
    },
    {
        week: "Weeks 3–5",
        label: "Research",
        detail: "Primary interviews, secondary research, competitive analysis.",
    },
    {
        week: "Weeks 6–7",
        label: "Analysis",
        detail: "Synthesis, modeling, midpoint client check-in.",
    },
    {
        week: "Weeks 8–9",
        label: "Recommendations",
        detail: "Strategy, deliverable building.",
    },
    {
        week: "Week 10",
        label: "Final readout",
        detail: "Executive presentation, deliverable handoff, project wrap-up.",
    },
];

const SectionContainer = styled.div`
  width: 100vw;
  height: 125vh;
  background-color: #d0d1f2;
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
  padding: 20vh clamp(24px, 5vw, 96px) 14vh;
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

const Rail = styled.div`
  position: relative;
  padding-left: 8px;
`;

const Track = styled.div`
  display: grid;
  grid-template-columns: repeat(${PHASES.length}, 1fr);
  gap: 0;
  position: relative;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Connector = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1e1e1e;
  z-index: 0;
  transform: scaleX(${({ visible }) => (visible ? 1 : 0)});
  transform-origin: left;
  transition: transform ${0.25 + PHASES.length * 0.12}s
    cubic-bezier(0.22, 0.61, 0.36, 1);

  @media (max-width: 900px) {
    top: 0;
    bottom: 0;
    left: 6px;
    right: auto;
    width: 2px;
    height: auto;
    transform: scaleY(${({ visible }) => (visible ? 1 : 0)});
    transform-origin: top;
  }
`;

const Milestone = styled.div`
  position: relative;
  z-index: 1;
  padding-right: 16px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateY(${({ visible }) => (visible ? "0" : "18px")});
  transition: opacity 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)
      ${({ delay }) => delay}s,
    transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) ${({ delay }) => delay}s;

  @media (max-width: 900px) {
    padding-bottom: 24px;
    padding-left: 28px;
    padding-right: 0;
  }
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ filled }) => (filled ? "#FAF7FE" : "#FAF7FE")};
  border: 2.5px solid #1e1e1e;
  margin-bottom: 20px;
`;

const WeekLabel = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 15px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.65;
  margin-bottom: 6px;
`;

const PhaseLabel = styled.div`
  font-family: futura-pt, sans-serif;
  font-size: clamp(18px, 1.9vmin, 18px);
  font-weight: 700;
  color: #1e1e1e;
  margin-bottom: 8px;
  line-height: 1.15;
`;

const PhaseDetail = styled.p`
  font-family: futura-pt, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #1e1e1e;
  margin: 0;
  opacity: 0.8;
`;

function TimelineSection() {
    const railRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!railRef.current) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setVisible(true);
                });
            },
            { threshold: 0.25 }
        );
        obs.observe(railRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <SectionContainer>
            <ScrollWrapper>
                <Inner>
                    <SectionLabel>
                        <span>03</span>
                        <span className="rule" />
                        <span>Project Timeline</span>
                    </SectionLabel>
                    <HeaderGrid>
                        <TitleText>
                            What an<br />engagement<br />looks like.
                        </TitleText>
                        <Blurb>
                            We run three semesters a year — fall, winter, and summer. Each
                            engagement is roughly <strong>10 weeks</strong>, structured around
                            five phases with a midpoint check-in and a final executive readout.
                        </Blurb>
                    </HeaderGrid>
                    <Rail ref={railRef}>
                        <Track>
                            <Connector visible={visible} />
                            {PHASES.map((p, i) => (
                                <Milestone key={i} visible={visible} delay={0.15 + i * 0.12}>
                                    <Dot filled={i === 0} />
                                    <WeekLabel>{p.week}</WeekLabel>
                                    <PhaseLabel>{p.label}</PhaseLabel>
                                    <PhaseDetail>{p.detail}</PhaseDetail>
                                </Milestone>
                            ))}
                        </Track>
                    </Rail>
                </Inner>
            </ScrollWrapper>
        </SectionContainer>
    );
}

export default TimelineSection;