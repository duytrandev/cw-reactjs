
import { ButtonContainer, DialogStyled, ModalButtonForm, ModalHeader } from "../DashBoadStyles";
import { Box, Button, DialogTitle, Tab, Tabs } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import { SyntheticEvent, useState } from "react";
import InternalDetail from "./InternalDetail";
import InputField from "../../../components/InputField";

interface Props {
  popup: boolean;
  required?: boolean;
}

const Modal = ({ popup }: Props) => {
  const [popup1, setPopup] = useState(popup);
  console.log(popup1, popup)
  const [value, setValue] = useState('Internal Details');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    console.log(event)
    setValue(newValue);
    console.log(newValue)
  };
  function handleClosePopup() {
    setPopup(prev => !prev)
  }
  return (
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
        {/* <Button>Internal Details</Button>
          <Button>Personal Details</Button>
          <Button>Contact Details</Button>
          <Button>Application Preferences</Button>
          <Button>Professional Details</Button>
          <Button>Time Slots</Button>
          <Button className="mgl primary-btn" variant="contained">
            Additional Infomation
          </Button> */}
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab
              value="Internal Details"
              label="Internal Details"
              sx={{ width: '16.6%' }}
            />
            <Tab
              value="Personal Details"
              label="Personal Details"
              sx={{ width: '16.6%' }}
            />
            <Tab
              value="Contact Details"
              label="Contact Details"
              sx={{ width: '16.6%' }}
            />
            <Tab
              value="Application Preferences"
              label="Application Preferences"
              sx={{ width: '16.6%' }}
            />
            <Tab
              value="Professional Preferences"
              label="Professional Preferences"

              sx={{ width: '16.6%' }}
            />
            <Tab
              value="Time Slots"
              label="Time Slots"
              sx={{ width: '16.6%' }}
            />
            <Tab
              value="Additional Infomation"
              label="Additional Infomation"
            />

          </Tabs>
        </Box>
      </ModalButtonForm>
      {
        value === 'Internal Details' && <InternalDetail></InternalDetail>
      }
      {
        value === 'Additional Infomation' && <InputField></InputField>
      }
      <ButtonContainer>
        {value !== 'Internal Details' && <Button variant="outlined">Back</Button>}
        <Button variant="contained">Next</Button>
        <Button variant="contained" disabled>Finish</Button>
        <Button variant="contained" disabled>Add without verify</Button>
      </ButtonContainer>
    </DialogStyled>
  );
};

export default Modal;
