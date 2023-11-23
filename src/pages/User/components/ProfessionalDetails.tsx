import { DialogContent, Grid, TextField } from "@mui/material";
import Select from "react-select";
import InputForm from "./HOC/InputForm";

const ProfessionalDetail = () => {
  return (
    <DialogContent>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <InputForm required>
              <span>Professional Degree</span>
              <TextField
                fullWidth
                style={{
                  minHeight: "53.7px",
                  marginTop: "3px",
                }}
              ></TextField>
            </InputForm>
          </Grid>
          <Grid item xs={4}>
            <InputForm required>
              <span>Specialty</span>
              <TextField
                fullWidth
                style={{
                  minHeight: "53.7px",
                  marginTop: "3px",
                }}
              ></TextField>
            </InputForm>
          </Grid>
          <Grid item xs={4}>
            <InputForm required>
              <span>Year Of Experience</span>
              <TextField
                fullWidth
                style={{
                  minHeight: "53.7px",
                  marginTop: "3px",
                }}
              ></TextField>
            </InputForm>
          </Grid>
          <Grid item xs={4}>
            <InputForm required>
              <span>Allowed State</span>
              <Select
                isMulti
                className="basic-select"
                classNamePrefix="select"
                isSearchable
                name="colors"
                options={[
                  { value: "12ss", label: "Alaska" },
                  { value: "123", label: "Alabama" },
                  { value: "12ss", label: "Texas" },
                  { value: "123", label: "Washington" },
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
          </Grid>
        </Grid>
      </form>
    </DialogContent>
  );
};

export default ProfessionalDetail;
