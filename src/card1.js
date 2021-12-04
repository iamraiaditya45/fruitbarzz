import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CreateIcon from '@material-ui/icons/Create';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Form from './form.js';
import Modal from '@mui/material/Modal';
import { useMediaQuery } from "@material-ui/core";

const styles=makeStyles((theme)=>({
card2:{
     height:"auto",
     width:"330px",
     backgroundColor:"white",
     margin:4,
     marginLeft:"67px",
     boxShadow:"0px 0px 0px 0px",
     padding:10,
     [theme.breakpoints.down('sm')]:{         
      height:"auto",
      width:347,
      backgroundColor:"white",
      margin:3,
      boxShadow:"0 0 0 0",
      // marginLeft:drawerWidth-13,
      padding:10
    },
 },

editbutton:{
   color:"#007bb8",
   margin:15,
   marginLeft:5,
   borderColor:"#007bb8",
   height:"36px",
   width:"80px",
   [theme.breakpoints.down('sm')]:{         
    color:"#007bb8",
    height:"36px",
    width:"80px",
    margin:15,
    marginLeft:5,
    borderColor:"#007bb8",
    },
 },
// addicon:{
// height:36,
// width:80,
// },
 hr:{
   marginLeft:"10px",
   width:"98%",
   marginTop:7,
   [theme.breakpoints.down('sm')]:{         
    marginLeft:"2px",
    width:"99%",
    marginTop:7
    },
    
 },

 hr2:{
  marginLeft:"10px",
  width:"98%",
  marginTop:"5px",
  [theme.breakpoints.down('sm')]:{         
   marginLeft:"10px",
   width:"98%",
   marginTop:"-3px"
   },
   
},
 light:{
  color:"grey",
  [theme.breakpoints.down('sm')]:{         
    color:"grey",
    fontSize:"12px",
    },  
 },
bold:{
   color:"black",
   fontWeight:"bold",
   marginTop:"-13px",
   overflow:"auto",
   [theme.breakpoints.down('sm')]:{         
    color:"black",
    fontWeight:"bold",
    marginTop:"-20px",
    overflow:"auto",
    // fontSize:"11px"
    },
 },
 bold1:{
  color:"black",
  fontWeight:"bold",
  marginTop:"-25px",
  overflow:"auto",
  [theme.breakpoints.down('sm')]:{         
   color:"black",
   fontWeight:"bold",
   marginTop:"-30px",
   overflow:"auto",
  //  fontSize:"11px"
   },
},
 cardbtnRed:{
   backgroundColor:"#D32F2F",
   marginLeft:"85px",
   borderRadius:"20px",
   color:"white",
   fontWeight:"bold",
   width:"112px",
  //  padding:"10px",
   [theme.breakpoints.down('sm')]:{         
    backgroundColor:"#D32F2F",
    marginLeft:"100px",
    borderRadius:"20px",
    color:"white",
    fontWeight:"bold",
    width:100,
    padding:"10px",
    },
 },
 xlight:{
   color:"grey",
   fontSize:"15px",
   marginTop:"-19px",
   [theme.breakpoints.down('sm')]:{         
    color:"grey",
    fontSize:"10px",
    marginTop:"-19px"
    },
 },
selected:{
   color:"grey",
   marginLeft:15,
   [theme.breakpoints.down('sm')]:{         
    color:"grey",
    marginLeft:15,
    },
 },
 delete:{
   display:"flex",
   [theme.breakpoints.down('sm')]:{         
      display:"flex"
      }
 },

pop:{
  marginLeft:"600px"
}

}));

export default function Material() {
  
    const classes=styles()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
      <>
<div className={classes.card2}>
    <Typography variant="h5">Inbound Shipment Detail</Typography>


<Button
              variant="outlined" 
              onClick={handleOpen}
              className={classes.editbutton}
              startIcon={
                <CreateIcon fontSize={"large"}  />
              }
            >
              EDIT
            </Button> 
            <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<Form/>
</Modal>

            <hr className={classes.hr}/>
            <List>
            <ListItem >
            <Typography className={classes.bold}>Packages:30</Typography>
            <Button variant="contained"className={classes.cardbtnRed} >Delayed</Button>
            </ListItem>
            <ListItem >
            <Typography className={classes.bold1}>Received:20</Typography>
            </ListItem>
            <hr className={classes.hr2}/>
            <ListItem>
            <Typography className={classes.light}>Warehouse</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>Warehouse1</Typography>
            </ListItem>
            <ListItem >
                <Typography className={classes.light}>Shipment No</Typography>
            </ListItem>
            <ListItem >
                <Typography className={classes.bold}>DSF1234567</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Ship Mode</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>Air</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Port of Load</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>KHPNH</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Estimated Time of Delivery</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>2020-11-10</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Estimated Time of Arrival</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>2020-11-16</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Estimated Time of delivery at Factory</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>2020-11-20</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Actual Time of delivery at Factory</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>-</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Bill of Loading</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>12345678</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Vessel</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>XYZ</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.light}>Issue Date</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.bold}>2020-11-20</Typography>
            </ListItem>
          </List>
          <List>
              <ListItem>
          <Typography className={classes.xlight}>Modified By:XYZ</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.xlight}>Date Modified:20/10/20</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.xlight}>Created by:yang</Typography>
            </ListItem>
            <ListItem>
            <Typography className={classes.xlight}>Date Created:21-10-21</Typography>
            </ListItem>
          </List>
                  </div>
                  </>
                  )};
