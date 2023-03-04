import styled from "styled-components";
import { Box } from "../styled/Pages";
import data from "../db/data.json";

const Pic = styled.img`
    width: 200px;
    height: 250px;
    margin: 0 20px;
`

const Content = styled.div`
    max-width: 600px;
    margin: 0 20px;
`

const Tech = styled.div`
    display: inline-block;
    text-align: center;
`

const Pro = styled.div`
    display:flex;
    align-item:center;
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

const Font = styled.span`
    font-weight: bold;
    color: ${props => props.color};
    font-size: 1.1rem;
`

function Profile() {
    return (
        <Box>
            <div>
                <Pro>
                    <Pic alt="" src="img/pic.jpg" />
                    <Content>
                        <h1>이경연</h1> skyvip3031@naver.com<br /><hr />
                        국회의원은 법률이 정하는 직을 겸할 수 없다. 헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다.
                        국가는 사회보장·사회복지의 증진에 노력할 의무를 진다.
                        <br /><br />
                        <Font>✅ GTQ 2급 2017년<br />✅ 정보처리기사 2022년</Font>
                    </Content>
                </Pro>
                <Dev>
                    <Font color="#4fbb00">Front</Font><br /><hr />
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
                    <Font color="#4fbb00">Back</Font><br /><hr />
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