/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Button, DialogTitle, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { notifications } from "../../../utils/constant";
import {
  applicationsPrefrenceValidation,
  contactDetailValidation,
  internalDetailtValidation,
  personalDetailValidation,
  professionalDetailValidation,
} from "../../../utils/validation.users";
import {
  ButtonContainer,
  DialogStyled,
  FormAddUserStyled,
  ModalButtonForm,
  ModalHeader,
} from "../DashBoadStyles";
import AdditionalInformation, { AdditionalInfoFormFields } from "./AdditionalInformation";
import ApplicationPreference, { ApplicationPrefrenceFormFields } from "./ApplicationPreferences";
import ContactDetail, { ContactDetailFormFields } from "./ContactDetail";
import InternalDetail, { InternalDetailFormFields } from "./InternalDetail";
import PersonalDetail, { PersonalDetailtFormFields } from "./PersonalDetail";
import ProfessionalDetail, { ProfessionalDetailFormFields } from "./ProfessionalDetails";
import TimeSlot from "./TimeSlot";

interface Props {
  popup: boolean;
  required?: boolean;
  handleClosePopup?: () => void;
}

export type MainForm = {
  internalDetail: InternalDetailFormFields;
  personalDetail: PersonalDetailtFormFields;
  contactDetail: ContactDetailFormFields;
  applicationsPrefrence: ApplicationPrefrenceFormFields;
  professionalDetail: ProfessionalDetailFormFields;
  additionalinfo: AdditionalInfoFormFields;
};

const Modal = ({ popup, handleClosePopup }: Props) => {
  const [subForm, setSubForm] = useState("Internal Details");
  // const [disabledBtn, setDisableBtn] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<any>({
    defaultValues: {
      internalDetail: {
        userType: "",
        userName: "",
        roles: [],
        facilities: [],
        subFacilities: [],
        groups: [],
        NPI: "",
        externalId: "",
      },
      personalDetail: {
        firstName: "",
        middleName: "",
        lastName: "",
        nickName: "",
        title: "",
        genderIdentity: "",
        pronoun: "",
        preferredLanguage: "",
        otherSpokenLanguage: "",
        profileImage: "",
      },
      contactDetail: {
        email: "",
        billingAddress: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          postalCode: "",
        },
        shippingAddress: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          postalCode: "",
        },
        phoneNumber: "",
        phoneType: "",
        bestTimeToCall: "",
        sameAddress: false,
      },
      applicationsPrefrence: {
        noti: notifications.map((e) => e.label),
        optStatus: "",
        displayLanguage: "",
        timezone: "",
      },
      professionalDetail: {
        allowedState: [],
        proDegree: "",
        specialty: "",
        yearOfExp: 0,
      },
      additionalinfo: {
        bio: "",
      },
    },
    mode: "all",
    resolver: yupResolver(
      yup.object({
        internalDetail: internalDetailtValidation,
        personalDetail: personalDetailValidation,
        contactDetail: contactDetailValidation,
        applicationsPrefrence: applicationsPrefrenceValidation,
        professionalDetail: professionalDetailValidation,
      })
    ),
  });
  console.log(isValid, errors);
  function onSubmit(data: MainForm) {
    if (data.contactDetail.sameAddress) {
      data.contactDetail.shippingAddress = data.contactDetail.billingAddress;
    }
    console.log(data.additionalinfo);
  }

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    // if (Object.keys(errors).length < 1) {
    //   setDisableBtn((prev) => !prev);
    // }
    console.log(_event, newValue);
    setSubForm(newValue);
  };

  function handleClickBackPrevForm() {}

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
          <Tabs
            TabIndicatorProps={{
              sx: {
                display: "none",
              },
            }}
            value={subForm}
            onChange={handleChange}
            centered
            className="header-form-add"
          >
            <Tab value="Internal Details" label="Internal Details" />
            <Tab value="Personal Details" label="Personal Details" />
            <Tab value="Contact Details" label="Contact Details" />
            <Tab value="Application Preferences" label="Application Preferences" />
            <Tab value="Professional Details" label="Professional Details" />
            <Tab value="Time Slots" label="Time Slots" />
            <Tab
              sx={{ width: "100%", minWidth: "100% !important" }}
              value="Additional Infomation"
              label="Additional Infomation"
            />
          </Tabs>
        </Box>
      </ModalButtonForm>
      <FormAddUserStyled action="" onSubmit={handleSubmit(onSubmit)} id="add-user-form">
        {subForm === "Internal Details" && <InternalDetail control={control} errors={errors} />}
        {subForm === "Personal Details" && <PersonalDetail control={control} />}
        {subForm === "Contact Details" && <ContactDetail control={control} />}
        {subForm === "Application Preferences" && <ApplicationPreference control={control} />}
        {subForm === "Professional Details" && <ProfessionalDetail control={control} />}
        {subForm === "Time Slots" && <TimeSlot />}
        {subForm === "Additional Infomation" && <AdditionalInformation control={control} />}
        <ButtonContainer>
          {subForm !== "Internal Details" && (
            <Button variant="outlined" onClick={handleClickBackPrevForm}>
              Back
            </Button>
          )}
          <Button variant="contained" disabled={Object.keys(errors).length > 0} type="submit">
            Next
          </Button>
          <Button variant="contained" disabled={Object.keys(errors).length > 0}>
            Finish
          </Button>
          <Button variant="contained" disabled>
            Add without verify
          </Button>
        </ButtonContainer>
      </FormAddUserStyled>
    </DialogStyled>
  );
};

export default Modal;
