import React, { useState,useEffect } from 'react';
import API from '../api.js'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       JPA SHOP
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
//axios.defaults.withCredentials = true; // withCredentials 전역 설정


export default function SignUp() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [duplicate, setDuplicate] = useState(true);



  const handleSubmit = (event) => {
    event.preventDefault();

    API
    .post('',{
      email: email,
      password: password,
      city : city,
      street : street,
      zipcode : zipcode
    })
    .then((response) => {
        console.log(response.data);
         if(response.status === 200){
            alert("")
         }
         document.location.href = "/";
         // session 지워야함
    }
    )
    .catch((error) => {
    // 400 코드면 여기로옴
       if(error.response.status === 400){
              /* 서버에서 날라오는 유효성검사 message*/
             alert(error.response.data.errors[0].defaultMessage);
       }
    })
  };


  const AccessPage = () => {
     console.log("session username" + sessionStorage.getItem('username'));
    if(sessionStorage.getItem('username') == '' || sessionStorage.getItem('username') == null ){
        alert("로그인 후 이용 가능합니다.");
         document.location.href = "/login";
    }else{
        setUserName(sessionStorage.getItem('username'));
    }
  }

  useEffect(()=>{
     AccessPage();
  },[])
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Profile
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  disabled
                  autoComplete="given-name"
                  fullWidth
                  id="username"
                  label={username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value = {email}
                  onChange= {(e) => {
                      setEmail(e.target.value);
                      }
                  }
                />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="city"
                    label="city"
                    type="city"
                    id="city"
                    autoComplete="new-city"
                    value = {city}
                    onChange= {(e) => {
                      setCity(e.target.value);
                      }
                    }
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="street"
                  label="street"
                  type="street"
                  id="street"
                  autoComplete="new-street"
                  value = {street}
                  onChange= {(e) => {
                     setStreet(e.target.value);
                    }
                  }
                />
              </Grid>
              <Grid item xs={12}>
                   <TextField
                     required
                     fullWidth
                     name="zipcode"
                     label="zipcode"
                     type="zipcode"
                     id="zipcode"
                     autoComplete="new-zipcode"
                     value = {zipcode}
                     onChange= {(e) => {
                        setZipcode(e.target.value);
                       }
                     }
                   />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
