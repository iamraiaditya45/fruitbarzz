import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./navBar";
import Footer from "./footer";

const styles = makeStyles((theme) => ({
term :{
  margin:"100px",
  marginTop:"200px",
  textAlign:"center",
}
}));
export default function Refund() {
    const classes = styles();
    // const theme = useTheme();
    // const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
    return (
      <>
    <Navbar/>
  <h1 className={classes.term}>
Refunds & Cancellations
We have a "no questions asked return at delivery and refund policy' which entitles all our
members to return the product at the time of delivery if due to some reason they are not
satisfied with the products delivered. We will take the returned product back with us and
issue a credit note for the value of the returned products which will be credited to your
account on FRUITBAR. This can be used to pay for your subsequent shopping bills. If you
have opted for cash on delivery, Pay
only for the satisfied products.
Acceptance of returns & refund post-delivery is subject to a satisfactory inspection by our
customer service team. Please get in touch with us via self-service on the FRUITBAR
contact our customer care numbers for any such requests.
Note:As a Covid-19 safety and hygiene measure, we will not pick up any goods post-delivery.
We request all our members to thoroughly check the products at the time of delivery.

</h1>
<Footer/>
</>
  );
}