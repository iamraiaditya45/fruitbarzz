import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./navBar";
import Footer from "./footer";

const styles = makeStyles((theme) => ({
  term: {
    margin: "100px",
    marginTop: "200px",
    textAlign: "center",
  },
}));
const TermandCond = () => {
  console.log("Teram page  line 11");
  const classes = styles();
  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    <Navbar/>
      <h1 className={classes.term}>
        Shipping & Delivery Timeline Once the order is placed by the user. We ensure the user to deliver the item within 30 mins to 4 hours. We never fail our user expectation in terms of quality and delivery timing.
      </h1>
      <Footer/>
    </>
  );
};

export default TermandCond;
