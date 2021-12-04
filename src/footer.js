import React from "react";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles} from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import BottomNavigation from '@material-ui/core/BottomNavigation'

const useStyles = makeStyles((theme) => ({
  color: {
    color: "black",
  },
  footerDisplay:{
    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down('sm')]: {
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-around",
    }
  },
  footer:{
    height:80,
    backgroundColor:"#f6f6f6",
    marginTop:50,
    position:'relative',
    width:"100%",
    [theme.breakpoints.down('sm')]: {
      height:120,
      backgroundColor:"#f6f6f6",
      marginTop:100,
      position:'relative',
      width:"100%",
    }
  },
  itemList2:{
    padding:20,
    [theme.breakpoints.down('sm')]: {
      padding:1,
    marginLeft:90,
    }
  },
  Copyright:{
    color:"black",
    marginTop:25,
    marginRight:20,
    fontSize:20,
    fontWeight:"lighter",
    [theme.breakpoints.down('sm')]: {
      color:"black",
      marginTop:10,
      marginRight:10,
      fontSize:20,
      fontWeight:"lighter",
    }
  },
  iconFb:{
    fontSize:35,
    color:"#3b5998"
  },
  iconTw:{
    color:"#00acee",
    fontSize:35
  },
iconIn:{
    color:"#833AB4",
    fontSize:35
}
}));
const Hero = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <>
        <BottomNavigation value={value} onChange={handleChange} className={classes.footer}>
  <div className={classes.footerDisplay}>
    <div className={classes.leftFooter}>
    </div>
    <div>
    {/* <List className={classes.itemList2}>
        <ListItemIcon className={classes.iconColor}>
          <FacebookIcon className={classes.iconFb}/>
        </ListItemIcon>
        <ListItemIcon className={classes.iconColor}>
          <TwitterIcon className={classes.iconTw}/>
        </ListItemIcon>
        <ListItemIcon className={classes.iconColor3}>
          <InstagramIcon className={classes.iconIn}/>
        </ListItemIcon>
    </List> */}
    </div>
    <div className={classes.leftFooter}>
      <h5 className={classes.Copyright}>@FOODBAR All Right Reserved 2021
      Email/Call
In case of any query, Please contact us to below
details
Email will be sent to:
fruitbarzApp@gmail.com
OR
Call us at:
8821093873
(9 AM - 9PM)
Address -  Fruit Bar, Near B-block, Sarojni Nagar,Delhi
Delhi

      </h5>
    </div>
  </div>
</BottomNavigation>
    </>
  );
};

export default Hero;
