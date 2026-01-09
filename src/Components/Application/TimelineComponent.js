import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
	height: 27vh;
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
`;

const TimelineDot = styled.div`
	width: 1.5vw; /* 1.5 times bigger than the original 12px */
	height: 1.5vw; /* 1.5 times bigger than the original 12px */
	background-color: ${({ invisible }) => (invisible ? 'transparent' : '#000')}; /* Make the last dot invisible */
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
  width: 10vw; /* Adjust width to fit the content */
  transform: ${({ position }) => (position === 7 ? 'translate(-52.5%)' : 'translateX(-67%)')};
  text-align: center;
  font-size: 1vw;
  ${({ position }) => (position % 2 === 0 ? 'top: 5vh;' : 'top: -9vh;')} /* Alternating top/bottom positioning */
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
			title: "Meet the Clubs",
			location: "Winter Garden",
			date: "Jan 8th",
			time: "4:30-7:30 PM"
		},
		{
			title: "Winterfest",
			location: "Union Ideahub",
			date: "Jan 12th",
			time: "4:00-7:00 PM"
		},
		{
			title: "Mass Meeting",
			location: "Blau Colloquium",
			date: "Jan 18th",
			time: "3:00-4:00 PM"
		},
		{
			title: "Speed Dating",
			location: "R0320 & R0420",
			date: "Jan 23rd",
			time: "6:00-9:00 PM"
		},
		{
			title: "DEI/Career Panel",
			location: "B0570",
			date: "Jan 25th",
			time: "6:30-8:00 PM"
		},
		{
			title: "Application Due",
			location: "Online",
			date: "Jan 26th",
			time: "11:59 PM"
		},
	];

	const dotCount = events.length - 2;

	return (
		<TimelineContainer>
			<Timeline>
				{events.map((event, index) => (
					<TimelineDot
						key={index}
						position={index === events.length - 1 ? 100 : 10 + index * (80 / dotCount)} 
						invisible={index === events.length - 1} /* Make the last dot invisible */
					>
						<TimelineTextGroup position={index}>
							<div><strong>{event.title}</strong></div>
							<div>{event.location}</div>
							<div>{event.date} {event.time}</div>
						</TimelineTextGroup>
					</TimelineDot>
				))}
			</Timeline>
		</TimelineContainer>
	);
};

export default TimelineComponent;
