import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
    height: 28vh;
    width: 57vw;
    outline: solid 3px #1e1e1e;
    margin: 0.15vh;
    padding-right: 0.2vw;
    background-color: transparent; /* Transparent background */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-aspect-ratio: 1217/835) {
        width: 79vw;
    }
    @media (max-aspect-ratio: 610/835) {
        padding-right: 1vw;
    }
`;

const Timeline = styled.div`
    width: 90%;
    height: 0.3vh; /* Thickness of the timeline */
    background-color: #000; /* Color of the timeline */
    position: relative;
    display: flex;
    align-items: center;

	transform: translateY(-1vh);

	margin-left: 8%;
`;

const TimelineDot = styled.div`
    width: 1.5vw; /* 1.5 times bigger than the original 12px */
    height: 1.5vw; /* 1.5 times bigger than the original 12px */
    /* 👈 Changes background to transparent if it's the first empty anchor element */
    background-color: ${({ invisible }) => (invisible ? 'transparent' : '#000')}; 
    border-radius: 50%;
    position: absolute;
    left: ${({ position }) => position}%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TimelineTextGroup = styled.div`
  position: absolute;
  width: 12vw; /* Increased from 10vw to give the date/time line extra breathing room */
  transform: translateX(-50%); 
  text-align: center;
  font-size: 1vw;
  
  /* Alternating top/bottom positioning relative to the line shift */
  ${({ position }) => (position % 2 === 0 ? 'top: 5vh;' : 'top: -10vh;')} 
`;

// Styled component specifically to handle long dates/times without warping titles
const DateTimeRow = styled.div`
  white-space: nowrap;
`;

const TimelineComponent = () => {
    const events = [
        {
            title: "",
            location: "",
            date: "",
            time: ""
        },
        {
            title: "Festifall",
            location: "Diag Table C-12",
            date: "Sep 2nd",
            time: "3:00-5:00 PM"
        },
        {
            title: "Intro to Consulting \n(with General Motors)",
            location: "Robertson Auditorium",
            date: "Sep 8th",
            time: "8:00-9:00 PM"
        },
        {
            title: "Meet the Clubs",
            location: "Winter Garden",
            date: "Sep 9th",
            time: "5:30-7:30 PM"
        },
        {
            title: "Mass Meeting",
            location: "Blau 1580",
            date: "Sep 13th",
            time: "10:30-11:30 AM"
        },
        {
            title: "Speed Dating",
            location: "TBA",
            date: "Sep 18th",
            time: "5:00-8:00 PM"
        },
        {
            title: "DEI/Career Panel",
            location: "TBA",
            date: "Sep 20th",
            time: "1:00-2:00 PM"
        },
        {
            title: "Application Due",
            location: "Online",
            date: "Sep 21th",
            time: "11:59 PM"
        },
    ];

    const totalEvents = events.length; 

    return (
        <TimelineContainer>
            <Timeline>
                {events.map((event, index) => (
                    <TimelineDot
                        key={index}
                        position={index * (100 / (totalEvents - 1))} 
                        invisible={index === 7} /* 👈 Hides the dot for the empty anchor at index 0 */
                    >
                        {/* 👈 Only renders the text group if it's a real event (index > 0) */}
                        {index > 0 && (
                            <TimelineTextGroup position={index}>
                                <div style={{ whiteSpace: "pre-line" }}>
                                    <strong>{event.title}</strong>
                                </div>
                                <div>{event.location}</div>
                                <DateTimeRow>{event.date} {event.time}</DateTimeRow>
                            </TimelineTextGroup>
                        )}
                    </TimelineDot>
                ))}
            </Timeline>
        </TimelineContainer>
    );
};

export default TimelineComponent;