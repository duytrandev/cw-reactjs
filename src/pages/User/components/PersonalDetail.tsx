import { Box, Button, DialogContent, Grid, TextField } from "@mui/material"
import Select from 'react-select'
import InputForm from "./InputForm"

const PersonalDetail = () => {
  return (
    <DialogContent>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Box>
              <InputForm required>
                <span>{`Frist Name:`}</span>
                <TextField fullWidth style={{
                  minHeight: "53.7px",
                  marginTop: "3px",
                }}></TextField>
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
          <Box>
              <InputForm>
                <span>{`Middle Name:`}</span>
                <TextField fullWidth style={{
                  minHeight: "53.7px",
                  marginTop: "3px",
                }}></TextField>
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
          <Box>
              <InputForm required>
                <span>{`Last Name:`}</span>
                <TextField fullWidth style={{
                  minHeight: "53.7px",
                  marginTop: "3px",
                }}></TextField>
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
          <Box>
              <InputForm>
                <span>{`Nickname:`}</span>
                <TextField fullWidth style={{
                  minHeight: "53.7px",
                  marginTop: "3px",
                }}></TextField>
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <InputForm required>
                <span>{`Title:`}</span>
                <Select
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
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <InputForm>
                <span>{`Gender Identity:`}</span>
                <Select
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
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <InputForm>
                <span>{`Pronoun:`}</span>
                <TextField fullWidth style={{
                  minHeight: "53.7px",
                  marginTop: "3px",
                }}></TextField>
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
            <InputForm required>
                <span>{`Preferred Language:`}</span>
                <Select
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
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
            <InputForm>
                <span>{`Other Spoken Languages:`}</span>
                <Select
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
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
            <InputForm>
                <span>{`Profile Image:`}</span>
                <Button fullWidth variant="outlined" style={{
                    marginTop: "3px",
                  }}
                  >
                    <span>
                      UPLOAD
                    </span>
                </Button>
              </InputForm>
            </Box>
          </Grid>
        </Grid>
      </form>
    </DialogContent>
  )
}

export default PersonalDetail
