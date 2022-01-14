import styled from "styled-components";

export const Main = styled.div`
    height:100vh;
    @media only screen and (max-width: 768px) {
        
    }
`
export const Body = styled.div`
    margin-bottom:20px;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start; 
    background-color:#132020;
    h1{
        font-size:100px;
        color:#FAA353;
    }
    h3{
        font-size:60px;
        color:white;
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
    @media only screen and (max-width: 768px) {
        margin-bottom:0;
        h1{
            font-size:80px;
        }
        h3{
            font-size:1.5rem;
            margin-top:10px;
        }
    }
`
export const Projects = styled.div`
    display:flex;
    flex-direction:row;
    h3:nth-child(1){
        color:white;
    }
    h3{
        color:#FAA353;
        margin-left:5px;
        :hover{
            color:#78BFE7;
            cursor:pointer;
        }
    }
`
