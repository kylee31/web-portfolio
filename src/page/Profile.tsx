import styled from "styled-components";
import { Box } from "../styled/Pages";
import data from "../db/data.json";

function Profile() {
    return (
        <Box>
            <div>
                <Pro>
                    <Pic alt="" src="img/pic.jpg" />
                    <Content>
                        <h1>이경연</h1> skyvip3031@naver.com<br /><hr />
                        웹 디자인에 관심을 두고 이에 대한 재능을 가지고 있습니다. 팀원과의 소통과 의견 나눔을 중요시 여기는 책임감 있는 개발자가 되겠습니다.
                        <br /><br />
                        <Font>✅ GTQ 2급<br />✅ 정보처리기사</Font>
                    </Content>
                </Pro>
                <Dev>
                    <Font color="#4fbb00">Front</Font><br /><hr />
                    <Item>
                        {
                            data.front.map((item, index) => {
                                return (
                                    <Tech key={index}>
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
                            data.back.map((item, index) => {
                                return (
                                    <Tech key={index}>
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