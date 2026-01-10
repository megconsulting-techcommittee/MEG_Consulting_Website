import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const ButtonContainer = styled.div`
  & {
    z-index: 99;
    height: 5vmax;
    width: 5vmax;
    border-radius: 999px;
    background-color: #E0CFF2;

    display: flex;
    padding-left: 0.835vmax;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-size: 3vmax;
    overflow: hidden;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: solid 0.05em #1e1e1e;
    cursor: pointer;
  }
  transition: width 1s 0.25s, background-color 0.25s;
  &::before {
    content: "";
    position: absolute;
    left: 0%;
    width: 5vmax;
    height: 50%;
    z-index: 100;
  }
  &:hover::before{
      width:19vmax;
  }
  &:hover {
    width: 19vmax;
    
  }
`;

const TextContainer = styled.div`
  margin-left: 1vmax;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 0.9vmax;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 700;
  width: 14vmax;
  text-align: left;
  color: #1e1e1e;
`;

function FormButton(props) {

  return (
    <a href="https://github.com/megconsulting-techcommittee/MEG_Consulting_Website" target="_blank">
      <ButtonContainer
        style={{
          display: props.visible ? "none" : "flex",
        }}
      >
        <IconContainer>
          <BsCodeSlash color={"#1e1e1e"} />
        </IconContainer>
        <TextContainer>
          <TitleText style={{ color: "#1e1e1e" }}>
            See our source code and learn more about this website
          </TitleText>
        </TextContainer>
      </ButtonContainer>
    </a>
  );
}

export default FormButton;
