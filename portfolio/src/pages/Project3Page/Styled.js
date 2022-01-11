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
    height:550px;
    width:700px;
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
        margin-bottom:100px;
        height:200px;
        :hover{
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
            cursor:pointer;
        }
    }
    a{
        margin-bottom:16px;
        text-decoration:none;
        color:black;
    }
`
export const Logo = styled.div`
    margin-bottom:-50px;
`

export const Info = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
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