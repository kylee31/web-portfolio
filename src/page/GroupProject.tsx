import GroupItem from "../component/GroupItem";
import { Box } from "../styled/Pages";
import data from "../db/data.json";
import styled from "styled-components";

function GroupProject() {
  return (
    <Box>
      <Items>
        {data.subprojects.map((item, index) => {
          return <GroupItem key={index} item={item} />;
        })}
      </Items>
    </Box>
  );
}

export default GroupProject;

const Items = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
`;
