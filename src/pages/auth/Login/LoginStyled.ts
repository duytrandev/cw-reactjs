// import { TextField } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const LogoWraper = styled.div`
  margin: 60px 37px 0 37px;
`
export const LogoStyled = styled.img`
  width: 474px;
  height: 126px;
`
export const FormSectionStyled = styled.div`
  
`

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--main-color);
    font-weight: 700;
    font-size: 2.4rem;
  }
  h2 {
    color: rgb(99, 99, 99);
    font-weight: 400;
    font-size: 2.4rem;
  }
`;

export const BodyStyled = styled.div`
  margin-top: 10px; 
  .MuiInputBase-root{
    border-radius: 4px;
    border: 1px solid #999;
    &:focus-within{
      border-top: 1px solid #999;
      border-right: 1px solid #999;
      border-bottom: 1px solid #999;
    }
  }
  .MuiFormHelperText-root{
    font-size: 1.4rem;
  }
`

// export const InputFields = styled(TextField)<{ customColor: string }>`
//   width: 100%;
//   display: block;
//   outline: none;

//   label {
//     font-size: 1.4rem;
//   }
//   input {
//     padding: 15px 27px;
//     font-weight: 400;
//     font-size: 1.8rem;
//     line-height: 24px;
//   }

//   div {
//     background-color: #fff;
//     border-radius: 5px;
//     &::after {
//       border-bottom: 0px solid transparent;
//     }
//   }
//   &:focus-within {
//     border-left: 4px solid;
//     border-color: ${(props) => props.customColor || 'blue'};
//   }
// `;

export const MenuStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  span{
    font-size: 1.8rem;
    color: var(--text-color);
    margin-left: 10px;
  }
  input{
    width: 15px;
    height: 15px;
  }
  
`

export const RememberStyled = styled.div`
  display: flex;
  align-items: center;
`