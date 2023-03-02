import SubItem from "../component/SubItem";
import { Box } from "../styled/Pages";
import data from "../db/data.json";
import styled from "styled-components";

const Items = styled.div`
    display:flex;
    width:100%;
    margin: 30px 100px;
    flex-direction:column;
`;

function SubProject() {

    //storage / javascript 연습 파일들 / movie app, todolist, word list, mini blog / 로그인 연습(메인 프로젝트?) / 게임프로그래밍

    return (
        <Box>
            <Items>
                {
                    data.subprojects.map((item, index) => {
                        return <SubItem key={index} src={item.src} title={item.title} date={item.date} href={item.href} youtube={item.youtube} color={item.color} languages={item.languages} descript={item.descript} />
                    })
                }
            </Items>
        </Box>
    );
}

export default SubProject;