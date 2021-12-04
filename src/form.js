import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
const useStyles = makeStyles((theme) => ({
  Card:{
    height:"auto",
    width:360,
    backgroundColor:"white",
    boxShadow:"0 0 0 0",
    overflow:"auto",
    marginTop:40
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  please:{
fontSize:"20px",
marginTop:"40px",
color:"black",
width: "180px",
height: "24px",
marginLeft:"-110px"
  },
  sign:{
    fontSize:"28px",
    fontWeight:"bold",
    marginTop:"40px",
    color:"#1E88E5" ,
    textAlign:"center"
  },
  company:{
    fontSize:"24px",
    color:"grey" ,
    textAlign:"center",
  },
  form: {
    width: '90%', 
    marginTop: theme.spacing(1),
  },
  cancel: {
    marginTop:28,
    marginBottom:28,
    marginRight:"10px",
    marginLeft:"20px",
    backgroundColor:"white",
    color:"black",
    width:"100px",
    height:"36px"
  },
  save: {
    marginTop:28,
    marginBottom:28,
    backgroundColor:"#1689FA",
    width:"100px",
    height:"36px",
    // marginRight:"30px",
    marginLeft:"35px"
  },
  input:{
    fontSize:"17px",
    marginBottom:"10px",
    marginTop:"17px",
  },
  errors:{
      color:"red",
      marginTop:5
  }
}));
const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length <6) {
      errors.username = 'Must be greater than 6 character';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length <6) {
      errors.password = 'Must be greater than 6 character';
    }
    return errors;
  };
export default function SignIn() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>

    <Container className={classes.Card}>
      <div className={classes.paper}>
        <Typography className={classes.please}>
          Add Package/Roll
        </Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form} autoComplete="off" >
          <TextField
          // error
            fullWidth
            id="packageNo"
            name="packageNo"
            label="Package No"
            className={classes.input}
            onChange={formik.handleChange}
            value={formik.values.username}
        required  />
                 {formik.errors.username ? <div className={classes.errors} >{formik.errors.username}</div> : null}
          <TextField
          // error
            fullWidth
            name="materialNo"
            id="materialNo"
            label="Material No"
            className={classes.input}
            onChange={formik.handleChange}
            value={formik.values.password}
         required />
                 {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                
         <TextField
          // error
            fullWidth
            id="Color"
            name="Color"
            label="Color"
            className={classes.input}
            onChange={formik.handleChange}
            value={formik.values.username}
        required  />
         <TextField
          // error
            fullWidth
            id="Shipment"
            name="Shipment"
            label="Shipment Qty"
            className={classes.input}
            onChange={formik.handleChange}
            value={formik.values.username}
        required  />
                  <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.cancel}
          >
            CANCEL
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.save}
          >
            SAVE
          </Button>
                </form>
      </div>
    </Container>
    </>
  );
}