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
import { Control, Controller } from "react-hook-form";
import Select from "react-select";
import { AddressType } from "../../../utils/constant";
import { LabelInput } from "../DashBoadStyles";
import InputForm from "./HOC/InputForm";
import InputAddress from "./InputAddress";
import { MainForm } from "./Modal";

export interface ContactDetailFormFields {
  email: string;
  billingAddress: {
    city: string;
    stateProvince: string;
    postalCode: string;
    line1: string;
    line2: string;
  };
  shippingAddress: {
    city: string;
    stateProvince: string;
    line1: string;
    line2: string;
    postalCode: string;
  };
  phoneNumber: string;
  phoneType: string;
  bestTimeToCall: string;
  sameAddress: boolean;
  address: object[],
  phone: object[]
}

interface Props {
  control: Control<MainForm>;
}

const ContactDetail = ({ control }: Props) => {
  const [sameBilling, setSameBilling] = useState(true);
  return (
    <DialogContent>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputForm required>
            <span>Email</span>
            <Controller
              control={control}
              name="contactDetail.email"
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
                  {error && <span className="error-validation">The Email field is required</span>}
                </>
              )}
            />
          </InputForm>
        </Grid>
        <Grid item xs={12}>
          <LabelInput>
            <span>Billing Address</span>
            <Button variant="contained">Check address</Button>
          </LabelInput>
          <Controller
            control={control}
            name="contactDetail.billingAddress.line1"
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
                placeholder="Address 1"
              />
            )}
          />
        </Grid>
        <InputAddress control={control} addressType={AddressType.billingAddress} />
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
              <Controller
                name="contactDetail.sameAddress"
                control={control}
                render={({ field: { onChange } }) => (
                  <Checkbox
                    checked={!sameBilling}
                    onClick={() => {
                      setSameBilling((prev) => {
                        return !prev;
                      });
                    }}
                    onChange={() => {
                      onChange(sameBilling);
                    }}
                  />
                )}
              />
            }
            label="Same as billing address"
          />
        </Grid>
        {!sameBilling === true ? (
          <></>
        ) : (
          <>
            <Grid
              item
              xs={12}
              style={{
                paddingTop: "10px",
              }}
            >
              <Controller
                control={control}
                name="contactDetail.shippingAddress.line1"
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
                    placeholder="Address 1"
                  />
                )}
              />
            </Grid>
            <InputAddress control={control} addressType={AddressType.shippingAddress} />
          </>
        )}
        <Grid item xs={4}>
          <InputForm>
            <span>Phone Number: </span>
            <Controller
              control={control}
              name="contactDetail.phoneNumber"
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
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>Phone Type:</span>
              <Controller
                control={control}
                name="contactDetail.phoneType"
                render={({ field: { onChange, ref } }) => (
                  <Select
                    ref={ref}
                    onChange={(event) => {
                      onChange(event?.value);
                    }}
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
                )}
              />
            </InputForm>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <InputForm>
              <span>Best Time to Call:</span>
              <Controller
                control={control}
                name="contactDetail.bestTimeToCall"
                render={({ field: { onChange, ref } }) => (
                  <Select
                    ref={ref}
                    onChange={(event) => {
                      onChange(event?.value);
                    }}
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
                )}
              />
            </InputForm>
          </Box>
        </Grid>
      </Grid>
    </DialogContent>
  );
};

export default ContactDetail;
