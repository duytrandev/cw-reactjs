import { DialogContent, Grid, TextField } from "@mui/material";
import Select from "react-select";
import InputForm from "./HOC/InputForm";
import { Control, Controller } from "react-hook-form";
import { MainForm } from "./Modal";

export interface ProfessionalDetailFormFields {
  proDegree: string;
  specialty: string;
  yearOfExp: number;
  allowedState: string[];
}

interface Props {
  control: Control<MainForm>;
}

const ProfessionalDetail = ({ control }: Props) => {
  return (
    <DialogContent sx={{
      overflowX: 'visible'
    }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <InputForm required>
            <span>Professional Degree</span>
            <Controller
              control={control}
              name="professionalDetail.proDegree"
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  fullWidth
                  style={{
                    minHeight: "53.7px",
                    marginTop: "3px",
                  }}
                />
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
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  fullWidth
                  style={{
                    minHeight: "53.7px",
                    marginTop: "3px",
                  }}
                />
              )}
            />
          </InputForm>
        </Grid>
        <Grid item xs={4}>
          <InputForm required>
            <span>Year Of Experience</span>
            <Controller
              control={control}
              name="professionalDetail.yearOfExp"
              render={({ field: { onChange, value } }) => (
                <TextField
                  type="number"
                  onChange={onChange}
                  value={value}
                  fullWidth
                  style={{
                    minHeight: "53.7px",
                    marginTop: "3px",
                  }}
                />
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
              render={({ field: { onChange } }) => (
                <Select
                  onChange={(events) => {
                    onChange(events.map((event) => event.label));
                  }}
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
                      overflowX: 'visible'
                    }),
                  }}
                />
              )}
            />
          </InputForm>
        </Grid>
      </Grid>
    </DialogContent>
  );
};

export default ProfessionalDetail;
