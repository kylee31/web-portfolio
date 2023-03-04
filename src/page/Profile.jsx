import styled from "styled-components";
import { Box } from "../styled/Pages";
import data from "../db/data.json";

const Pic = styled.img`
    width: 200px;
    height: 250px;
    margin-right: 50px; 
`

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

const Dev = styled.div`
    margin: 35px 100px;
`

const Item = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;
    margin-bottom:50px;
`

function Profile() {
    return (
        <Box>
            <div>
                <Pro>
                    <Pic alt="" src="img/pic.jpg" />
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
                <Dev>
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
                </Dev>
                <Dev>
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
                </Dev>
            </div>
        </Box >
    );
}

export default Profile;