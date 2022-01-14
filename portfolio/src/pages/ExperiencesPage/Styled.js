import styled from "styled-components";

export const Main = styled.div`
    height:100%;
`
export const Body = styled.div`
    height:100%;
    display:flex;
    padding:0 50px;
    flex-direction:column;
    align-items:start;
    justify-content:start; 
    background-color:#132020;
    p{
        color:white;
        text-align:start;
        padding:10px 10px;
        font-size:20px;
    }
    p em{
        color:#78BFE7;
    }
    h2{
        font-size:40px;
        color:#FAA353;
        margin-bottom:16px;
    }
    button{
        padding:8px;
        border-radius:1rem;
        border:none;
        align-self:center;
        :hover{
            cursor:pointer;
            background-color:#333;
        }
    }
    img{
        height:90px;
        width:100px;
    }
    @media only screen and (max-width: 768px) {
        h2{
            align-self:center;
        }
    }
    hr{
        color:white;
        width:100%;
    }
`

export const Exp = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    :first-of-type img{
        background-color:black;
        border-radius:2rem;
    }
    :nth-of-type(2) img{
        background-color:white;
        border-radius:50%;
    }
    :nth-of-type(3) img{
        background-color:white;
        border-radius:50%;
    }
    margin-bottom:20px;
    @media only screen and (max-width: 768px) {
        flex-direction:column;   
    }
`

export const Technologies = styled.div`
    img{
        height:80px;
        width:auto;
        margin:8px 16px;
    }
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:white;
    border-radius:15px;
    margin-bottom:16px;
    @media only screen and (max-width: 768px) {
        flex-wrap:wrap;
        width:100%;
        flex-direction:column;
    }
`



