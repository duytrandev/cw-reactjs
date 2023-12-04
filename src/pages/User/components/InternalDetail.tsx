import { Box, DialogContent, Grid, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import Select from "react-select";
import InputForm from "./HOC/InputForm";
import { MainForm } from "./Modal";
export interface InternalDetailFormFields {
  userType: string;
  userName: string;
  roles: string[];
  facilities: string[];
  subFacilities: string[];
  groups: string[];
  NPI: string;
  externalId: string;
}

interface Props {
  control: Control<MainForm>;
}
const InternalDetail = ({ control }: Props) => {
  return (
    <DialogContent>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box>
            <InputForm required>
              <span>{`User Type:`}</span>
              <Controller
                control={control}
                name="internalDetail.userType"
                render={({ field: { onChange, onBlur, name, ref }}) => (
                  <Select
                    onChange={(event)=>{
                      onChange(event?.value)
                    }}
                    ref={ref}
                    onBlur={onBlur}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isSearchable
                    name={name}
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
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`Username:`}</span>
              <Controller
                control={control}
                name="internalDetail.userName"
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
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm required>
              <span>{`Roles:`}</span>
              <Controller
                name="internalDetail.roles"
                control={control}
                render={({
                  field: { onChange, onBlur, name, ref }
                }) => (
                  <Select
                    onChange={(events)=>{
                      onChange(events.map(event => event.value))}}
                    onBlur={onBlur}
                    name={name}
                    ref={ref}
                    isMulti
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isSearchable
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
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`Facilities:`}</span>
              <Controller
                control={control}
                name="internalDetail.facilities"
                render={({field: {onChange, ref}}) => (
                  <Select
                    onChange={(events)=>{
                      onChange(events.map(event => event.value))}}
                    isMulti
                    ref={ref}
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
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`Sub-Facility:`}</span>

              <Controller
                name="internalDetail.subFacilities"
                control={control}
                render={({field: {onChange, ref}}) => (
                  <Select
                    onChange={(events)=>{
                      onChange(events.map(event => event.value))}}
                    isMulti
                    ref={ref}
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
                        overflowY: "visible",
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
              <span>{`Group:`}</span>
              <Controller
                name="internalDetail.groups"
                control={control}
                render={({ field: {onChange, ref} }) => (
                  <Select
                    onChange={(events)=>{
                      onChange(events.map(event => event.value))}}
                    isMulti
                    ref={ref}
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
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`NPI:`}</span>
              <Controller
                control={control}
                name="internalDetail.NPI"
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
                  />
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`External Id:`}</span>
              <Controller
                control={control}
                name="internalDetail.externalId"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    type="number"
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    fullWidth
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
      </Grid>
    </DialogContent>
  );
};

export default InternalDetail;
