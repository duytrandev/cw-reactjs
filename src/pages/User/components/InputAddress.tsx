import { Box, Grid, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import Select from "react-select";
import { AddressType } from "../../../utils/constant";
import InputForm from "./HOC/InputForm";
import { MainForm } from "./Modal";
interface Props {
  control: Control<MainForm>;
  addressType: AddressType;
}

const InputAddress = ({ control, addressType }: Props) => {
  return (
    <>
      <Grid item xs={12}>
        <Controller
          control={control}
          name={`contactDetail.${addressType}.line2`}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              onChange={onChange}
              value={value}
              error={!!error}
              fullWidth
              style={{
                minHeight: "53.7px",
                marginTop: "3px",
              }}
              placeholder="Address 2"
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          control={control}
          name={`contactDetail.${addressType}.city`}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              onChange={onChange}
              value={value}
              error={!!error}
              fullWidth
              style={{
                minHeight: "53.7px",
                marginTop: "3px",
              }}
              placeholder="City"
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Box>
          <InputForm>
            <Controller
              control={control}
              name={`contactDetail.${addressType}.stateProvince`}
              render={({ field: { onChange, ref } }) => (
                <Select
                  onChange={(event) => {
                    onChange(event?.value);
                  }}
                  ref={ref}
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
              )}
            />
          </InputForm>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Controller
          control={control}
          name={`contactDetail.${addressType}.postalCode`}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              onChange={onChange}
              value={value}
              error={!!error}
              fullWidth
              style={{
                minHeight: "53.7px",
                marginTop: "3px",
              }}
              placeholder="Postal Code"
            />
          )}
        />
      </Grid>
    </>
  );
};

export default InputAddress;
