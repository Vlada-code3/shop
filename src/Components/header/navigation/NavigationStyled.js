import styled from "styled-components";

export const NavigationContainer = styled.div`
  overflow: hidden;
  background-color: #333;

  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }
  .list {
    display: flex;
    justify-content: space-around;
  }
`;
