import styled from "styled-components";

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
    .mgl {
        background-color: var(--main-color)
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
        margin-left: 10px
    }
    & .btn-search{
        padding: 12px;
        font-size: 45px;
    }
`

export const SearchOptions = styled.div`
    display: block;
`