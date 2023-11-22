import styled from "styled-components";
import {ButtonGroup, Dialog, styled as muiStyled} from "@mui/material";

export const Wrapper = styled.div`
    .pivot {
        &:after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            width: 1px;
            height: 10px;
            color: #888;
        }
    }
    th {
        font-size: 1rem;
        font-weight: bold;
    }
    td {
        font-size: 0.8;
    }
    .primary-btn {
        background-color: var(--main-color)
    }
    .secondary-btn{
        color: var(--main-color);
        border-color: var(--main-color);
        font-weight: 500;
    }
    label{
        color: rgba(6, 24, 78);
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-left{
        display: flex;
        align-items: center;
    }
    .MuiInputBase-root{
        background-color: #fff;
    }
    height: 100px;
`

export const Logo = styled.img`
    width: 250px;
    height: 100px;
`

export const InfoUser = styled.div`
    display: flex;
`

export const Avatar = styled.img`
    border-radius: 50%;
    height: 40px;
    width: 40px;
`

export const UserRef = styled.div`
    display: flex;
    height: 100%;
`

export const Container = styled.div`
    background-color: #fff;
    width: 90%;
    min-width: 610px;
    margin: 0 auto;
    border-radius: 20px;
    padding: 0 20px;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const UserFunction = styled.div`
    display: flex;
    align-items: center;
    & .mgl{
        margin-left: 10px;
        white-space: nowrap
    }
    & .btn-search{
        padding: 12px;
        font-size: 45px;
    }
`

export const SearchOptions = styled.div`
    display: block;
`

export const DialogStyled = muiStyled(Dialog)(()=>`
    & .MuiDialog-container{
        overflow-y: initial;
        max-width: 815px;
        width: 100%;
        margin: 0 auto;
    }
    & .MuiPaper-root{
            padding: 24px;
            margin: 0;
            width: 100%;
            max-width: none;
        }
`)

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        padding-left: 0;
        font-weight: 700;
        color: rgb(6, 24, 78)
    }
    .MuiButtonBase-root, .MuiSvgIcon-root{
        height: 28px;
        min-width: 28px;
        padding: 0
    }
    
`

export const ModalButtonForm = muiStyled(ButtonGroup)(()=>`
    margin: 0 auto;
    background-color: rgb(242, 243, 243);
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 2px;
    & .MuiButtonBase-root{
        display: flex;
        text-transform: none;
        white-space: nowrap;
        border: none;
        padding: 6px 8px;
        margin: 0;
        box-shadow: none;
        color: rgb(99, 99, 99);
        border-radius: 0px;
        flex: 1 1 0%;
        width: fit-content
    }
`)