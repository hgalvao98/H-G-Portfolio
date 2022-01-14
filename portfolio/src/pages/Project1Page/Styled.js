import styled from "styled-components";

export const Main = styled.div`
    height:100vh;
    @media only screen and (max-width: 768px) {
        height:unset;
    }
`

export const Body = styled.div`
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
`
export const Projects = styled.div`
    display:flex;
    position:sticky;
    top:0;
    z-index:0;
    margin-top:-10px;
    background-color:transparent;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    h3:nth-child(2){
        color:white;
        font-size:40px;
    }
    h3{
        color:#FAA353;
        margin-left:5px;
        font-size:40px;
    }
    i{
        margin-top:12px;
        color:white;
        :hover{
            color:#FAA353;
            cursor:pointer;
        }
    }
`
export const Card = styled.div`
    margin-top:20px;
    height:60s0px;
    width:700px;
    background-color:#234359;
    border-radius:10%;
    z-index:2;
    display:flex;
    margin-bottom:20px;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    img{
        margin-top:30px;
        margin-bottom:10px;
        height:300px;
    }
    a{
        margin-bottom:16px;
        text-decoration:none;
        color:white;
    }
    @media only screen and (max-width: 768px) {
        width:90%;
        border-radius:0;
        height:700px;
        border-radius:15px;
    }
`
export const Logo = styled.div`
    margin-bottom:10px;
    p{
        text-align:center;
    }
`

export const Info = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    p{
        text-align:center;
    }
    p:nth-child(1){
        text-align:center;
        margin:0 8px;
    }
    p:nth-child(6){
        font-size:10px;
    }
    p:nth-child(7){
        font-size:10px;
    }
    p:nth-child(5){
        font-size:10px;
    }
`