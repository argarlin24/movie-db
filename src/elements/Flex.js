import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
  width: 100%;
  flex-wrap: ${props => props.flexWrap || "nowrap"};
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "flex-start"};
`;