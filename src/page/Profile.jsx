import styled from "styled-components";
import { Box } from "../styled/Pages";
import data from "../db/data.json";

const Tech = styled.div`
    display: inline-block;
    text-align: center;
`
const Pro = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-wrap:wrap; 
    margin: 70px 100px; 
`
const Item = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;
`

function Profile() {

    //img, name, github, velog, youtube
    //가능 기술, 언어 (프론트, 백)
    //back node.js, express, mongoDB, Git, Github
    //각오 짧게

    return (
        <Box>
            <div>
                <Pro>
                    <img style={{ width: "200px", height: "250px", marginRight: "50px" }} alt="" src="img/pic.jpg" />
                    <div style={{ maxWidth: "600px" }}>
                        <h1>이경연</h1> 1998년 3월 10일<br />
                        <hr />
                        국회의원은 법률이 정하는 직을 겸할 수 없다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.
                        국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.
                        <br /><br />
                        GTQ 2급 2017년<br />
                        정보처리기사 2022년
                    </div>
                </Pro>
                <div style={{ margin: "35px 100px" }}>
                    Front<br /><hr />
                    <Item>
                        {
                            data.front.map((item) => {
                                return (
                                    <Tech>
                                        <img alt="" src={item.src} />
                                        <div>{item.name}</div>
                                    </Tech>
                                )
                            })
                        }
                    </Item>
                </div>
                <div style={{ margin: "35px 100px" }}>
                    Back<br /><hr />
                    <Item >
                        {
                            data.back.map((item) => {
                                return (
                                    <Tech>
                                        <img alt="" src={item.src} />
                                        <div>{item.name}</div>
                                    </Tech>
                                )
                            })
                        }
                    </Item>
                </div>
            </div>
        </Box >
    );
}

export default Profile;