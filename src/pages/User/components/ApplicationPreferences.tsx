import { Box, DialogContent, Grid } from "@mui/material";
import Select from "react-select";
import InputForm from "./HOC/InputForm";
import { MainForm } from "./Modal";
import { Control, Controller } from "react-hook-form";
import { notifications } from "../../../utils/constant";

export interface ApplicationPrefrenceFormFields {
  noti: string[];
  optStatus: string;
  displayLanguage: string;
  timezone: string;
}

interface Props {
  control: Control<MainForm>;
}

const ApplicationPreference = ({ control }: Props) => {
  return (
    <DialogContent>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>{`Notifications:`}</span>
              <Controller
                control={control}
                name="applicationsPrefrence.noti"
                render={({ field: { onChange } }) => (
                  <Select
                    onChange={(events) => {
                      onChange(events.map((event) => event.label));
                    }}
                    isMulti
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isSearchable
                    name="colors"
                    defaultValue={notifications}
                    options={notifications}
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
              <span>{`Opt-In Status:`}</span>
              <Controller
                control={control}
                name="applicationsPrefrence.optStatus"
                render={({ field: { onChange } }) => (
                  <Select
                    onChange={(event) => {
                      onChange(event?.label);
                    }}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isSearchable
                    name="colors"
                    options={[
                      { value: "12ss", label: "OPT_IN" },
                      { value: "123", label: "OPT_OUT" },
                      { value: "12d", label: "INVALID_INFORMATION" },
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
            <InputForm required>
              <span>{`Display Language:`}</span>
              <Controller
                control={control}
                name="applicationsPrefrence.displayLanguage"
                render={({ field: { onChange } }) => (
                  <Select
                    onChange={(event) => {
                      onChange(event?.label);
                    }}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isSearchable
                    name="colors"
                    options={[
                      { value: "12ss", label: "Tiếng Việt" },
                      { value: "123", label: "English" },
                      { value: "12d", label: "Spanish" },
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
            <InputForm required>
              <span>{`Time zone:`}</span>
              <Controller
                control={control}
                name="applicationsPrefrence.timezone"
                render={({ field: { onChange } }) => (
                  <Select
                    onChange={(event) => {
                      onChange(event?.label);
                    }}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isSearchable
                    name="colors"
                    options={[
                      { value: "12ss", label: "America/Los_Angeles (PST/PDT)" },
                      { value: "123", label: "America/Phoenix (MST)" },
                      { value: "12d", label: "Pacific/Honolulu (HAST)" },
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
      </Grid>
    </DialogContent>
  );
};

export default ApplicationPreference;
