import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TextField } from "@mui/material";
import database from "../../firebase"
import { ref, onValue, set, remove, update } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

interface ICompany {
    id: string,
    name: string,
    email: string,
    address: string
}
const colums = [
    {
      id: "1",
      name: "Id",
    },
    {
      id: "name",
      name: "Name",
    },
    {
      id: "email",
      name: "Email",
    },
    {
      id: "address",
      name: "Adress",
    },
    {
    id: "action",
    name: "Action"
    }
  ];

const dbRef = ref(database, 'companies/');
function addCompany(info: ICompany){
    set(ref(database,`companies/${info.id}`), info)
}
const Company = () => {
  
  const [popup, setPopup] = useState(false);
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const updateId = useRef("");
  function handleClickAdd() {
    setPopup(!popup);
    setIsUpdate(false)
  }
  const { control, handleSubmit} = useForm({
    defaultValues: {
      name: "",
      address: "",
      email: "",
    },
  });
  useEffect(()=>{
    onValue(dbRef, (snapshot)=>{
        const data = snapshot.val();
        if(data !== null){
            setCompanies(Object.values(data));
        }
    })
    return ()=>{}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
//   function handleEdit(company: ICompany){
//     console.log(company)
//     update(ref(database,`companies/${company.id}`), company)
//   }
  function handleDelete(companyId: string){
    remove(ref(database,`companies/${companyId}`))
  }
  return (
    <>
      <div style={{ margin: "1%" }}>
        <Button onClick={handleClickAdd} variant="contained">
          Add new
        </Button>
      </div>
      <Paper sx={{ margin: "1%" }}>
        <TableContainer sx={{borderRadius: "5px"}}>
          <Table>
            <TableHead>
              <TableRow sx={{backgroundColor: "#78909C"}}>
                {colums.map((value) => {
                  return <TableCell key={value.id}>{value.name}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
                {companies.map((company, index)=>{
                    return( 
                        <TableRow key={index}>
                            <TableCell>{company.id}</TableCell>
                            <TableCell>{company.name}</TableCell>
                            <TableCell>{company.email}</TableCell>
                            <TableCell>{company.address}</TableCell>
                            <TableCell>
                                <Button variant="outlined" color="primary" onClick={()=>{
                                    setPopup(!popup)
                                    setIsUpdate(true)
                                    updateId.current = company.id;
                                }}>Edit</Button>
                                <Button variant="outlined" color="primary" onClick={()=>{
                                    handleDelete(company.id)
                                }}>Delete</Button>
                            </TableCell>
                        </TableRow>)
                    })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Dialog open={popup} onClose={handleClickAdd} fullWidth>
        <DialogTitle>Create a new company</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit((data) => {
                setPopup(!popup);
                if(isUpdate){
                    update(ref(database,`companies/${updateId.current}`), data)
                    return
                }
                addCompany({...data, id: uuidv4()});
            })}
          >
            <Stack spacing={2} margin={2}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => {
                  return <TextField {...field} variant="outlined" label="name"></TextField>;
                }}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => {
                  return <TextField {...field} variant="outlined" label="email"></TextField>;
                }}
              />
              <Controller
                name="address"
                control={control}
                render={({ field }) => {
                  return <TextField {...field} variant="outlined" label="address"></TextField>;
                }}
              />
              <Button variant="outlined" type="submit" color="primary">
                {isUpdate ? "Update" : "Add"}
              </Button>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Company;
