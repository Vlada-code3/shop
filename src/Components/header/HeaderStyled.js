import styled from 'styled-components';


export const HeaderContainer = styled.header`

height: 60px;
background-color: lightblue;
display: flex;
justify-content: space-between;
align-items:center;
padding: 20px;

.list{
list-style: none;
    display: flex;
    align-items:center;
    margin-right: -30px;

}
.listItem{

    margin-right: 30px;
}

.link{
text-decoration:none;
text-transform: uppercase;
color: slateblue;
font-weight: 700;

}

`