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
    a{
        text-decoration:none;
        color:black; 
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
    i{
        margin-top:12px;
        color:white;
        :hover{
            color:#FAA353;
            cursor:pointer;
        }
    }
    h3:nth-child(2){
        color:white;
        font-size:40px;
    }
    h3{
        color:#FAA353;
        margin-left:5px;
        font-size:40px;
        
    }
`
export const Card = styled.div`
    margin-top:20px;
    height:auto;
    width:700px;
    margin-bottom:20px;
    background-color:#F3F3F3;
    border-radius:10%;
    z-index:2;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding:8px;
    img{
        margin-top:100px;
        margin-bottom:50px;
        height:200px;
        border-radius:50%;
        :hover{
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
            cursor:pointer;
        }
    }
    @media only screen and (max-width: 768px) {
        img{
            width:300px;
            height:150px;
        }
        width:90%;
        border-radius:0;
        height:550px;
        border-radius:15px;
    }
`
export const Logo = styled.div`
    p{
        text-align:center;
    }
`

export const Info = styled.div`
    margin-top:8px;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    p{
        text-align:center;
    }
    p:nth-child(1){
        text-align:center;
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