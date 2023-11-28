/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@mui/material";
import logo from "../../../assets/logo.svg";
import InputField from "../../../components/InputField";
import {
  Wrapper,
  LogoStyled,
  LogoWraper,
  FormSectionStyled,
  HeaderStyled,
  BodyStyled,
  MenuStyled,
  RememberStyled,
} from "./LoginStyled";
import { useAppDispatch } from "../../../reduxs/hooks";
import {
  LogginPayload,
  authActions,
  selectCurrentUser,
  selectErrorsObject,
} from "../authSlice";
import { useAppSelector } from "../../../reduxs/hooks";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm<LogginPayload>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const errors = useAppSelector(selectErrorsObject);
  const handleClickLoggin = (data: LogginPayload) => {
    const { username, password } = data;
    dispatch(
      authActions.login({
        username,
        password,
      })
    );
  };

  useEffect(() => {
    if (user) {
      navigate('/users')
    }
  }, [user, navigate]);

  useEffect(() => {
    if (errors) {
      alert(JSON.stringify(errors));
    }
  }, [errors, navigate]);

  return (
    <Wrapper>
      <form id="login-form" onSubmit={handleSubmit(handleClickLoggin)}>
        <LogoWraper>
          <LogoStyled src={logo} alt="" />
        </LogoWraper>
        <FormSectionStyled>
          <HeaderStyled>
            <h1>Welcome back!</h1>
            <h2>Please login to your account</h2>
          </HeaderStyled>
          <BodyStyled>
            <Controller
              name="username"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputField
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  id="filled-basic"
                  label="Username"
                  variant="filled"
                  margin="normal"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <InputField
                  onChange={onChange}
                  value={value}
                  error={!!error}
                  id="fill-basic"
                  label="Password"
                  variant="filled"
                  margin="normal"
                  type="password"
                />
              )}
            />
            <MenuStyled>
              <RememberStyled>
                <input type="checkbox" />
                <span>Remember Me</span>
              </RememberStyled>
              <a href="#">
                <span>Forgot Password?</span>
              </a>
            </MenuStyled>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ padding: "17px 0 13px 0", fontSize: "1.8rem", marginTop: "35px" }}
            >
              Login
            </Button>
          </BodyStyled>
        </FormSectionStyled>
      </form>
    </Wrapper>
  );
};

export default Login;
