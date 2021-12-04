import React,{ useState, useEffect , createContext} from "react";
// import styled from "styled-components";
import { Typography, useMediaQuery } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import DrawerComponent from "./drawer.js";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "green",
    boxShadow: "1px 0 4px grey",
    height: "70px",
    [theme.breakpoints.down("sm")]: {
      height: "55px",
      width:"375px"
    },
  },
  appbar2: {
    backgroundColor: "white",
    boxShadow: "1px 0 4px grey",
    height: "62px",
    marginTop:"70px",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "white",
      boxShadow: "1px 0 4px grey",
      height: "55px",
      marginTop:"55px",
    },
  },
  
  logo:{
  display:"flex",
  justifyContent:"space-between"
  },
  logoIcon: {
    top: "15px",
width: "30px",
height: "37px",
marginLeft:"-5px",
opacity: 1,
[theme.breakpoints.down("sm")]: {
  marginTop:"5px",
  width: "25px",
  height: "27px",
  marginLeft:"-8px",
  opacity: 1,
},

  },
  menuIconList:{
    fontSize:"40px",
    marginLeft:"-24px",
    height:"63px",
    fontSize:"30px",
    marginTop:"-3px",
    width:"65px",
    background: "#246BD6 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    opacity: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize:"40px",
      marginLeft:"-24px",
      height:"60px",
      fontSize:"30px",
      marginTop:"3px",
      width:"65px",
      background: "#246BD6 0% 0% no-repeat padding-box",
      boxShadow: "0px 3px 6px #00000029",
      opacity: 1,
    },
  },
  menuIcon: {
opacity: 1,
padding:"18px",
fontSize:"30px",
color:"white",

  },
  
  logoText:{
    marginTop:"5px",
    marginLeft:"8px",
    fontSize:"20px",
    fontWeight:"bold",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginTop:"5px",
      marginLeft:"8px",
      fontSize:"18px",
      fontWeight:"bold",
      textDecoration: "none",
    },
  },
  logoText2:{
    marginLeft:"8px",
    fontSize:"18px",
    color:"black",
    width:"250px",
    padding:"25px",
    fontWeight:"bold",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft:"-80px",
    fontSize:"12px",
    color:"black",
    width:"130px",
    // padding:"25px",
    fontWeight:"bold",
    textDecoration: "none",
    },
  },
  Left: {
    textAlign: "center",
    color: "white",
    display: "flex",
    marginLeft: "1395px",
    flexDirection: "row",
    justifyContent:"center",
    padding:"10px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      color: "white",
      display: "flex",
      marginLeft: "205px",
      flexDirection: "row",
      justifyContent:"center",
      padding:"6px",
      marginTop:"8px"
    },
  },
  Left2:{
    textAlign: "center",
    color: "white",
    display: "flex",
    padding: "0px",
    marginLeft: "680px",
    flexDirection: "row",
    justifyContent:"space-between",
    padding:"10px",
  },
  color: {
    color: "black",
    marginTop: 28,
  },
  login: {
    marginLeft: "-5px",
    marginTop: "30px",
    fontSize: "25px",
  },
  signUp: {
    marginLeft: "15px",
    // marginTop: "38px",
    fontSize: "17px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      // marginTop: "38px",
      fontSize: "14px",
    },
  },
  Icon: {
    marginTop: "18px",
    marginRight: "25px",
    fontSize:27,
    [theme.breakpoints.down("sm")]: {
      marginTop: "-4px",
      marginRight: "13px",
      fontSize:25,
    },
  },
  notiIcon: {
    marginTop: "18px",
    marginRight: "22px",
    fontSize:40,
    [theme.breakpoints.down("sm")]: {
      marginTop: "-4px",
      marginRight: "2px",
      fontSize:18,
    },
  },
  shawn:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    marginTop:"-4px",
    fontSize:"10px",
    [theme.breakpoints.down("sm")]: {
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      marginTop:"-2px",
      fontSize:"2px",
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
      marginLeft:"12px",
       marginTop:"-7px",
    },
  },
  arrowDown:{
    marginTop:"-14px",
    [theme.breakpoints.down("sm")]: {
      marginTop:"-12px",
    },
  },
  rohit:{
    height:"10%",
    width:"10%",
    marginTop:"10px",
    marginLeft:"14px",
    [theme.breakpoints.down("sm")]: {
      height:"20%",
      width:"20%",
      marginTop:"12px",
      marginLeft:"8px",
    },
  },
  btn:{
    border:"1px solid #246BD6",
    color:"#246BD6",
    padding:" 2px 12px 2px 12px",
    marginRight:"10px"
  },
  btnContained:{
    backgroundColor:"#246BD6",
    color:"white",
    padding:"2px",
    width:"150px"
  },
  newIcon:{
    fontWeight:"lighter",
    fontSize:"5px"
  },
  mid: {
    marginLeft: "30px",
    marginTop: "33px",
    fontSize: "18px",
  },
}));

const Navbar = () => {
  
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  
  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <div className={classes.logo}>
              <AccountBalanceIcon className={classes.logoIcon}/>
              {/* <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={classes.mid}>ABOUT US</p>{" "}
                </Link> */}
                <Link style={{ textDecoration: "none", color: "white" }}
                  to="/">
 <h1 className={classes.logoText}>FRUITBARZ</h1></Link>
          </div>

              <div className={classes.Left}>
                  <SearchIcon className={classes.Icon} />
      <NotificationsNoneIcon className={classes.notiIcon} />
              </div>
        </Toolbar>
      </AppBar>
      {/* appBar2 */}
      
      <AppBar className={classes.appbar2}>
        <Toolbar>
        {isMatch ? (
            <DrawerComponent />
          ) : (
            <>
          <div className={classes.logo}>
            <List>
              <ListItemIcon className={classes.menuIconList}>
              <MenuIcon className={classes.menuIcon}/>
              </ListItemIcon>
              </List>
              <Typography className={classes.logoText2}>Buy your fav fruit here</Typography>
          </div>

              <div className={classes.Left2}>
              <Link
                  to="/term"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={classes.mid}>TERM&CONDITIONS</p>
                </Link>
                <Link
                  to="/refund"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={classes.mid}>REFUND&CANCELL</p>{" "}
                </Link>
                <Link
                  to="/privacy"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={classes.mid}>PRIVACY</p>{" "}
                </Link>
                <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={classes.mid}>ABOUT US</p>{" "}
                </Link>
                <Link
                  to="/timeline"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={classes.mid}>Delivery Timeline</p>{" "}
                </Link>
              {/* <Button variant="outlined" className={classes.btn}>AboutUs</Button>
              <Button variant="outlined" className={classes.btn}>Privacy Policy</Button>
              <Button variant="outlined" className={classes.btn}>Refund&Cancellation</Button>
              <Button variant="outlined" className={classes.btn}>Terms&Condition</Button> */}
                  </div>
                  </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
