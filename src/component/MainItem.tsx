import styled from "styled-components";

interface MainInfo {
  item: {
    title: string;
    src: string;
    descript: string;
    front: string[];
    back: string[];
    takeaway: string;
    href: string;
    webhref?: string;
  };
}

function MainItem({ item }: MainInfo) {
  return (
    <Item>
      <Title>{item.title}</Title>
      <Img alt="" src={item.src} />
      <Content>
        <Desc>💡 {item.descript}</Desc>
        <Take>{item.takeaway}</Take>
        <div style={{ display: "flex", marginBottom: "5px" }}>
          <Tech>Front-end</Tech>
          <Techs>{item.front}</Techs>
        </div>
        <div style={{ display: "flex" }}>
          <Tech>Back-end</Tech>
          <Techs>{item.back}</Techs>
        </div>
      </Content>
      <WebLink>
        {item.webhref && (
          <A style={{ color: "#b3e9af" }} href={item.webhref} target="_blank">
            <Icon alt="" src="img/logo/website.png" loading="lazy" />
            Web Site 보기{" "}
          </A>
        )}
        <A href={item.href} target="_blank">
          <Icon alt="" src="img/logo/github2.png" />
          GitHub code 보기
        </A>
      </WebLink>
    </Item>
  );
}

export default MainItem;

const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  height: 500px;
  border-radius: 15px;
  padding: 20px;
  background-color: black;
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 5px;
  color: white;
`;

const Content = styled.div`
  width: 430px;
  height: 200px;
  background-color: white;
  padding: 10px;
`;

const Tech = styled.span`
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: bolder;
  background-color: grey;
  color: white;
  text-align: center;
  padding: 0 5px;
  width: 65px;
  height: 20px;
  margin-right: 5px;
`;

const Techs = styled.div`
  font-size: 0.85rem;
  color: #666666;
  font-weight: bold;
`;

const Desc = styled.div`
  width: 430px;
  height: 35px;
  font-size: 0.9rem;
  font-weight: bold;
`;

const Take = styled.div`
  width: 430px;
  height: 100px;
  font-size: 0.85rem;
  white-space: pre-line;
`;

const Img = styled.img`
  width: 450px;
  height: 225px;
  border-bottom: 2px solid black;
`;

const Icon = styled.img`
  width: 25px;
  vertical-align: middle;
  margin-right: 5px;
`;

const A = styled.a`
  text-decoration-line: none;
  color: lightgrey;
  font-weight: 800;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  & + & {
    margin-left: 5px;
  }
`;

const WebLink = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: right;
`;
