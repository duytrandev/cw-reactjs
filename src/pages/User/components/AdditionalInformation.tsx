import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Box, DialogContent } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import InputForm from "./HOC/InputForm";
import { MainForm } from "./Modal";

export interface AdditionalInfoFormFields {
  bio: string;
}

interface Props {
  control: Control<MainForm>;
}

const AdditionalInformation = ({ control }: Props) => {
  return (
    <DialogContent>
      <Box>
        <InputForm>
          <span>Bio: </span>
          <Controller
            control={control}
            name="additionalinfo.bio"
            render={({ field: { onChange, value } }) => (
              <TextareaAutosize
                onChange={onChange}
                value={value}
                style={{ width: "100%", padding: "10px" }}
                minRows={7}
              />
            )}
          />
        </InputForm>
      </Box>
    </DialogContent>
  );
};

export default AdditionalInformation;
