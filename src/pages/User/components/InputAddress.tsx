import { Box, Grid, TextField } from "@mui/material";
import Select from "react-select";
import InputForm from "./HOC/InputForm";

const InputAddress = () => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          style={{
            minHeight: "53.7px",
            marginTop: "3px",
          }}
          placeholder="Address 2"
        ></TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          style={{
            minHeight: "53.7px",
            marginTop: "3px",
          }}
          placeholder="City"
        ></TextField>
      </Grid>
      <Grid item xs={4}>
        <Box>
          <InputForm>
            <Select
              placeholder="State"
              className="basic-multi-select"
              classNamePrefix="select"
              isSearchable
              name="colors"
              options={[
                { value: "12ss", label: "Alaska" },
                { value: "123", label: "Alabama" },
                { value: "12d", label: "Arizona" },
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
        <TextField
          style={{
            minHeight: "53.7px",
            marginTop: "3px",
          }}
          placeholder="Postal Code"
          fullWidth
        ></TextField>
      </Grid>
    </>
  );
};

export default InputAddress;
