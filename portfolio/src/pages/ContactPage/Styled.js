import styled  from "styled-components";

export const Main = styled.div`
    height:100vh;
`
export const Body = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start; 
    background-color:#132020;
    p{
        color:white;
        font-size:50px;
        margin-left:50px;
    }
    h1{
        font-size:50px;
        color:#FAA353;
        align-self:center;
    }
    button{
        padding:8px;
        border-radius:1rem;
        align-self:center;
        border:none;
        :hover{
            cursor:pointer;
            background-color:#333;
        }
    }
`
export const Info = styled.div`
    display:flex;
    flex-direction:row;
    align-items:start;
    margin-bottom:32px;
    justify-content:center;
    i{
        outline:none;
        color:white;
        display: inline-block;
	    text-decoration: none;
        font-style:none;
        :hover{
            color:#FAA353;
        }
    }
`