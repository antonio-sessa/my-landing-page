"use client";

import styled from "styled-components";

const Mark = styled.mark`
  background-color: rgba(96, 165, 250, 0.2);
  color: #f9fafb;                           
  padding: 0.1em 0.3em;
  border-radius: 0.25rem;
  font-weight: 500;

  /* Optional: remove native mark style in some browsers */
  border: none;
`;

export default Mark;
