import * as yup from "yup";

export const internalDetailtValidation = yup
  .object({
    roles: yup.array().of(yup.string()).length(1).required(),
  })
  .required();

export const personalDetailValidation = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    title: yup.string().required(),
    genderIdentity: yup.string().required(),
    preferredLanguage: yup.string().required(),
  })
  .required();

export const contactDetailValidation = yup
  .object({
    email: yup.string().required(),
  })
  .required();

export const applicationsPrefrenceValidation = yup
  .object({
    displayLanguage: yup.string().required(),
  })
  .required();

export const professionalDetailValidation = yup
  .object({
    proDegree: yup.string().required(),
    specialty: yup.string().required(),
    allowedState: yup.array().of(yup.string()).length(1).required(),
  })
  .required();
