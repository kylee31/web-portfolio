import styled from "styled-components";

interface TechInfo {
  item: {
    src: string;
    name: string;
  };
}

export default function Tech({ item }: TechInfo) {
  return (
    <TechBox>
      <img alt="" src={item.src} loading="lazy" />
      <div>{item.name}</div>
    </TechBox>
  );
}
const TechBox = styled.div`
  display: inline-block;
  text-align: center;
`;
