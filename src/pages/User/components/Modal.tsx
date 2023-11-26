import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Button, DialogTitle, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { ButtonContainer, DialogStyled, ModalButtonForm, ModalHeader } from "../DashBoadStyles";
import AdditionalInformation from "./AdditionalInformation";
import ApplicationPreference from "./ApplicationPreferences";
import ContactDetail from "./ContactDetail";
import InternalDetail from "./InternalDetail";
import PersonalDetail from "./PersonalDetail";
import ProfessionalDetail from "./ProfessionalDetails";
import TimeSlot from "./TimeSlot";

interface Props {
  popup: boolean;
  required?: boolean;
}

const Modal = ({ popup }: Props) => {
  const [popup1, setPopup] = useState(popup);
  console.log(popup1, popup);
  const [value, setValue] = useState("Time Slots");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    console.log(event);
    setValue(newValue);
    console.log(newValue);
  };
  function handleClosePopup() {
    setPopup((prev) => !prev);
  }
  return (
    <DialogStyled open={popup} fullWidth>
      <ModalHeader>
        <DialogTitle>Add User</DialogTitle>
        <Button onClick={handleClosePopup}>
          <CancelIcon />
        </Button>
      </ModalHeader>
      <ModalButtonForm>
        <Box>
          <Tabs value={value} onChange={handleChange} centered className="acb">
            <Tab value="Internal Details" label="Internal Details" />
            <Tab value="Personal Details" label="Personal Details" />
            <Tab value="Contact Details" label="Contact Details" />
            <Tab
              value="Application Preferences"
              label="Application Preferences"
            />
            <Tab
              value="Professional Details"
              label="Professional Details"
            />
            <Tab value="Time Slots" label="Time Slots" />
            <Tab sx={{ width: '100%', minWidth: "100% !important" }} value="Additional Infomation" label="Additional Infomation" />
          </Tabs>
        </Box>
      </ModalButtonForm>
      {value === "Internal Details" && <InternalDetail></InternalDetail>}
      {value === "Personal Details" && <PersonalDetail></PersonalDetail>}
      {value === "Contact Details" && <ContactDetail></ContactDetail>}
      {value === "Application Preferences" && <ApplicationPreference></ApplicationPreference>}
      {value === "Professional Details" && <ProfessionalDetail></ProfessionalDetail>}
      {value === "Time Slots" && <TimeSlot></TimeSlot>}
      {value === "Additional Infomation" && <AdditionalInformation></AdditionalInformation>}

      <ButtonContainer>
        {value !== "Internal Details" && <Button variant="outlined">Back</Button>}
        <Button variant="contained">Next</Button>
        <Button variant="contained" disabled>
          Finish
        </Button>
        <Button variant="contained" disabled>
          Add without verify
        </Button>
      </ButtonContainer>
    </DialogStyled>
  );
};

export default Modal;
