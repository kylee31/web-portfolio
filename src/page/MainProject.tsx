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
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-gap:80px 100px;
    margin:70px 0;
    
    @media screen and ( max-width: 1200px ) {
        grid-template-columns:repeat(1,1fr);
        place-content:center;
      }
`;