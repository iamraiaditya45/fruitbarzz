import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import Tables from './table.js';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const styles=makeStyles((theme)=>({

           card3:{
         height:820,
         width:1390,
         backgroundColor:"white",
         margin:4,
         marginRight:0,
         boxShadow:"0 0 0px 0px ",
         padding:10,
         [theme.breakpoints.down('sm')]:{
         height:820,
         width:347,
         backgroundColor:"white",
         margin:5,
         marginRight:0,
         boxShadow:"0 0 0 0",
         padding:10,
        //  marginLeft:drawerWidth-13,
           }
          },
          
       search:{
        color:"black",
        marginLeft:6,
        borderColor:"#dcdcdc",
        width:300,
        height:36,
        paddingRight:"200px",
        marginRight:12,
        [theme.breakpoints.down('sm')]:{
         color:"black",
         margin:15,
         marginLeft:20,
         borderColor:"#dcdcdc",
         width:"120px",
         height:"40px",
         paddingRight:"20px",
         marginRight:"45px"
     },
    },
     add:{
         color:"#007bb8",
         margin:15,
         borderColor:"#007bb8",
         height:36,
         width:80,
         marginRight:10,
         [theme.breakpoints.down('sm')]:{
          color:"#007bb8",
          marginLeft:20,
          borderColor:"#007bb8",
          height:"40px",
          width:120,
      },
     },
     upload:{
      color:"#007bb8",
      margin:15,
      marginLeft:15,
      width:163,
      borderColor:"#007bb8",
      height:"36px",
      [theme.breakpoints.down('sm')]:{
       color:"#007bb8",
       marginLeft:90,
       borderColor:"#007bb8",
       height:"40px",
       marginTop:"5px"
   },
  },
     hr1:{
      marginLeft:"10px",
      width:"98%",
      marginTop:6,
      marginBottom:26,
      [theme.breakpoints.down('sm')]:{
         marginLeft:"1px",
         width:"100%",
         marginTop:8,
     },
    },
    three:{
      marginTop:"20px",
      marginBottom:"15px",
      display:"flex",
      justifyContent:"space-between",
      padding:"5px",
      [theme.breakpoints.down('sm')]:{  
      marginTop:"20px",
      marginBottom:"15px",
      display:"flex",
      justifyContent:"space-between",
      padding:"5px"
    },
  },

  delete:{
    display:"flex",
    [theme.breakpoints.down('sm')]:{         
     display:"flex",
     flexDirection:"row"
 },
},
  selected:{
    color:"grey",
    marginLeft:15,
    width:80,
    [theme.breakpoints.down('sm')]:{         
     color:"grey",
     fontSize:"12px",
     width:58,
     marginLeft:0
 },
},
circle2:{
  backgroundColor:'#dcdcdc',
  height:"38px",
  width:"2px",
  marginLeft:"15px",
  marginTop:"-5px",
  [theme.breakpoints.down('sm')]:{
   backgroundColor:'#dcdcdc',
   height:"38px",
   width:"2px",
   marginLeft:"15px",
   marginTop:"-5px"
  },
 },
 receivedBtn:{
  color:"black",
  marginLeft:20,
  marginTop:-7,
  borderColor:"#dcdcdc",
  height:36,
  width:96,
  fontWeight:"bold",
  [theme.breakpoints.down('sm')]:{
   color:"black",
   marginTop:-7,
   borderColor:"#dcdcdc",
   height:"40px",
   fontSize:"12px",
   marginLeft:"10px",
   marginRight:"10px",
},
},
printBtn:{
  color:"black",
  marginLeft:20,
  marginTop:-7,
  borderColor:"#dcdcdc",
  height:36,
  width:136,
  fontWeight:"bold",
  [theme.breakpoints.down('sm')]:{
   color:"black",
   marginTop:-7,
   borderColor:"#dcdcdc",
   height:"40px",
   fontSize:"12px",
   marginLeft:"10px",
   marginRight:"10px",
},
},
deleteBtn:{
  color:"#D32F2F",
  marginLeft:20,
  marginTop:-7,
  borderColor:"#dcdcdc",
  height:36,
  width:96,
  fontWeight:"bold",
  [theme.breakpoints.down('sm')]:{
   color:"black",
   marginTop:-7,
   borderColor:"#dcdcdc",
   height:"40px",
   fontSize:"12px",
   marginLeft:"10px",
   marginRight:"10px",
},
},
     filter:{
         color:"black",
         margin:15,
         marginLeft:5,
         borderColor:"#dcdcdc",
         height:36,
         width:145,
         marginTop:-7,
         marginLeft:705,
         fontWeight:"bold",
         [theme.breakpoints.down('sm')]:{
          color:"black",
          borderColor:"#dcdcdc",
          height:"40px",
          marginTop:-7,
          fontSize:"12px",
         width:90,
         marginLeft:0,
      },
     },
     
   circle:{
     height:"24px",
     width:"24px",
     borderRadius:"50%",
     backgroundColor:"#1E88E5",
     color:"white",
     marginLeft:"8px"
   }
}));
export default function material() {
  
    const classes=styles()
   
  return (
      <>
    <div className={classes.card3}>
        <div>
    <Typography variant="h5">Packages/Roll List</Typography>
    <Button variant="outlined" className={classes.search} startIcon={
                <SearchIcon fontSize={"large"} className={classes.addicons} />
              }
            >
              Search
            </Button> 
            <Button
              variant="outlined"
              className={classes.add}
              startIcon={
                <AddIcon/>
              }
            >
              ADD
            </Button> 
            <Button
              variant="outlined"
              className={classes.upload}
              startIcon={
                <CloudUploadIcon/>
              }
            >
                BULK UPLOAD
            </Button> 

<hr className={classes.hr1}/>
<div className={classes.three}>
<div className={classes.delete}>
<Typography  className={classes.selected}>0 Selected</Typography>
<div className={classes.circle2}></div>
<Button
              variant="outlined"
              className={classes.receivedBtn}
            >
            RECEIVED
            </Button> 
            <Button
              variant="outlined"
              className={classes.printBtn}
            >
            PRINT LABEL
            </Button> 
            <Button
              variant="outlined"
              className={classes.deleteBtn}
            >
            DELETE
            </Button> 
            <Button variant="outlined" className={classes.filter} startIcon={
                <TuneRoundedIcon  className={classes.addicons} />
              }
            >
              FILTERS
              <div className={classes.circle}>4</div>
            </Button> 
            </div>
            </div>
            <div>
         <Tables/>
    </div>
            </div>
    </div>
</>

  )};

