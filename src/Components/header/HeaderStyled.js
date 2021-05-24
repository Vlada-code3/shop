import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #f1f1f1;
  text-align: center;
  padding: 20px;

  .list {
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: -30px;
  }
  .listItem {
    margin-right: 30px;
  }

  .link {
    text-decoration: none;
    text-transform: uppercase;
    color: slateblue;
    font-weight: 700;
  }
  a {
    float: left;
    display: block;
    color: #5637e0;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }
`;
