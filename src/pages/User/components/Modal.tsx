import { useForm } from "react-hook-form";
import { DialogStyled, ModalButtonForm, ModalHeader } from "../DashBoadStyles";
import { Box, Button, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Select from "react-select";
import InputForm from "./InputForm";
import { useState } from "react";

interface Props {
  popup: boolean;
  required?: boolean;
}

const Modal = ({ popup }: Props) => {
  const [popup1, setPopup] = useState(popup);
  console.log(popup1, popup)
  function handleClosePopup(){
    setPopup(prev => !prev)
  }
  const { handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
    },
  });
  return (
   
    <>
      <DialogStyled
        open={popup}
        fullWidth
      >
        <ModalHeader>
          <DialogTitle>Add User</DialogTitle>
          <Button onClick={handleClosePopup}>
            <CancelIcon />
          </Button>
        </ModalHeader>
        <ModalButtonForm>
          <Button>Internal Details</Button>
          <Button>Personal Details</Button>
          <Button>Contact Details</Button>
          <Button>Application Preferences</Button>
          <Button>Professional Details</Button>
          <Button>Time Slots</Button>
          <Button className="mgl primary-btn" variant="contained">
            Additional Infomation
          </Button>
        </ModalButtonForm>
        <DialogContent>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Box>
                  <InputForm required>
                    <span>{`User Type:`}</span>
                    <Select
                      className="basic-multi-select"
                      classNamePrefix="select"
                      isSearchable
                      name="colors"
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
                  </InputForm>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <InputForm>
                    <span>{`Username:`}</span>
                    <TextField fullWidth style={{minHeight: "53.7px",
                          marginTop: "3px",}}></TextField>
                  </InputForm>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <InputForm required>
                    <span>{`Roles:`}</span>
                    <Select
                      isMulti
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
                  </InputForm>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <InputForm>
                    <span>{`Facilities:`}</span>
                    <Select
                      isMulti
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
                  </InputForm>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <InputForm >
                    <span>{`Sub-Facility:`}</span>
                    <Select
                      isMulti
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
                  </InputForm>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <InputForm>
                    <span>{`Group:`}</span>
                    <Select
                      isMulti
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
                  </InputForm>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <InputForm>
                    <span>{`NPI:`}</span>
                    <TextField fullWidth style={{minHeight: "53.7px",
                          marginTop: "3px",}}></TextField>
                  </InputForm>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <InputForm>
                    <span>{`External Id:`}</span>
                    <TextField fullWidth style={{minHeight: "53.7px",
                          marginTop: "3px",}}></TextField>
                  </InputForm>
                </Box>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </DialogStyled>
    </>
  );
};

export default Modal;
