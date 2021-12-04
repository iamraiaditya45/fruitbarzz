import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import CommentIcon from '@mui/icons-material/Comment';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DrawerComponent from "./hamburger.js";

const drawerWidth = 70;

const styles=makeStyles((theme)=>({
  

    // drawer: {
    //     width: drawerWidth,
    //     flexShrink: 0,
    //     [theme.breakpoints.down('sm')]:{         
    //     width:drawerWidth-20,
    //     }
    //   },
      drawerPaper: {
        width: "58px",
        marginTop:"-6px",
        backgroundColor:"#1E3C50",
        [theme.breakpoints.down('sm')]:{         
          width:drawerWidth-20,
        }
      },
      drawerContainer: {
        overflow: 'auto',
        [theme.breakpoints.down('sm')]:{         
        }
      },
      icon:{
          color:"white",
          fontSize:"27px",
          [theme.breakpoints.down('sm')]:{         
          fontSize:"25px",
          }
      },
      menuItems:{
        backgroundColor:'#655FAA',
        // padding:'10px',
        marginTop:'-13px',
        height:58,
      },
      menuItem:{
        backgroundColor:'#325F80',
        padding:'15px',
        marginTop:'-8px',
        height:58,
      },
      circle:{
          backgroundColor:'#71a6d2',
          height:"58px",
          width:"4px",
          marginLeft:"-15px",
          marginRight:"13px"
      },
      circle2:{
        backgroundColor:'#dcdcdc',
        height:"38px",
        width:"2px",
        marginLeft:"15px",
        marginTop:"-5px"
    },
}));

export default function Material() {
  const theme = useTheme();
    const classes=styles()
    const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(true);
  };

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
      <>
{isMatch ? (
            <DrawerComponent />
          ) : (
            <>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem className={classes.menuItems}>
            <AlignHorizontalCenterIcon className={classes.icon}/>
            </ListItem>
          </List>
          <List>
            <ListItem>
            <MarkunreadMailboxIcon className={classes.icon}/>
            </ListItem>
          </List><List>
            <ListItem className={classes.menuItem}>
                <div className={classes.circle}></div>
            <CommentIcon className={classes.icon}/>
            </ListItem>
          </List><List>
            <ListItem>
            <DashboardIcon className={classes.icon}/>
            </ListItem>
          </List><List>
            <ListItem>
            <PersonIcon className={classes.icon}/>
            </ListItem>
          </List>
        </div>
          </Drawer>
          </>
          )}
      </>
     )};


     