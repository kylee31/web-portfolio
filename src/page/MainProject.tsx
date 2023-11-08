import styled from "styled-components";
import MainItem from "../component/MainItem";
import { Box } from "../styled/Pages";
import data from "../db/data.json";

function MainProject() {
  return (
    <Box>
      <Items>
        {data.projects.map((item, index) => {
          return <MainItem key={index} item={item} />;
        })}
      </Items>
    </Box>
  );
}

export default MainProject;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 80px 100px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    place-content: center;
  }
`;
