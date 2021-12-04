import React from 'react';
import Navbar from './navBar';

import { makeStyles } from "@material-ui/core/styles";
import { Typography, useMediaQuery } from "@material-ui/core";
import TermandCond from './term';
import Fruit from './summer'
const useStyles = makeStyles((theme) => ({
mainContainer:{
    display:"flex",
    [theme.breakpoints.down("sm")]: {
     display:"flex",
     flexDirection:"column-reverse"
      }, 
},
subContainer:{
     display:"flex",
     flexDirection:"column",
     marginRight:"50px"
 }
}));

 const Home = () => {
    const classes = useStyles();

    return (
        <>
        
        <div>
            <Navbar/>
            <div className={classes.mainContainer}>
            <div className={classes.subContainer}>
            <Fruit/>

 </div>
</div>
        </div>
        </>
    )
}
export default Home;