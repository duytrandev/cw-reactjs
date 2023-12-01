/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import Select from "react-select";
import { userAPI } from "../../app/apis/users.api";
import logo from "../../assets/logo.svg";
import { IFacility, IUser, ListReponse } from "../../models";
import { useAppDispatch, useAppSelector } from "../../reduxs/hooks";
import {
  Avatar,
  Badge,
  Container,
  Header,
  HeaderContainer,
  InfoUser,
  Logo,
  PaginationStyle,
  SearchOptions,
  UserFunction,
  UserRef,
  Wrapper,
} from "./DashBoadStyles";
import Modal from "./components/Modal";
import Paginations from "./components/Pagination";
import { searchOptionSelector } from "./userSlice";

const User = () => {
  // users api
  // console.log("rerender");
  const selectSearchOptions = useAppSelector(searchOptionSelector);
  // console.log(123, selectSearchOptions);
  // const [searchOptions, setSearchOptions] = useState(selectSearchOptions);
  const [users, setUsers] = useState<ListReponse<IUser>>({
    pagination: { limit: 0, page: 0, total: 0 },
    list: [],
  });
  useEffect(() => {
    (async () => {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
          userAPI.getAll(selectSearchOptions).then((rs) => {
            setUsers(rs);
          });
        }, 1000);
      });
    })();
  }, [selectSearchOptions]);

  // facilities api
  const [facilities, setFacilities] = useState<IFacility[]>([]);
  useEffect(() => {
    userAPI
      .getFacilities({
        search: {
          status: true,
        },
        // all: true
      })
      .then((rs) => {
        setFacilities(rs);
      });
  }, []);

  const dispatch = useAppDispatch();
  const [input, setInput] = useState({
    Username: "",
    Name: "",
    Email: "",
    Phone: "",
  });
  function handleInputSearchChange(col: string, value: string) {
    const repOptions = { ...input };
    repOptions[col as keyof typeof repOptions] = value;
    setInput(repOptions);
    const payload = Object.keys(repOptions).reduce((acc, cur) => {
      acc[cur.toLocaleLowerCase()] = repOptions[cur as keyof typeof repOptions];
      return acc;
    }, {} as { [key: string]: any });
    dispatch({ type: "DEBOUNCE_INPUTSEARCH", payload: { search: payload } });
  }
  function handleSelectSearchChange(key: string, value: string | string[]) {
    const payload = {
      [key]: value,
    };
    dispatch({ type: "DEBOUNCE_INPUTSEARCH", payload: { search: payload } });
  }
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
  const [isSearched, setIsSearched] = useState(false);
  const [popup, setPopup] = useState(false);
  function handleClosePopup() {
    setPopup(false);
  }

  return (
    <>
      <Wrapper>
        <Header>
          <div className="header-left">
            <Logo src={logo}></Logo>
            <Box width={"248px"} height="46px">
              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                onChange={(event) => {
                  if (event) {
                    handleSelectSearchChange("facilities", [event.value]);
                  }
                }}
                name="facilities"
                options={facilities.map((facility) => {
                  return {
                    value: facility._id,
                    label: facility.name,
                  };
                })}
                placeholder="All facilities"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    width: "250px",
                    height: "48px",
                  }),
                }}
              />
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
                  <div className="btn-search mgl">
                    {isSearched === false ? (
                      <SvgIcon
                        onClick={() => {
                          setIsSearched((prev) => !prev);
                        }}
                      >
                        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </svg>
                      </SvgIcon>
                    ) : (
                      <Button
                        onClick={() => {
                          setIsSearched((prev) => !prev);
                        }}
                        className="secondary-btn"
                        variant="outlined"
                      >
                        Close Search
                      </Button>
                    )}
                  </div>
                  <Box>
                    <Button className="mgl primary-btn" variant="contained">
                      Add patient
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      className="mgl primary-btn"
                      variant="contained"
                      onClick={() => {
                        setPopup(true);
                      }}
                    >
                      Add user
                    </Button>
                  </Box>
                  <Box>
                    <Button className="mgl primary-btn" variant="contained">
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
                    {Object.keys(input).map((col, indx) => (
                      <Grid key={indx} item xs={4}>
                        <Box>
                          <label htmlFor="">{`${col}:`}</label>
                          <br></br>
                          <TextField
                            value={input[col as keyof typeof input]}
                            onChange={(event) => {
                              handleInputSearchChange(col, event.target.value);
                            }}
                            fullWidth
                          ></TextField>
                        </Box>
                      </Grid>
                    ))}
                    <Grid item xs={4}>
                      <Box>
                        <label htmlFor="">{`Role:`}</label>
                        <br></br>
                        <Select
                          isMulti
                          onChange={(events) => {
                            handleSelectSearchChange(
                              "roles",
                              events.map((event) => {
                                return event.label;
                              })
                            );
                          }}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          isSearchable
                          name="colors"
                          options={[
                            { value: "1", label: "role0" },
                            { value: "12", label: "role2" },
                            { value: "123", label: "role323" },
                          ]}
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              minHeight: "53.7px",
                            }),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <label htmlFor="">{`Status:`}</label>
                        <br></br>
                        <Select
                          isMulti
                          onChange={(events) => {
                            handleSelectSearchChange(
                              "status",
                              events.map((event) => {
                                return event.label;
                              })
                            );
                          }}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          isSearchable
                          name="colors"
                          options={[
                            { value: "1", label: "role0" },
                            { value: "12", label: "role2" },
                            { value: "123", label: "role323" },
                            { value: "1w", label: "role0" },
                            { value: "1w2", label: "role2" },
                            { value: "12d3", label: "role323" },
                          ]}
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              minHeight: "53.7px",
                            }),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <label htmlFor="">{`Level:`}</label>
                        <br></br>
                        <Select
                          isClearable
                          onChange={(event) => {
                            if (event) {
                              handleSelectSearchChange("level", event.label);
                            }
                          }}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          isSearchable
                          name="colors"
                          options={[
                            { value: "1", label: "role0" },
                            { value: "12", label: "role2" },
                            { value: "123", label: "role323" },
                            { value: "1w", label: "role0" },
                            { value: "1w2", label: "role2" },
                            { value: "12d3", label: "role323" },
                          ]}
                          styles={{
                            control: (baseStyles) => ({
                              ...baseStyles,
                              minHeight: "53.7px",
                            }),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectSearchOptions.search.isModerator}
                            onChange={() => {
                              dispatch({
                                type: "DEBOUNCE_INPUTSEARCH",
                                payload: {
                                  search: {
                                    isModerator: !selectSearchOptions.search.isModerator,
                                  },
                                },
                              });
                            }}
                          />
                        }
                        label="Is Moderator"
                      />
                    </Grid>
                  </Grid>
                </SearchOptions>
              )}
              <Box>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns.map((col, index) => (
                        <TableCell key={index}>{col}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.list.map((user) => {
                      return (
                        <TableRow key={user._id}>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.lastName}</TableCell>
                          <TableCell>
                            {new Date(user.dob).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </TableCell>
                          <TableCell
                            sx={{
                              maxWidth: 250,
                              whiteSpace: "unset",
                              wordBreak: "break-all",
                            }}
                          >
                            {user.email}
                          </TableCell>
                          <TableCell sx={{ color: "var(--main-color)" }}>
                            {(user.phone && user.phone[0]?.phoneNumber) || "false"}
                          </TableCell>
                          <TableCell>
                            {(user.address && user.address[0]?.city) || "false"}
                          </TableCell>
                          <TableCell>{user.roles[0]}</TableCell>
                          <TableCell>
                            {`${new Date(user.updatedAt).getMonth()}/${new Date(
                              user.updatedAt
                            ).getDate()}/${new Date(user.updatedAt).getFullYear()}`}
                          </TableCell>
                          <TableCell>{(user.stn?.status && "true") || "false"}</TableCell>
                          <TableCell>{user.stn?.levelId}</TableCell>
                          <TableCell>{user.status}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                <PaginationStyle>
                  <Paginations></Paginations>
                </PaginationStyle>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Modal popup={popup} handleClosePopup={handleClosePopup}></Modal>
      </Wrapper>
    </>
  );
};

export default User;
