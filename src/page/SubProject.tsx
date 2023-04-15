import SubItem from "../component/SubItem";
import { Box } from "../styled/Pages";
import data from "../db/data.json";
import styled from "styled-components";

function SubProject() {
    return (
        <Box>
            <Items>
                {
                    data.subprojects.map((item, index) => {
                        return <SubItem key={index} src={item.src} title={item.title} date={item.date} webhref={item.webhref} href={item.href} youtube={item.youtube} color={item.color} languages={item.languages} descript={item.descript} />
                    })
                }
            </Items>
        </Box>
    );
}

export default SubProject;


const Items = styled.div`
    display:flex;
    width:100%;
    max-width:1200px;
    margin: 30px 100px;
    flex-direction:column;
`;