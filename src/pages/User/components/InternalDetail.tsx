import { Box, DialogContent, Grid, TextField } from "@mui/material";
import InputForm from "./InputForm";
import Select from 'react-select'

const InternalDetail = () => {
  return (
    <DialogContent>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Box>
              <InputForm required>
                <span>{`User Type:`}</span>
                <Select
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isSearchable
                  name="colors"
                  defaultValue={{ value: "1", label: "Provider" }}
                  options={[
                    { value: "1", label: "Provider" },
                    { value: "12ss", label: "Caregiver" },
                    { value: "123", label: "CareTeam" },
                    { value: "12d", label: "Patient" },
                    { value: "1x23", label: "Admin " },
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
                <span>{`Username:`}</span>
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
                <span>{`Roles:`}</span>
                <Select
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isSearchable
                  name="colors"
                  options={[
                    { value: "12ss", label: "Caregiver" },
                    { value: "123", label: "Physician Assistant (PA) - Front Office" },
                    { value: "12d", label: "PatPhysician Assistant (PA) - billing accounting" },
                    { value: "1x23", label: "Patient" },
                    { value: "1dx23", label: "Customer Support" },
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
                <span>{`Facilities:`}</span>
                <Select
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isSearchable
                  name="colors"
                  options={[
                    { value: "12ss", label: "Caregiver" },
                    { value: "123", label: "Physician Assistant (PA) - Front Office" },
                    { value: "12d", label: "PatPhysician Assistant (PA) - billing accounting" },
                    { value: "1x23", label: "Patient" },
                    { value: "1dx23", label: "Customer Support" },
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
              <InputForm >
                <span>{`Sub-Facility:`}</span>
                <Select
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isSearchable
                  name="colors"
                  options={[
                    { value: "12ss", label: "Caregiver" },
                    { value: "123", label: "Physician Assistant (PA) - Front Office" },
                    { value: "12d", label: "PatPhysician Assistant (PA) - billing accounting" },
                    { value: "1x23", label: "Patient" },
                    { value: "1dx23", label: "Customer Support" },
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
                <span>{`Group:`}</span>
                <Select
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isSearchable
                  name="colors"
                  options={[
                    { value: "12ss", label: "Caregiver" },
                    { value: "123", label: "Physician Assistant (PA) - Front Office" },
                    { value: "12d", label: "PatPhysician Assistant (PA) - billing accounting" },
                    { value: "1x23", label: "Patient" },
                    { value: "1dx23", label: "Customer Support" },
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
                <span>{`NPI:`}</span>
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
                <span>{`External Id:`}</span>
                <TextField type="number" fullWidth style={{
                  minHeight: "53.7px",
                  marginTop: "3px",
                }}></TextField>
              </InputForm>
            </Box>
          </Grid>
        </Grid>
      </form>
    </DialogContent>
  )
}

export default InternalDetail
