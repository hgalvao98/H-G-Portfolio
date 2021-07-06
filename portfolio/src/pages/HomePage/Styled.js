import styled  from "styled-components";

export const Main = styled.div`
    height:100vh;
`
export const Body = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center; 
    background-color:#132020;
    p{
        margin-right:320px;
        margin-bottom:250px;
        color:#FAA353;
        :hover{
            cursor:pointer;
            color:white;
        }

    }
    h1{
        margin-bottom:250px;
        font-size:150px;
        color:#FAA353;
        :hover{
            cursor:pointer;
            color:white;
        }
    }
`
