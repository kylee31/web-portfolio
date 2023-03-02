import styled from "styled-components";
import { Box } from "../styled/Pages";

const Item = styled.div`
`

function Profile() {

    //img, name, github, velog, youtube
    //가능 기술, 언어 (프론트, 백)
    //back node.js, express, mongoDB, Git, Github
    //각오 짧게

    return (
        <Box>
            <Item>
                <div style={{ margin: "70px 100px", display: "flex" }}>
                    <img style={{ width: "200px", height: "250px", marginRight: "50px" }} alt="" src="img/pic.jpg" />
                    <div style={{ width: "600px" }}>
                        <h1>이경연</h1> 1998년 3월 10일<br />
                        <hr />
                        국회의원은 법률이 정하는 직을 겸할 수 없다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.
                        국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.
                        <br /><br />
                        GTQ 2급 2017년<br />
                        정보처리기사 2022년
                    </div>
                </div>
                <div style={{ margin: "35px 100px" }}>
                    Front<br /><hr />
                    <img style={{ width: "850px" }} alt="" src="img/front.png" />
                </div>
                <div style={{ margin: "35px 100px" }}>
                    Back<br /><hr />
                    <img style={{ width: "850px" }} alt="" src="img/front.png" />
                </div>
            </Item>
        </Box>
    );
}

export default Profile;