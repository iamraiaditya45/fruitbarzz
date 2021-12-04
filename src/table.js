import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
const drawerWidth = 70;

const styles=makeStyles((theme)=>({
    
    xlight:{
        color:"red",
        fontSize:"15px",
        marginTop:"-19px"
    },
    selected:{
        color:"grey",
        marginLeft:15,
    },
    delete:{
        display:"flex"
    },
    check:{
      color:"#325F80",
    },
    bolder:{
      color:"black",
      fontWeight:"bold",
      marginTop:"-15px",
      overflow:"auto",
      backgroundColor:"#F7F7FB"
  },
  bolderR:{
    color:"red",
    fontWeight:"bold",
    marginTop:"-15px",
    overflow:"auto",
    backgroundColor:"#F7F7FB"
},
    tableContainer:{
      overflow:"auto",
      marginTop:"-17px"
    },
//     table:{
//  backgroundColor:"#F7F7FB",
//      },
}));

function createData(Checkbox ,name,id, calories, fat, carbs, protein,ab,abc,abh,abcd,abcde) {
    return {Checkbox, name,id, calories, fat, carbs, protein,ab,abc,abh,abcd,abcde };
  }
  
  
  
export default function Material() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        label="Child 3"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
  const classes=styles()

  const rows = [
    createData( 1,<FormControlLabel
      label=""
      control={<Checkbox         color="yellow"
      className={classes.check} checked={checked[1]} onChange={handleChange2} />}
    />, 159, 6.0, 24, 4.0,8,10,11,13,14,15),
    createData(2,<FormControlLabel
      label=""
      control={<Checkbox         color="yellow"
      className={classes.check} checked={checked[1]} onChange={handleChange2} />}
    />, 237, 9.0, 37, 4.3,9,10,11,13,14,15),
    createData(3,<FormControlLabel
      label=""
      control={<Checkbox         color="yellow"
      className={classes.check} checked={checked[1]} onChange={handleChange2} />}
    />, 262, 16.0, 24, 6.0,10,10,11,13,14,15),
    createData(4,<FormControlLabel
      label=""
      control={<Checkbox         color="yellow"
      className={classes.check} checked={checked[1]} onChange={handleChange2} />}
    />, 305, 3.7, 67, 4.3,11,10,11,13,14,15),
    createData(5,<FormControlLabel
      label=""
      control={<Checkbox         color="yellow"
      className={classes.check}checked={checked[1]} onChange={handleChange2} />}
    />, 305, 3.7, 67, 4.3,11,10,11,13,14,15),
    createData(6,<FormControlLabel
      label=""
      control={<Checkbox          color="yellow"
       className={classes.check}checked={checked[1]} onChange={handleChange2} />}
    />, 305, 3.7, 67, 4.3,11,10,11,13,14,15),
    createData(7,<FormControlLabel
      label=""
      control={<Checkbox         color="yellow"
      className={classes.check} checked={checked[1]} onChange={handleChange2} />}
    />, 305, 3.77, 67.7, 4.3,11,10,11,13,14,15),

  ];
   
  return (
      <>
            <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.table}>
          
         <TableCell className={classes.bolder}><FormControlLabel
        label=""
        control={ <Checkbox             checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
         defaultChecked color="green"className={classes.check}></Checkbox>}
         /></TableCell>
            <TableCell className={classes.bolderR} align="right">RECD </TableCell>
            <TableCell className={classes.bolder}align="right">PKG NO</TableCell>
            <TableCell className={classes.bolder} align="right">MATERIAL NO</TableCell>
            <TableCell className={classes.bolder}align="right">DESCRIPTION</TableCell>
            <TableCell className={classes.bolder}align="right">COLOR</TableCell>
            <TableCell className={classes.bolder}align="right">FABRIC TYPE</TableCell>
            <TableCell className={classes.bolder}align="right">SHIPMENT QTY</TableCell>
            <TableCell className={classes.bolder}align="right">FABRIC TYPE</TableCell>
            <TableCell className={classes.bolder}align="right">FABRIC TYPE</TableCell>
            <TableCell className={classes.bolder}align="right">SHIPMENT QTY</TableCell>
            <TableCell className={classes.bolder}align="right">FABRIC TYPE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Checkbox}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.ab}</TableCell>
              <TableCell align="right">{row.abc}</TableCell>
              <TableCell align="right">{row.abh}</TableCell>
              <TableCell align="right">{row.abcd}</TableCell>
              <TableCell align="right">{row.abcde}</TableCell>

            </TableRow>
          ))}
          
        </TableBody>

      </Table>
    </TableContainer>
 
</>

  )};