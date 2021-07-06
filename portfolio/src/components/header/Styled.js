import styled from 'styled-components'

export const HeaderMain = styled.div`
    position:sticky;
    background-color:#132020;
    height:100px;
`
export const Headers = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
    flex-direction:row;
`
export const Name = styled.div`
    margin-left:50px;
    color:white;
    :hover{
        color:#FAA353;
        cursor:pointer;
    }
    :active{
        color:#333;
    }
    
`
export const SideBarIcon = styled.div`
    color:white;
    margin-right:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    :hover{
        background-color:#333;
        border-radius:50%;
        cursor:pointer;
    }
`