import styled from "styled-components";
import MainItem from "../component/MainItem";
import { Box } from "../styled/Pages";
import data from "../db/data.json";

function MainProject() {
    return (
        <Box>
            <Items>
                {
                    data.projects.map((item, index) => {
                        return <MainItem key={index} title={item.title} src={item.src} descript={item.descript} front={item.front} back={item.back} takeaway={item.takeaway} href={item.href} webhref={item.webhref} />
                    })
                }
            </Items>
        </Box>
    );
}

export default MainProject;

const Items = styled.div`
    display:flex;
    width:100%;
    max-width:1200px;
    justify-content:space-between;
    flex-direction:row;
    flex-wrap:wrap;
    margin: 30px 100px;
    
    @media screen and ( max-width: 1200px ) {
        justify-content:center;
      }
`;