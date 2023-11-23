import {
  Box,
  Button,
  Checkbox,
  DialogContent,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Select from "react-select";
import { LabelInput } from "../DashBoadStyles";
import InputAddress from "./InputAddress";
import InputForm from "./HOC/InputForm";

const ContactDetail = () => {
  const [sameBilling, setSameBilling] = useState(false);
  return (
    <DialogContent>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputForm required>
              <span>Email</span>
              <TextField
                fullWidth
                style={{
                  minHeight: "53.7px",
                  marginTop: "3px",
                }}
              ></TextField>
            </InputForm>
          </Grid>
          <Grid item xs={12}>
            <LabelInput>
              <span>Billing Address</span>
              <Button variant="contained">Check address</Button>
            </LabelInput>
            <TextField
              fullWidth
              style={{
                minHeight: "53.7px",
                marginTop: "3px",
              }}
              placeholder="Address 1"
            ></TextField>
          </Grid>
          <InputAddress></InputAddress>
          <Grid item xs={12}>
            <LabelInput>
              <span>Shipping Address</span>
              <Button variant="contained">check ADdress</Button>
            </LabelInput>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              paddingTop: "10px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={sameBilling}
                  onChange={() => {
                    setSameBilling((prev) => !prev);
                  }}
                />
              }
              label="Same as billing address"
            />
          </Grid>
          {!sameBilling && (
            <>
              <Grid
                item
                xs={12}
                style={{
                  paddingTop: "10px",
                }}
              >
                <TextField
                  fullWidth
                  style={{
                    minHeight: "53.7px",
                    marginTop: "3px",
                  }}
                  placeholder="Address 1"
                ></TextField>
              </Grid>
              <InputAddress></InputAddress>
            </>
          )}
          <Grid item xs={4}>
            <InputForm>
              <span>Phone Number: </span>
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
            <Box>
              <InputForm>
                <span>Phone Type:</span>
                <Select
                  className="basic-select"
                  classNamePrefix="select"
                  isSearchable
                  name="colors"
                  isClearable
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
            <Box>
              <InputForm>
                <span>Best Time to Call:</span>
                <Select
                  className="basic-select"
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
        </Grid>
      </form>
    </DialogContent>
  );
};

export default ContactDetail;
