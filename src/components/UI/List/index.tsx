import styled from "styled-components";

const List = styled.ul`
  font-size: 1rem;
  padding-left: 1.25rem;
  margin-bottom: 1rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    position: relative;
    padding-left: 0.75rem;

    &::before {
      position: absolute;
      left: 0;
    }
  }
`;

export default List;
