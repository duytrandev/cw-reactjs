import { Button } from '@mui/material';
import logo from '../../../assets/logo.svg'
import InputField from '../../../components/InputField';
import {
  Wrapper,
  LogoStyled,
  LogoWraper,
  FormSectionStyled,
  HeaderStyled,
  BodyStyled,
  MenuStyled,
  RememberStyled,
} from './LoginStyled';
import { useAppDispatch } from '../../../reduxs/store';
import { authActions } from '../authSlice';


const Login = () => {
  const dispatch = useAppDispatch()

  const handleClickLoggin = () => {
    dispatch(authActions.login({
      username: "",
      password: ""
    }))
  }
  return (
    <Wrapper>
      <div>
        <LogoWraper>
          <LogoStyled src={logo} alt="" />
        </LogoWraper>
        <FormSectionStyled>
          <HeaderStyled>
            <h1>Welcome back!</h1>
            <h2>Please login to your account</h2>
          </HeaderStyled>
          <BodyStyled>
            <InputField
              id="filled-basic"
              label="Username"
              variant="filled"
              margin="normal"
            />
            <InputField
              id="fill-basic"
              label="Password"
              variant="filled"
              margin="normal"
              type='password'
            />
            <MenuStyled>
              <RememberStyled>
                <input type="checkbox" />
                <span>Remember Me</span>
              </RememberStyled>
              <a href="#"><span>Forgot Password?</span></a>
            </MenuStyled>
            <Button onClick={handleClickLoggin} fullWidth variant="contained" sx={{ padding: '17px 0 13px 0', fontSize: '1.8rem', marginTop: '35px' }}>Login</Button>
          </BodyStyled>
        </FormSectionStyled>
      </div>
    </Wrapper>
  );
}

export default Login
