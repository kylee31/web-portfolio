import styled, { css } from "styled-components";

interface TooltipType{
    children:React.ReactNode,
    message:string
}

//Tooltip을 띄울 Component를 감싸주거나, 해당 태그 다음 줄에 작성하여 띄우는 방법
function Tooltip({children,message}:TooltipType){

    return(
        <Container>
            {children}
            <div>{message}</div>
        </Container>
    )
}

export default Tooltip;

const Message=css`
    color:white;
    background-color:black;
`
const Container=styled.div`
    position:relative;
    width:100px;
    hieght:30px;
    display:inline-block;
    &:hover {
        ${Message}
        display:block;
    }
    &:active {
        ${Message}
        display:none;
    }
`
