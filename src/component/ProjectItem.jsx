import styled from "styled-components";

const Item = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:270px;
    height:180px;
    border-radius:15px;
    margin:5vw;
    background-color:black;
    color:white;
    font-weight:900;
    cursor:pointer;
    &:hover{
        background-color:gray;
    }
`

function ProjectItem() {

    return (
        <Item>project1</Item>
    );
}

export default ProjectItem;