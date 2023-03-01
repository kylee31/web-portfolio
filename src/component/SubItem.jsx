import styled from "styled-components";

const Item = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:300px;
    height:200px;
    border-radius:15px;
    margin:40px 0;
    padding:20px;
    background-color:black;
`

function SubItem() {
    return (
        <Item>
        </Item>
    );
}

export default SubItem;