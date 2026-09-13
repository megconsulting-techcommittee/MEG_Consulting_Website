import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const RECRUITMENT_EVENTS = [
  {
    id: 1,
    title: "Festifall",
    location: "Diag Table C-12",
    date: "Sep 2nd",
    endIso: "2026-09-02T17:00:00",
    time: "3:00 - 5:00 PM",
    description: "Stop by our table at the Diag to chat with active members and learn more about our culture.",
  },
  {
    id: 2,
    title: "Intro to Consulting (with General Motors)",
    location: "Robertson Auditorium",
    date: "Sep 8th",
    endIso: "2026-09-08T21:30:00",
    time: "8:00 - 9:30 PM",
    description: "An interactive educational event hosted by MEG and GM, covering what consulting is, case structuring, and steps to pursue a career in consulting.",
  },
  {
    id: 3,
    title: "Meet the Clubs",
    location: "Winter Garden Table 39",
    date: "Sep 9th",
    endIso: "2026-09-09T19:30:00",
    time: "5:30 - 7:30 PM",
    description: "Discover what MEG has to offer and meet our members!",
  },
  {
    id: 4,
    title: "Mass Meeting",
    location: "Blau 1580",
    date: "Sep 13th",
    endIso: "2026-09-13T11:30:00",
    time: "10:30 - 11:30 AM",
    description: "Our core info session covering our members, projects, mentorship, and application guidelines.",
  },
  {
    id: 5,
    title: "Speed Dating",
    location: "TBA",
    date: "Sep 18th",
    endIso: "2026-09-18T20:00:00",
    time: "5:00 - 8:00 PM",
    description: "Fast-paced Q&A rounds with fun questions to help us get to know you personally!",
    signUpLink: "https://www.signupgenius.com/go/10C0A4FA8A92CA1FEC61-65123566-meg#/", 
  },
  {
    id: 6,
    title: "DEI / Career Panel",
    location: "TBA",
    date: "Sep 20th",
    endIso: "2026-09-20T14:00:00",
    time: "1:00 - 2:00 PM",
    description: "Panel discussion featuring diverse current and past members sharing their career trajectories and experience with MEG.",
  },
  {
    id: 7,
    title: "Application Due",
    location: "Online Submission",
    date: "Sep 21st",
    endIso: "2026-09-21T23:59:00",
    time: "11:59 PM",
    description: "Final deadline to submit your application form.",
  },
];

// Helper to check if an event has concluded
const isPastEvent = (endIsoString) => {
  const now = new Date();
  const eventEndTime = new Date(endIsoString);
  return now > eventEndTime;
};

// Helper to dynamically find the index of the immediate next event
const getNextEventIndex = (events) => {
  const now = new Date();
  return events.findIndex((event) => new Date(event.endIso) > now);
};

const SectionContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #e0cff2;
  box-sizing: border-box;
  position: relative;
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  max-width: 100%;
  font-family: futura-pt, Helvetica, sans-serif;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #1e1e1e;
  opacity: 0.7;
  margin-bottom: 16px;
  font-weight: 500;

  span.rule {
    width: 24px;
    height: 1px;
    background: #1e1e1e;
    opacity: 0.4;
  }
`;

const TitleText = styled.h2`
  font-size: clamp(36px, 6vw, 68px);
  font-weight: 900;
  line-height: 0.95;
  margin: 0 0 16px 0;
  color: #1e1e1e;
  text-transform: uppercase;
`;

const CalloutText = styled.p`
  font-size: 17px;
  line-height: 1.5;
  color: #1e1e1e;
  margin: 0 0 24px 0;
  max-width: 650px;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 56px;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background-color: ${({ primary }) => (primary ? "#1e1e1e" : "transparent")};
  color: ${({ primary }) => (primary ? "#faf7fe" : "#1e1e1e")};
  border: 2px solid #1e1e1e;
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#383838" : "#1e1e1e")};
    color: #faf7fe;
  }
`;

/* Specific inline button for card actions */
const CardActionButton = styled(ActionButton)`
  margin-top: 18px;
  padding: 10px 20px;
  font-size: 11px;
  align-self: flex-start;
`;

const FeaturedCard = styled.div`
  background: #faf7fe;
  border: 2px solid #1e1e1e;
  box-shadow: 8px 8px 0px #1e1e1e;
  display: grid;
  grid-template-columns: 240px 1fr;
  margin-bottom: 48px;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedGraphic = styled.div`
  background: #1e1e1e;
  color: #e0cff2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: center;
  border-right: 2px solid #1e1e1e;

  .label {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    opacity: 0.7;
    margin-bottom: 8px;
  }

  .date {
    font-size: 32px;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 2px solid #1e1e1e;
    padding: 32px 16px;
  }
`;

const FeaturedContent = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.article`
  background: ${({ isPast }) => (isPast ? "#d5c3e8" : "#faf7fe")};
  border: 1px solid #1e1e1e;
  padding: 28px;
  display: flex;
  flex-direction: column;
  position: relative;
  
  opacity: ${({ visible, isPast }) => (visible ? (isPast ? 0.5 : 1) : 0)};
  filter: ${({ isPast }) => (isPast ? "grayscale(60%)" : "none")};

  transform: translateY(${({ visible }) => (visible ? "0" : "20px")});
  transition: opacity 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) ${({ delay }) => delay}s,
              transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) ${({ delay }) => delay}s,
              filter 0.3s ease;

  &:hover {
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    filter: none;
  }
`;

const CardMetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const EventTag = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1e1e1e;
  opacity: 0.65;
`;

const Badge = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: ${({ isPast }) => (isPast ? "transparent" : "#1e1e1e")};
  color: ${({ isPast }) => (isPast ? "#1e1e1e" : "#e0cff2")};
  border: ${({ isPast }) => (isPast ? "1px solid #1e1e1e" : "none")};
  padding: 4px 8px;
`;

const EventTitle = styled.h3`
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 900;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  color: #1e1e1e;
  opacity: ${({ isPast }) => (isPast ? 0.75 : 1)};
`;

const EventDetails = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #1e1e1e;
  margin-bottom: 14px;

  span.dot {
    margin: 0 8px;
    opacity: 0.5;
  }
`;

const EventDescription = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #1e1e1e;
  margin: 0;
  opacity: 0.9;
`;

function MenuSection() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const nextEventIndex = getNextEventIndex(RECRUITMENT_EVENTS);
  const featuredEvent = nextEventIndex !== -1 ? RECRUITMENT_EVENTS[nextEventIndex] : null;

  return (
    <SectionContainer>
      <InnerContainer>
        <SectionLabel>
          <span>Fall Recruitment</span>
        </SectionLabel>

        <TitleText>Our Recruitment Timeline</TitleText>

        <CalloutText>
          Want to keep up with MEG? Sign up on our interest form to be notified of important events, deadlines, and more!
        </CalloutText>

        <ButtonGroup>
          <ActionButton
            primary
            href="https://docs.google.com/forms/d/e/1FAIpQLSeCD18fJH0BuwV_pxh2MOQr1SLB9KV7sqs9WvRHhVtjOWRruw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interest Form
          </ActionButton>
          <ActionButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSeVKRxyVcs6nK-thmiTAKFKLPg0tV0XZ55_AE5CA86OKr2M4w/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </ActionButton>
        </ButtonGroup>

        {/* Featured Next Event Banner */}
        {featuredEvent && (
          <FeaturedCard>
            <FeaturedGraphic>
              <div className="label">Next Up</div>
              <div className="date">{featuredEvent.date}</div>
            </FeaturedGraphic>
            <FeaturedContent>
              <CardMetaRow>
                <EventTag>Featured Session</EventTag>
                <Badge>Upcoming</Badge>
              </CardMetaRow>
              <EventTitle>{featuredEvent.title}</EventTitle>
              <EventDetails>
                {featuredEvent.date} <span className="dot">•</span> {featuredEvent.time} <span className="dot">•</span> {featuredEvent.location}
              </EventDetails>
              <EventDescription>{featuredEvent.description}</EventDescription>

              {/* Render Sign Up button if featured event has signUpLink */}
              {featuredEvent.signUpLink && (
                <CardActionButton
                  primary
                  href={featuredEvent.signUpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign Up for {featuredEvent.title}
                </CardActionButton>
              )}
            </FeaturedContent>
          </FeaturedCard>
        )}

        {/* Chronological Timeline Cards */}
        <CardsList ref={containerRef}>
          {RECRUITMENT_EVENTS.map((event, index) => {
            const past = isPastEvent(event.endIso);
            const isNext = index === nextEventIndex;

            return (
              <Card
                key={event.id}
                isPast={past}
                visible={visible}
                delay={0.05 + index * 0.1}
              >
                <CardMetaRow>
                  <EventTag>Event 0{index + 1}</EventTag>
                  {past ? (
                    <Badge isPast>Concluded</Badge>
                  ) : (
                    isNext && <Badge>Next Up</Badge>
                  )}
                </CardMetaRow>

                <EventTitle isPast={past}>{event.title}</EventTitle>

                <EventDetails>
                  {event.date} <span className="dot">•</span> {event.time} <span className="dot">•</span> {event.location}
                </EventDetails>

                <EventDescription>{event.description}</EventDescription>

                {/* Render Sign Up button if card has signUpLink and hasn't concluded */}
                {event.signUpLink && !past && (
                  <CardActionButton
                    primary
                    href={event.signUpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </CardActionButton>
                )}
              </Card>
            );
          })}
        </CardsList>
      </InnerContainer>
    </SectionContainer>
  );
}

export default MenuSection;