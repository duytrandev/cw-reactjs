import { Box, DialogContent, Grid } from "@mui/material";
import Select from "react-select";
import InputForm from "./HOC/InputForm";

const notifications = [
  { value: "1", label: "Marketing Outreach Emails" },
  { value: "12ss", label: "Appointment Reminder Emails" },
  { value: "123", label: "Stronger together Network" },
  { value: "12d", label: "Transactional Notification Email" },
  { value: "1x23", label: "SMS " },
  { value: "cxc", label: "Push Notifications" },
  { value: "1xxcxc23", label: "Voice " },
  { value: "fdf", label: "Stronger Together Moderator" },
];
const ApplicationPreference = () => {
  return (
    <DialogContent>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Box>
              <InputForm>
                <span>{`Notifications:`}</span>
                <Select
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
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <InputForm>
                <span>{`Opt-In Status:`}</span>
                <Select
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
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <InputForm required>
                <span>{`Display Language:`}</span>
                <Select
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
              </InputForm>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <InputForm required>
                <span>{`Time zone:`}</span>
                <Select
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
              </InputForm>
            </Box>
          </Grid>
        </Grid>
      </form>
    </DialogContent>
  );
};

export default ApplicationPreference;
