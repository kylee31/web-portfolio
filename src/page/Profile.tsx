import styled from "styled-components";
import { Box } from "../styled/Pages";
import data from "../db/data.json";
import Tech from "../component/Tech";

function Profile() {
  return (
    <Box>
      <div>
        <Pro>
          <Pic alt="" src="img/pic.jpg" loading="lazy" />
          <Content>
            <h1>이경연</h1> skyvip3031@naver.com
            <br />
            <hr />
            미디어공학 및 컴퓨터정보공학을 전공하여 새로운 프로그래밍 언어
            학습에 능숙하고, GTQ 자격증 보유로 디자인에 대한 이해도가 높습니다.
            팀원과의 소통을 중요시 여기고 발전하는 개발자가 되겠습니다.
            <br />
            <br />
            <Font>
              ✅ 정보처리기사
              <br />✅ GTQ 2급
            </Font>
          </Content>
        </Pro>
        <Dev>
          <Font color="#4fbb00">Front</Font>
          <hr />
          <Item>
            {data.front.map((item, index) => {
              return <Tech key={index} item={item} />;
            })}
          </Item>
        </Dev>
        <Dev>
          <Font color="#4fbb00">Back</Font>
          <hr />
          <Item>
            {data.back.map((item, index) => {
              return <Tech key={index} item={item} />;
            })}
          </Item>
        </Dev>
      </div>
    </Box>
  );
}

export default Profile;

const Pic = styled.img`
  width: 200px;
  height: 250px;
  margin: 0 20px;
`;

const Content = styled.div`
  max-width: 600px;
`;

const Pro = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 100px 80px 100px;
`;

const Dev = styled.div`
  margin: 35px 100px 0 100px;
  & + & {
    margin-top: 80px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: space-around;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Font = styled.span`
  font-weight: bold;
  color: ${(props) => props.color};
  font-size: 1.1rem;
`;
