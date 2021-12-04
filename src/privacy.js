import React from "react";
import Navbar from "./navBar";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./footer";

const styles = makeStyles((theme) => ({
  term: {
    margin: "100px",
    marginTop: "200px",
    textAlign: "center",
  },
}));
export default function Privacy() {
     const classes = styles();
     
    // const theme = useTheme();
    // const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
    return (
      <>
          <Navbar/>
  <h1 className={classes.term}>
Privacy Policy
Who we are
We are FRUITBAR.
Comments
When visitors leave comments on the site we collect the data shown in the comments
form, and also the visitors IP address and browser user agent string to help spam
detection.
An anonymized string created from your email address (also called a hash) may be
provided to the Gravatar service to see if you are using it. . After approval of your
comment, your profile picture is visible to the public in the context of your comment.
Media
If you upload images to the website, you should avoid uploading images with embedded
location data (EXIF GPS) included. Visitors to the website can download and extract any
location data from images on the website.
Cookies
If you leave a comment on our site you may opt-in to saving your name, email address
and website in cookies. These are for your convenience so that you do not have to fill in
your details again when you leave another comment. These cookies will last for one year.
If you visit our login page, we will set a temporary cookie to determine if your browser
accepts cookies. This cookie contains no personal data and is discarded when you close
your browser.
When you log in, we will also set up several cookies to save your login information and
your screen display choices. Login cookies last for two days, and screen options cookies
last for a year. If you select Remember Me.. your login will persist for two weeks. If you
log out of your account, the login cookies will be removed.
If you edit or publish an article, an additional cookie will be saved in your browser. This
cookie includes no personal data and simply indicates the post ID of the article you just
edited. It expires after 1 day.
Embedded content from other websites
Articles on this site may include embedded content (e.g. videos, images, articles, etc.).
Embedded content from other websites behaves in the exact same way as if the visitor has
visited the other website.
These websites may collect data about you, use cookies, embed additional third-party
tracking, and monitor your interaction with that embedded content, including tracking
your interaction with the embedded content if you have an account and are logged in to
that website.
Who we share your data with
If you request a password reset, your IP address will be included in the reset email.
How long we retain your data
If you leave a comment, the comment and its metadata are retained indefinitely. This is so
we can recognize and approve any follow-up comments automatically instead of holding
them in a moderation queue.
For users that register on our website, we also store the personal information they provide
in their user profile. All users can see, edit, or delete their personal information at any time
(except they cannot change their username). Website administrators can also see and edit
that information.
What rights vou have over vour data
Home
Offers
Categories
Cart</h1>
<Footer/>
</>
  );
}