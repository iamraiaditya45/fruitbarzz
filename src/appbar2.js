// import React ,{useState} from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import { makeStyles} from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import A from "./a.png";
// import AB from './abs.png'
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import SettingsIcon from '@material-ui/icons/Settings';
// import AppsIcon from '@material-ui/icons/Apps';
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// const styles=makeStyles((theme)=>({
 
//   appBar: {
//      backgroundColor:"white",
//      boxShadow:"0px ",
//      height:58.5,
//      marginTop:"62.5px",
//      [theme.breakpoints.down('sm')]:{         
//       zIndex: theme.zIndex.drawer +1,
//       backgroundColor:"#00688B",
//       boxShadow:"0px",
//       width:"100%",
//       height:55,
//     },
//   },
//   menu:{
//     display:"none",
//       [theme.breakpoints.down('sm')]:{         
//       color:"white",
//       marginLeft:"-20px"
//       }, 
//     },
//    expand:{
//         color:"white",
//         marginRight:"20px",
//         fontSize:"42px",
//         [theme.breakpoints.down('sm')]:{         
//           color:"white",
//           marginRight:"20px",
//           height:"30px",
//           width:"30px",
//      },
//    },
//   SettingsIcon:{
//      color:"white",
//      marginRight:"20px",
//      fontSize:"35px",
//      [theme.breakpoints.down('sm')]:{         
//       color:"white",
//       marginRight:"20px",
//       fontSize:"30px"
//   },
//  },
//   cafe:{
//    marginRight:"5px",
//    marginLeft:"18px",
//    fontSize:20,
//     fontWeight:500,
//     fontWeight:"bold",
//     [theme.breakpoints.down('sm')]:{         
//       marginRight:"5px",
//       marginLeft:"14px",
//       fontSize:20,
//        fontWeight:500,
//        fontWeight:"bold",
//      },
//   },
//    up:{
//      display:'flex',
//      flexDirection:'row',
//      justifyContent:'space-between',
//      [theme.breakpoints.down('sm')]:{         
//       display:'flex',
//       flexDirection:'row',
//       justifyContent:'space-between'
//     },
//    },
//    man:{
//      height:"45px",
//      width:"45px",
//      borderRadius:"50%",
//      marginLeft:"-15px",
//      [theme.breakpoints.down('sm')]:{         
//       height:"30px",
//       width:"30px",
//       borderRadius:"50%",
//       marginLeft:"-10px"
//     },
//    },
//   logo:{
//      height:"38px",
//      width:"38px",
//      borderRadius:"50%",
//      marginRight:"20px",
//      [theme.breakpoints.down('sm')]:{         
//       height:"28px",
//       width:"28px",
//       borderRadius:"50%",
//       marginRight:"20px",
//       marginTop:"1px"
//     },
//    },

//   right:{
//       marginLeft:"1432px",
//       [theme.breakpoints.down('sm')]:{         
//         marginLeft:"30px",
//         display:"flex",
//         flexDirection:"row",
//         overflow: "hidden",
//        },
//      },
// search:{
//   display:"none",
//   [theme.breakpoints.down('sm')]:{         
//   display:"block",
//   marginLeft:"-20px",
//   marginRight:0,
//   fontSize:"30px"
//   }
// },
// menuButton: {
//   marginRight:"5px",
//   marginLeft:"-25px",
//   [theme.breakpoints.up('sm')]: {
//     display: 'none',
//   },
// },
// }));

//     export default function Material( ) {     
//         const classes=styles()
//         const [mobileOpen, setMobileOpen] = useState(false);

//         const handleDrawerToggle = () => {
//           setMobileOpen(true);
//         };
//       return (
//           <>
//     <div className={classes.mainContainer}>
//      <AppBar className={classes.appBar} >
//       <Toolbar> 

//     <div className={classes.up}>
//               <Typography className={classes.cafe} >Suntex</Typography>
             
//               <ArrowDropDownIcon className={classes.expands} />
//               </div>
//               </Toolbar> 
//         </AppBar>   
//     </div>
//     <div>
//     </div>
//     </>
//      )};
