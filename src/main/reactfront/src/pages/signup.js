import React, { useState } from 'react';
import API from '../api.js'
import { useNavigate } from 'react-router-dom';
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
  const navigate = { useNavigate};
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
//    const data = new FormData(event.currentTarget);
    /*
        인풋 데이터 콘솔로 찍는 곳
        서버로 보내야 할 데이터들
    */
    API
    .post('/member/new',{
      name : name,
      email: email,
      password: password,
      city : city,
      street : street,
      zipcode : zipcode
    })
    .then((response) => {
        console.log({
              name : name,
              email: email,
              password: password,
              city : city,
              street : street,
              zipcode : zipcode
        });
        console.log(' success!!!',response.data );
//        navigate('/');
    })
    .catch((error) => {
        console.log('error !!!',error.response);
    })

  };

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
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  autoFocus
                  value = {name}
                  onChange= {(e) => {
                        setName(e.target.value);
                    }
                  }
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value = {password}
                  onChange= {(e) => {
                      setPassword(e.target.value);
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
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
                <Link href="/api/login" variant="body2">
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
