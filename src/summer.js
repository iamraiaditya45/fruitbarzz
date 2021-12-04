import React from "react";
// import styled from "styled-components";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image1 from './w1.jpg'
import Image2 from './w2.jpg'
import Image3 from './w3.jpg'
import Image4 from './w4.jpg'
import Image5 from './w5.jpg'
import Image6 from './w6.jpg'
import Image7 from './w7.jpg'
import Image8 from './w8.jpg'
import Navbar from './navBar.js'
import Footer from './footer.js'

const useStyles = makeStyles((theme) => ({
  color: {
    color: "black",
  },
  root: {
    maxWidth: 375,
    maxHeight:420,
    padding:7,
    marginTop:55,
    backgroundColor:"#f6f6f6",
    marginLeft:"30px",
    [theme.breakpoints.down('sm')]: {
      maxWidth: 375,
      maxHeight:400,
    padding: 7,
    marginTop:25,
    backgroundColor:"#f6f6f6",
    },
  },
  media: {
    height: 260,
  },
  cardDiv:{
    display:"flex",
    marginLeft:10,
    marginTop:100,
    flexWrap:"wrap",
    justifyContent:"center",
    [theme.breakpoints.down('sm')]: {
          display: "flex",
        flexDirection: "row",
        marginRight: 30,
        marginTop: 90,
        flexWrap: "wrap",
        justifyContent: "space-around",
        }
  },
  exploreButton:{
    padding: "0.7rem 3rem",
  fontSize: "1rem",
  border: "2px solid #fff",
  borderRadius: "4px",
  outline: "none",
  cursor: "pointer",
  background: "black",
  color: "white",
  marginLeft:"65px",
  [theme.breakpoints.down('sm')]: {
    padding: "0.7rem 2rem",
    fontSize: "1rem",
    border: "2px solid #fff",
    borderRadius: "4px",
    outline: "none",
    cursor: "pointer",
    background: "black",
    color: "white",
    marginLeft: "50px",
  }
  },
  nameFruit:{
    textAlign:"center"
  },
  nameFruit: {
    textAlign: "center",
  },
  price:{
    display:"flex",
    justifyContent:"space-between",
  },
  priceFruit:{
    color:"green",
    fontWeight:"bold"
  }
}));
const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar/>
           <div className={classes.cardDiv}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                        component="img"
          className={classes.media}
          src={Image1}
          title="Contemplative Reptile"
        />
               <CardContent>
              <div className={classes.price}>
              <Typography className={classes.nameFruit} variant="h5">
                Orange
              </Typography>
              <Typography className={classes.priceFruit} variant="h5">
                30/kg
              </Typography>
              </div>
            </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.exploreButton} variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                                component="img"
          className={classes.media}
          src={Image2}
          title="Contemplative Reptile"
        />
       <CardContent>
              <div className={classes.price}>
              <Typography className={classes.nameFruit} variant="h5">
                Orange
              </Typography>
              <Typography className={classes.priceFruit} variant="h5">
                30/kg
              </Typography>
              </div>
            </CardContent>

      </CardActionArea>
      <CardActions>
      <Button className={classes.exploreButton} variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
                                component="img"
                                src={Image3}
          className={classes.media}
          title="Contemplative Reptile"
        />
         <CardContent>
              <div className={classes.price}>
              <Typography className={classes.nameFruit} variant="h5">
                Orange
              </Typography>
              <Typography className={classes.priceFruit} variant="h5">
                30/kg
              </Typography>
              </div>
            </CardContent>

      </CardActionArea>
      <CardActions>
      <Button className={classes.exploreButton} variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={Image4}
          title="Contemplative Reptile"
        />
       <CardContent>
              <div className={classes.price}>
              <Typography className={classes.nameFruit} variant="h5">
                Orange
              </Typography>
              <Typography className={classes.priceFruit} variant="h5">
                30/kg
              </Typography>
              </div>
            </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.exploreButton} variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={Image5}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.nameFruit} variant="h5" component="h2">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.exploreButton} variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={Image6}
          title="Contemplative Reptile"
        />
         <CardContent>
              <div className={classes.price}>
              <Typography className={classes.nameFruit} variant="h5">
                Orange
              </Typography>
              <Typography className={classes.priceFruit} variant="h5">
                30/kg
              </Typography>
              </div>
            </CardContent>

      </CardActionArea>
      <CardActions>
      <Button className={classes.exploreButton} variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={Image7}
          title="Contemplative Reptile"
        />
         <CardContent>
              <div className={classes.price}>
              <Typography className={classes.nameFruit} variant="h5">
                Orange
              </Typography>
              <Typography className={classes.priceFruit} variant="h5">
                30/kg
              </Typography>
              </div>
            </CardContent>

      </CardActionArea>
      <CardActions>
      <Button className={classes.exploreButton} variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={Image8}
          component="img"
          title="Contemplative Reptile"
        />
         <CardContent>
              <div className={classes.price}>
              <Typography className={classes.nameFruit} variant="h5">
                Orange
              </Typography>
              <Typography className={classes.priceFruit} variant="h5">
                30/kg
              </Typography>
              </div>
            </CardContent>

      </CardActionArea>
      <CardActions>
      <Button className={classes.exploreButton} variant="outlined">Add To Cart</Button>
      </CardActions>
    </Card>
    </div>
<Footer/>
    </>
  );
};

export default Hero;
