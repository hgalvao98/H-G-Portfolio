import styled from "styled-components";

export const Main = styled.div`
    height:100vh;
`
export const Body = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start; 
    background-color:#132020;
    p{
        color:white;
        text-align:center;
        padding:10px 200px;
        font-size:20px;
    }
    p em{
        color:#78BFE7;
    }
    a{
        text-decoration:none;
    }
    h1{
        font-size:100px;
        color:#FAA353;
    }
    button{
        padding:8px;
        border-radius:1rem;
        border:none;
        :hover{
            cursor:pointer;
            background-color:#333;
        }
    }
`
