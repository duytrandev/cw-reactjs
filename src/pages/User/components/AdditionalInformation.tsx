import { Box, DialogContent } from "@mui/material";
import InputForm from "./HOC/InputForm";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

const AdditionalInformation = () => {
  return (
    <DialogContent>
      <form>
        <Box>
          <InputForm>
            <span>Bio: </span>
            <TextareaAutosize style={{ width: "100%", padding: '10px' }} minRows={7}></TextareaAutosize>
          </InputForm>
        </Box>
      </form>
    </DialogContent>
  );
};

export default AdditionalInformation;
