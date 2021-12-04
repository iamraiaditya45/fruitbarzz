import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { Button } from "@material-ui/core";
import Rohit from './a.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import CommentIcon from '@mui/icons-material/Comment';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AC from "./aC.svg";

const DrawerComponent = () => {
  const useStyles = makeStyles(theme => ({
    drawerContainer: {
        backgroundColor:"white",
        backgroundColor: "#1E3C50",
    },
    iconButtonContainer: {
      marginLeft: 'auto',
      color: 'black',
      [theme.breakpoints.down('sm')]: {
      marginRight:390,
      padding: "15px 1px 10px 3px",
      marginLeft:"-15px"
      
      }
    },

    menuIconToggle: {
      fontSize: 32,
      color:"white",
      marginTop:"8px",
      marginLeft:"9px"
    },
    btn:{
        border:"1px solid white",
        color:"white",
        padding:" 2px 12px 2px 12px",
        marginLeft:"15px"
      },
      btnContained:{
        backgroundColor:"#455060",
        color:"white",
        padding:"2px",
        width:"150px",
        marginLeft:"15px",
        border:"1px solid white",
      },
      top:{
          height:"100px",
          backgroundColor: "#325F80",
          marginTop:"-20px"
      },
      iconBox:{
          height:"70px"
,      },
Create:{
    marginLeft:"50px",
    fontSize:"17px",
    color:"black",
    width:"250px",
    padding:"25px",
    fontWeight:"bold",
},
menuIconList:{
    fontSize:"40px",
    marginLeft:"-4px",
    height:"55px",
    fontSize:"30px",
    marginTop:"-6px",
    width:"55px",
    background: "#246BD6 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    opacity: 1,
},
signUp: {
    marginLeft: "15px",
    // marginTop: "38px",
    fontSize: "17px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "150px",
      marginTop: "28px",
      fontSize: "22px",
      color:"white",
      fontWeight:"bold"
    },
  },
active:{
    display:"flex",
    marginTop:"-7px",

  },
  activeText:{
    fontSize:"13px",
    fontWeight:"lighter",
    color: "#FFFFFF",
    marginLeft:"18px",
     marginTop:"-10px",
     [theme.breakpoints.down("sm")]: {
      fontSize:"13px",
      fontWeight:"lighter",
      color: "#FFFFFF",
      marginLeft:"120px",
       marginTop:"-7px",
    },
  },
  arrowDown:{
    marginTop:"-14px",
    [theme.breakpoints.down("sm")]: {
      marginTop:"-52px",
      color:"white",
      marginLeft:"180px",
      fontWeight:"bold",
      fontSize:"30px"
    },
  },
  rohit:{
    height:"10%",
    width:"10%",
    marginTop:"10px",
    marginLeft:"14px",
    [theme.breakpoints.down("sm")]: {
      height:"36px",
      width:"36px",
      marginTop:"32px",
      marginLeft:"8px",
      zIndex:1,
    },
  },
  manC:{
    height:"30px",
    width:"30px",
    borderRadius:"50%",
    marginLeft:"-26px",
    zIndex:0,
    [theme.breakpoints.down('sm')]:{         
     height:"45px",
     width:"45px",
    //  borderRadius:"50%",
     marginLeft:"-40px",
     zIndex:0,
     marginTop:"30px"
   },
  },
   menuButton:{
     marginTop:"-95px",
  }
  }));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(true);
  };
  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor='right'
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}>
        <List>

        <ListItem className={classes.top} divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon  >
            <img src={Rohit} className={classes.rohit}/>
            <img className={classes.manC} src={AC}/>
                <div className={classes.shawn}>
      <p className={classes.signUp}>Suntex</p>
      <KeyboardArrowDownIcon className={classes.arrowDown}/>
      </div>
              {/* </div> */}
            </ListItemIcon>
          </ListItem>
          <ListItem  className={classes.iconBox} divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
            <Button variant="outlined" className={classes.btn}><AlignHorizontalCenterIcon className={classes.newIcon}/></Button>
            </ListItemIcon>
          </ListItem>

          <ListItem className={classes.iconBox} divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
            <Button variant="outlined" className={classes.btn}><MarkunreadMailboxIcon/></Button>
            </ListItemIcon>
          </ListItem>

          <ListItem className={classes.iconBox} divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
            <Button variant="outlined" className={classes.btn}><CommentIcon/></Button>
            </ListItemIcon>
          </ListItem>

          <ListItem className={classes.iconBox} divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
            <Button variant="outlined" className={classes.btn}><DashboardIcon/></Button>
            </ListItemIcon>
          </ListItem>
          <ListItem className={classes.iconBox} divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
            <Button variant="outlined" className={classes.btn}><PersonIcon/> </Button>
            </ListItemIcon>
          </ListItem>

        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      {/* <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
                          <ListItemIcon className={classes.menuIconList}>
        <MenuIcon className={classes.menuIconToggle} />
        </ListItemIcon>
        <Typography className={classes.Create}>Create a purchase recipt</Typography>
      </IconButton> */}
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
    </>
  );
};

export default DrawerComponent;