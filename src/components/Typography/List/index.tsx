import styled from "styled-components";

const List = styled.ul`
  padding-left: 1.25rem;
  margin-bottom: 1rem;
  color: #e5e7eb;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    position: relative;
    padding-left: 0.75rem;

    &::before {
      position: absolute;
      left: 0;
      color: #60a5fa;
    }
  }
`;

export default List;
