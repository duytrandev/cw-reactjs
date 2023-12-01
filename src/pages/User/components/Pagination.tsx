/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Pagination, PaginationItem } from "@mui/material";
import { useAppDispatch } from "../../../reduxs/hooks";

const Paginations = () => {
  const dispatch = useAppDispatch()

  function handleChangePage(_event: any, page: number){
    dispatch({type: 'DEBOUNCE_INPUTSEARCH', payload: {
      page
    }})
  }

  return (
    <div>
      <Pagination
        onChange={(event, number)=>{
          handleChangePage(event, number)
        }}
        size="large"
        count={10}
        renderItem={(item) => (
          <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
        )}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default Paginations;
