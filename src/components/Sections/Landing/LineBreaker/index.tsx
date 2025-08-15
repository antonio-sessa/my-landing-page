"use client";

import styled from "styled-components";

const Line = styled.section`
  height: 0;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;

  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;

  display: block;
  padding: 0;
  width: 21em;
  height: 0;
  max-height: 0;
  line-height: 1;
  margin: 0.5em auto 0.5em auto;
  border-width: 2px;

  @media (max-width: 700px) {
    width: 16em;
  }
`;

export const LineBreaker = () => {
	return <Line />;
};
