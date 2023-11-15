import styled from "styled-components";

interface GroupInfo {
  item: {
    src?: string;
    title: string;
    date: string;
    href?: string;
    color: string;
    languages: string;
    descript: string;
    webhref?: string;
    youtube?: string;
  };
}

function GroupItem({ item }: GroupInfo) {
  return (
    <Box>
      <Item>
        {item.youtube ? (
          <iframe
            width="300"
            height="150"
            src={item.youtube}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <Img alt="" src={item.src} />
        )}
        <WebLink>
          {item.webhref && (
            <A style={{ color: "#b3e9af" }} href={item.webhref} target="_blank">
              <Icon alt="" src="img/logo/website.png" loading="lazy" />
              Web Site
            </A>
          )}
          {item.href && (
            <A href={item.href} target="_blank">
              <Icon alt="" src="img/logo/github2.png" />
              GitHub code & README
            </A>
          )}
        </WebLink>
      </Item>
      <Content>
        <span>
          <Title>{item.title}</Title>
          <Date>({item.date})</Date>
        </span>
        <Tech color={item.color}>{item.languages}</Tech>
        <div>{item.descript}</div>
      </Content>
    </Box>
  );
}

export default GroupItem;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  & + & {
    margin-top: 5rem;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 170px;
  border-radius: 15px;
  padding: 20px;
  background-color: black;
  margin-right: 30px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 690px;
  white-space: pre-line;
  @media (max-width: 600px) {
    padding: 0 50px;
  }
  @media (max-width: 800px) {
    padding: 0 50px;
  }
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
`;

const Date = styled.span`
  font-size: 0.9rem;
  margin-left: 10px;
  font-weight: bold;
  color: #666666;
`;

const Img = styled.img`
  width: 300px;
  height: 150px;
  border-bottom: 2px solid black;
`;

const Tech = styled.span`
  border-radius: 10px;
  font-weight: bold;
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  width: 85px;
  height: 25px;
  margin: 10px 0;
`;

const Icon = styled.img`
  width: 20px;
  vertical-align: middle;
  margin-right: 5px;
`;

const A = styled.a`
  text-decoration-line: none;
  color: lightgrey;
  font-weight: 800;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  margin-top: 5px;
  & + & {
    margin-left: 5px;
  }
`;

const WebLink = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;
