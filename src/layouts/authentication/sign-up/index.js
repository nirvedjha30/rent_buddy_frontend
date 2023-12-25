/**
=========================================================
* Material React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";



function Cover() {

  // const[id, idchange]=useState("");
  const[name, namechange]=useState("");
  const[email, emailchange]=useState("");
  const[mobileNumber, mobileNumberchange]=useState("");
  const[address, addresschange]=useState("");
  const[password, passwordchange]=useState("");
  const[roleId, roleIdchange]=useState("");

  const navigate=useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    let regobj={name, email, password, mobileNumber, address, roleId };
    // console.log(regobj);

    fetch("http://103.186.184.179:3015/api/admin",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(regobj)
    }).then((res)=>{
      console.log(res)
      if(res && res.ok){
        toast.success('Registered successfully.')
        navigate('/authentication/sign-in')
      }else{
        toast.error('You are already register.');
      }
    }).catch((err)=>{
        toast.error('Failed : '+err.message);
    });
  }


  const currencies = [
    {
      value: '1',
      label: 'Vendor'
    },
    {
      value: '2',
      label: 'User'
    },
  ];


  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handlesubmit}>
            <MDBox mb={2}>
              <MDInput value={name} onChange={e=>namechange(e.target.value)} type="text" label="Name" variant="standard" fullWidth  required/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput value={email} onChange={e=>emailchange(e.target.value)} type="email" label="Email" variant="standard" fullWidth required/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput value={mobileNumber} onChange={e=>mobileNumberchange(e.target.value)} type="number" label="Number" variant="standard" fullWidth required/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput value={address} onChange={e=>addresschange(e.target.value)} type="text" label="Address" variant="standard" fullWidth required/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput value={password} onChange={e=>passwordchange(e.target.value)} type="password" label="Password" variant="standard" fullWidth required/>
            </MDBox>
            <MDBox mb={2}>
            <TextField
              value={roleId} onChange={e=>roleIdchange(e.target.value)}
              id="standard-select-currency"
              select
              label="Select User Type"
              defaultValue="EUR"
              // helperText="Please select your currency"
              variant="standard"
              fullWidth
              required
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                sign Up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
