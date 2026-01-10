import styled from "styled-components";
import ClientButton from "./ClientButton";
import WebButton from "./WebButton";
import FormButton from "./FormButton";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const ButtonContainer = styled.div`
    position: absolute;
    flex-direction: column;
    bottom: 4.5vmax;
    left: 4.5vmax;
    z-index:1;
`

const MenuContainer = styled.div`
    height: 5vmax;
    width: 5vmax;
    position: relative;
    transition: padding-top 1s;
`

const ShiftContainer = styled.div`
    position: absolute;
    transition: bottom 1s;
`

const ExpandButton = styled.div`
    height: 5vmax;
    width: 5vmax;
    border-radius: 999px;
    display: flex;
    padding-left: 0.835vmax;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    font-size: 3vmax;
    background-color: #E0CFF2;
    overflow: hidden;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: solid 0.05em #1e1e1e;
    transition: background-color .2s;
    cursor: pointer;
`


function ButtonMenu (props){

    const [menuHoverID, setMenuHoverID] = useState(0);
    const [hoverButtonID, setHoverButtonID] = useState(0);
    const [delayHandler, setDelayHandler] = useState(null);


    function handleMouseClick(){
        if (menuHoverID === 0){
            setMenuHoverID(1)
        }
        else{
            setMenuHoverID(0);
        }
    }

    function handleMouseLeave(){
        if (hoverButtonID === 0){
            setMenuHoverID(0);
        }
        else{
            setDelayHandler(setTimeout(()=>{
                setMenuHoverID(0);
            },1000))
        }
    }

    return(
        <ButtonContainer>
            <MenuContainer onMouseEnter={ ()=>{setTimeout(()=>{setMenuHoverID(1)},100); clearTimeout(delayHandler)}} onMouseLeave={()=>{handleMouseLeave()}} style={{paddingTop: menuHoverID ? "18vmax":"0"}}>
                <ShiftContainer style={{bottom: menuHoverID ? "12vmax":"0vmax", pointerEvents: menuHoverID ? "auto":"none"  }} onMouseEnter={()=>{setHoverButtonID(1)}} onMouseLeave={()=>{setHoverButtonID(0)}}>
                    <FormButton  visible={props.buttonScrollID}/>
                </ShiftContainer>
                <ShiftContainer style={{bottom: menuHoverID ? "6vmax":"0vmax", pointerEvents: menuHoverID ? "auto":"none"  }} onMouseEnter={()=>{setHoverButtonID(1)}} onMouseLeave={()=>{setHoverButtonID(0)}}>
                    <ClientButton visible={props.buttonScrollID} />
                </ShiftContainer> 
                <ShiftContainer>
                    <ExpandButton style={{backgroundColor: props.buttonScrollID ? "#1e1e1e":"#E0CFF2"}} onMouseDown={()=>{handleMouseClick(); clearTimeout(delayHandler);}} >
                        <BsThreeDots color={"#1e1e1e"}/>
                    </ExpandButton>
                </ShiftContainer>
            </MenuContainer>
        </ButtonContainer>
    )
}

export default ButtonMenu