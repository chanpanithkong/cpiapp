//import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
// material-ui
import { Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';

// assets
import { EditOutlined, DeleteOutlined, PlusCircleOutlined, EyeTwoTone } from '@ant-design/icons';

// import Phone1 from 'assets/images/widget/PHONE1.jpg';
// import Phone2 from 'assets/images/widget/PHONE2.jpg';
// import Phone3 from 'assets/images/widget/PHONE3.jpg';
// import Phone4 from 'assets/images/widget/PHONE4.jpg';

//API
import { useDispatch, useSelector } from 'store';
import {getBatches} from 'store/reducers/batches';
import AddBatch from 'sections/apps/data-input/AddBatch';
//console.log(getBatches);
// table data
// function createData(customer, cid, photo, product, quantity, date, status, statuscolor) {
//   return { customer, cid, photo, product, quantity, date, status, statuscolor };
// }

// const rows = [
//   createData('John Deo', '#81412314', Phone1, 'Moto G5', '10', '17-2-2017', 'Pending', 'warning'),
//   createData('Jenny William', '#68457898', Phone2, 'iPhone 8', '16', '20-2-2017', 'Paid', 'primary'),
//   createData('Lori Moore', '#45457898', Phone3, 'Redmi 4', '20', '17-2-2017', 'Success', 'success'),
//   createData('Austin Pena', '#62446232', Phone4, 'Jio', '15', '25-4-2017', 'Failed', 'error')
// ];

// =========================|| DATA WIDGET - LATEST ORDER ||========================= //

export default function DataInput() {
    //Get API data
    const [dataBatch, setDataBatch] = useState([]);
    const { batches } = useSelector((state) => state.batch);
    const dispatch = useDispatch([]);

    useEffect(() => {
        dispatch(getBatches());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        setDataBatch(batches);
    }, [batches]);
    //console.log(dataBatch);

    //Dialogbox
    const [customer, setCustomer] = useState(null);
    const [add, setAdd] = useState(false);

    const handleAdd = () => {
        //alert("hello");
        setAdd(!add);
        if (customer && !add) setCustomer(null);
    };
  return (
    <MainCard
      title="Batch"
      content={false}
      secondary={
        <Button variant="contained" color="primary" startIcon={<PlusCircleOutlined />} onClick={handleAdd}>
          Add Batch
        </Button>
      }
    >
      <TableContainer>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 3 }}>Batch Code</TableCell>
              <TableCell align="left">Batch Name</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell align="center">Create Date</TableCell>
              <TableCell align="center">Closed Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center" sx={{ pr: 3 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataBatch.map((dataBatch) => (
              <TableRow hover key={dataBatch.batchid}>
                <TableCell sx={{ pl: 3 }}>{dataBatch.batchid}</TableCell>
                {/* <TableCell>
                  <CardMedia component="img" image={row.photo} title="image" sx={{ width: 20, height: 'auto' }} />
                </TableCell> */}
                <TableCell align="left">{dataBatch.batch}</TableCell>
                <TableCell></TableCell>
                {/* <TableCell align="center">
                  <Chip color={row.statuscolor} label={dataBatch.detail} size="small" />
                </TableCell> */}
                <TableCell align="center">{dataBatch.createdate}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="center" sx={{ pr: 3 }}>
                  <Stack direction="row" justifyContent="center" alignItems="center">
                    <IconButton color="inherit" size="large">
                      <EyeTwoTone />
                    </IconButton>
                    <IconButton color="primary" size="large">
                      <EditOutlined />
                    </IconButton>
                    <IconButton color="inherit" size="large">
                      <DeleteOutlined />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      {/* add customer dialog */}
      <Dialog maxWidth="sm" fullWidth onClose={handleAdd} open={add} sx={{ '& .MuiDialog-paper': { p: 0 } }}>
        {add && <AddBatch customer={customer} onCancel={handleAdd} />}
      </Dialog>
    </MainCard>
  );
}
