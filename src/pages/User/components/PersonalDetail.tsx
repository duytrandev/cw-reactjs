import { Box, Button, DialogContent, Grid, TextField } from "@mui/material";
import Select from "react-select";
import InputForm from "./HOC/InputForm";
import { Control, Controller } from "react-hook-form";
import { MainForm } from "./Modal";

export interface PersonalDetailtFormFields {
  firstName: string;
  middleName: string;
  lastName: string;
  nickName: string;
  title: string;
  genderIdentity: string;
  pronoun: string;
  preferredLanguage: string;
  otherSpokenLanguage: string;
  profileImage: string;
}

interface Props {
  control: Control<MainForm>;
}

const PersonalDetail = ({ control }: Props) => {
  return (
    <DialogContent>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box>
            <InputForm required>
              <span>{`Frist Name:`}</span>
              <Controller
                control={control}
                name="personalDetail.firstName"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    style={{
                      minHeight: "53.7px",
                      marginTop: "3px",
                    }}
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`Middle Name:`}</span>
              <Controller
                control={control}
                name="personalDetail.middleName"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    style={{
                      minHeight: "53.7px",
                      marginTop: "3px",
                    }}
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm required>
              <span>{`Last Name:`}</span>
              <Controller
                control={control}
                name="personalDetail.lastName"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    style={{
                      minHeight: "53.7px",
                      marginTop: "3px",
                    }}
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`Nickname:`}</span>
              <Controller
                control={control}
                name="personalDetail.nickName"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    style={{
                      minHeight: "53.7px",
                      marginTop: "3px",
                    }}
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm required>
              <span>{`Title:`}</span>
              <Controller
                control={control}
                name="personalDetail.title"
                render={({ field: { onChange, ref } }) => (
                  <Select
                    ref={ref}
                    onChange={(event) => {
                      onChange(event?.value);
                    }}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isSearchable
                    name="colors"
                    options={[
                      { value: "12ss", label: "Dr." },
                      { value: "123", label: "Coach" },
                    ]}
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        minHeight: "53.7px",
                        marginTop: "3px",
                      }),
                    }}
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`Gender Identity:`}</span>
              <Controller
                control={control}
                name="personalDetail.genderIdentity"
                render={({ field: { onChange, ref } }) => (
                  <Select
                    ref={ref}
                    onChange={(event) => {
                      onChange(event?.value);
                    }}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isSearchable
                    name="colors"
                    options={[
                      { value: "12ss", label: "Male" },
                      { value: "123", label: "Female" },
                      { value: "12d", label: "Other" },
                    ]}
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        minHeight: "53.7px",
                        marginTop: "3px",
                      }),
                    }}
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`Pronoun:`}</span>
              <Controller
                control={control}
                name="personalDetail.pronoun"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    style={{
                      minHeight: "53.7px",
                      marginTop: "3px",
                    }}
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm required>
              <span>{`Preferred Language:`}</span>
              <Controller
                control={control}
                name="personalDetail.preferredLanguage"
                render={({ field: { onChange, ref } }) => (
                  <Select
                    ref={ref}
                    onChange={(event) => {
                      onChange(event?.value);
                    }}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isSearchable
                    name="colors"
                    options={[
                      { value: "12ss", label: "Tiếng Việt" },
                      { value: "123", label: "English" },
                      { value: "12d", label: "abcd" },
                    ]}
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        minHeight: "53.7px",
                        marginTop: "3px",
                      }),
                    }}
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`Other Spoken Languages:`}</span>
              <Controller
                control={control}
                name="personalDetail.otherSpokenLanguage"
                render={({ field: { onChange, ref } }) => (
                  <Select
                    ref={ref}
                    onChange={(event) => {
                      onChange(event?.value);
                    }}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isSearchable
                    name="colors"
                    options={[
                      { value: "12ss", label: "Tiếng Việt" },
                      { value: "123", label: "English" },
                      { value: "12d", label: "abcd" },
                    ]}
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        minHeight: "53.7px",
                        marginTop: "3px",
                      }),
                    }}
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`Profile Image:`}</span>
              <Button
                fullWidth
                variant="outlined"
                style={{
                  marginTop: "3px",
                }}
              >
                <span>UPLOAD</span>
              </Button>
            </InputForm>
          </Box>
        </Grid>
      </Grid>
    </DialogContent>
  );
};

export default PersonalDetail;
