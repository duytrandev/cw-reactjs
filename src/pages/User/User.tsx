import {
  Avatar,
  Container,
  Header,
  HeaderContainer,
  InfoUser,
  Logo,
  SearchOptions,
  UserFunction,
  UserRef,
  Wrapper,
} from "./DashBoadStyles";
import logo from "../../assets/logo.svg";
import {
  Badge as BaseBadge,
  badgeClasses,
  Box,
  Button,
  MenuItem,
  TextField,
  styled,
  Grid,
  TableHead,
  TableBody,
  SvgIcon,
  TableRow,
  TableCell,
  Table,
  FormControl,
  Select,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

const Badge = styled(BaseBadge)(
  () => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;
  
  & .${badgeClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: #F44335;
    transform: translate(60%, -70%);
    transform-origin: 100% 0;
  }
  `
);

const User = () => {
  const facilities = [
    { id: "abcd", name: "aaaaa" },
    { id: "abce", name: "sssss" },
    { id: "abcf", name: "ddddd" },
    { id: "abcdd", name: "ccccc" },
  ];
  const users = [
    {
      id: "abc",
      username: "asd",
      name: "asd",
      DOB: "XCXC",
      email: "dsa@@aqweqweqweqwewqe",
      phone: 123123,
      location: "asdasd",
      role: "asdsad",
      lastUpdated: "assadsd",
    },
    {
      id: "dddd",
      username: "2323",
      name: "5454",
      DOB: "fdfdf",
      email: "4r44@@",
      phone: 334444,
      location: "44444",
      role: "dsfsdfv22",
      lastUpdated: "22222222",
    },
  ];
  const columns = [
    "Username",
    "Name",
    "DOB",
    "Email",
    "Phone",
    "Location",
    "Role",
    "Last Updated",
    "STN Status",
    "STN Level",
    "User Status",
  ];
  const [isSearched, setIsSearched] = useState(true);
  return (
    <>
      <Wrapper>
        <Header>
          <div className="header-left">
            <Logo src={logo}></Logo>
            <Box width={"248px"}>
              <TextField id="standard-select-currency" select label="All facilities" fullWidth>
                {facilities.map((facility) => {
                  return (
                    <MenuItem value={facility.id} key={facility.id}>
                      {facility.name}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Box>
          </div>
          <UserRef>
            <Box>
              <InfoUser>
                <Avatar src="https://cwconnect-staging-avatar.s3.amazonaws.com/b87ae72d-f77a-438a-a0ef-df577bfb7e4d.png" />
                <div>
                  <h5>Admin Manager</h5>
                  <p>System Administrator</p>
                </div>
              </InfoUser>
            </Box>
            <Button sx={{ width: "100%", height: "100%" }}>
              <Badge badgeContent={"99+"}>
                <FontAwesomeIcon icon={faBell as IconProp} size="2x" color="#555555" />
              </Badge>
            </Button>
          </UserRef>
        </Header>
        <Container>
          <Grid>
            <Box>
              <HeaderContainer>
                <Box>
                  <h1>User</h1>
                </Box>
                <UserFunction>
                  <Button
                    className="btn-search"
                    onClick={() => {
                      setIsSearched((prev) => !prev);
                    }}
                  >
                    {isSearched === false ? (
                      <SvgIcon>
                        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </svg>
                      </SvgIcon>
                    ) : (
                      <Button variant="outlined">Close Search</Button>
                    )}
                  </Button>
                  <Box>
                    <Button className="mgl" variant="contained">
                      Add patient
                    </Button>
                  </Box>
                  <Box>
                    <Button className="mgl" variant="contained">
                      Add user
                    </Button>
                  </Box>
                  <Box>
                    <Button className="mgl" variant="contained">
                      Invite user
                    </Button>
                  </Box>
                </UserFunction>
              </HeaderContainer>
            </Box>
            <Grid>
              {isSearched && (
                <SearchOptions>
                  <Grid container spacing={3}>
                    {columns
                      .filter((col) => ["Username", "Name", "Email", "Phone"].includes(col))
                      .map((col, indx) => (
                        <Grid key={indx} item xs={4}>
                          <label htmlFor="">{`${col}:`}</label>
                          <br></br>
                          <TextField fullWidth></TextField>
                        </Grid>
                      ))}
                    <Grid item xs={4}>
                      <label htmlFor="">{`Role:`}</label>
                      <br></br>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                          value=""
                          // onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          renderValue={value => value?.length ? Array.isArray(value) ? value.join(', ') : value : 'Select...'}
                          sx={{color: 'grey'}}
                          fullWidth
                        >
                          <MenuItem value={10}>role1</MenuItem>
                          <MenuItem value={20}>role2</MenuItem>
                          <MenuItem value={30}>role3</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <label htmlFor="">{`Role:`}</label>
                      <br></br>
                      <TextField fullWidth children label="Select..."></TextField>
                    </Grid>
                  </Grid>
                </SearchOptions>
              )}
              <Box>
                <div className="content-container">
                  <Table>
                    <TableHead>
                      <TableRow>
                        {columns.map((col, index) => (
                          <TableCell key={index}>{col}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => {
                        return (
                          <TableRow key={user.id}>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.DOB}</TableCell>
                            <TableCell
                              sx={{
                                maxWidth: 250,
                                whiteSpace: "unset",
                                wordBreak: "break-all",
                              }}
                            >
                              {user.email}
                            </TableCell>
                            <TableCell sx={{ color: "var(--main-color)" }}>{user.phone}</TableCell>
                            <TableCell>{user.location}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.lastUpdated}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
                <div className="pagination"></div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};

export default User;
