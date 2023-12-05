import { DialogContent, Grid, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import Select from "react-select";
import InputForm from "./HOC/InputForm";
import { MainForm } from "./Modal";

export interface ProfessionalDetailFormFields {
  professionalDegree: string;
  specialty: string;
  yearsOfExperience: number;
  allowedState: string[];
}

interface Props {
  control: Control<MainForm>;
}

const ProfessionalDetail = ({ control }: Props) => {
  return (
    <DialogContent>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <InputForm required>
            <span>Professional Degree</span>
            <Controller
              control={control}
              name="professionalDetail.professionalDegree"
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
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
                  {error && (
                    <span className="error-validation">
                      The Professional Degree field is required.
                    </span>
                  )}
                </>
              )}
            />
          </InputForm>
        </Grid>
        <Grid item xs={4}>
          <InputForm required>
            <span>Specialty</span>
            <Controller
              control={control}
              name="professionalDetail.specialty"
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
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
                  {error && (
                    <span className="error-validation">The Specialty field is required.</span>
                  )}
                </>
              )}
            />
          </InputForm>
        </Grid>
        <Grid item xs={4}>
          <InputForm required>
            <span>Year Of Experience</span>
            <Controller
              control={control}
              name="professionalDetail.yearsOfExperience"
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
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
                  {error && (
                    <span className="error-validation">
                      The Years of Experience field is required.
                    </span>
                  )}
                </>
              )}
            />
          </InputForm>
        </Grid>
        <Grid item xs={4}>
          <InputForm required>
            <span>Allowed State</span>
            <Controller
              control={control}
              name="professionalDetail.allowedState"
              render={({ field: { onChange }, fieldState: { error } }) => (
                <>
                  <Select
                    onChange={(events) => {
                      onChange(events.map((event) => event.label));
                    }}
                    isMulti
                    classNames={{ control: () => (error ? "error-validation" : "") }}
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
                        overflowX: "visible",
                      }),
                    }}
                  />
                  {error && (
                    <span className="error-validation">
                      The Allowed States must have at least 1 item.
                    </span>
                  )}
                </>
              )}
            />
          </InputForm>
        </Grid>
      </Grid>
    </DialogContent>
  );
};

export default ProfessionalDetail;
