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
export default function AboutU() {
     const classes = styles();
    // const theme = useTheme();
    // const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
    return (
      <>
<Navbar/>
  <h1 className={classes.term}>
            FRUITBAR not only gives you the convenience to sit back at home
            and get things delivered at your doorstep, but they also ensure that
            you are delivered the best quality products. At FRUITBAR, you will
            find a variety of items you usually buy and stock up on a regular
            basis at home, at very reasonable costs. From vegetables and fruits,
            to rice, ghee, beverages, spices, snacks, personal care products and
            various other household items, you can look for anything that you
            would use regularly at your home on this website. FRUITBAR not
            only provides you a one-stop solution for all your home needs, but
            also delivers your orders at minimal delivery charges. This online
            grocery store also has an offer zone wherein products with special
            offers and deals can be seen. Your Trusted Local Kirana When
            ordering through FRUITBAR your groceries are always picked and
            delivered by your selected local Kirana store. Rather than instore
            or on the phone, with Mykirana you can order your favorite trusted
            products conveniently on your computer or smartphone, letting you
            see all the stores products and available promotions. All products
            online will be charged at the price found instore, but FRUITBAR also
            offers hundreds of exclusive discounts. Exclusive offer By
            purchasing on FRUITBAR you have access to hundreds of exclusive
            online-only promotions and discount codes, all in addition to the
            regular offers provided by your local store.
</h1>
<Footer/>

</>
  );
}