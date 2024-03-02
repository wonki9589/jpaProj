import React, { useState,useEffect } from 'react';
import API from '../api.js';
import DataTest from './login.js';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';




export default function Login() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const [storageName, setStorageName] = useState('');
   const [remember, setRemember] = useState(false);

   const handleSubmit = (event) => {
     event.preventDefault();

     API
         .post('/login',{
           username : username,
           password: password,

         })
         .then((response) => {
            if (response.status === 200) {
                       sessionStorage.setItem('login-token', response.headers.authorization);
                       sessionStorage.setItem('username',username);
                       sessionStorage.setItem('RULE',response.headers.rule);
                       console.log(response);
                }
             document.location.href = "/";
             }

         )
         .catch((error) => {
             console.log('error !!!',error.response);
         })

    };

    return (
       <Container component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <TextField
           label="username"
           margin ="normal"
           required
           fullWidth
           name="username"
           autoComplete="username"
           autoFocus
           onChange= {(e) => {
                   setUsername(e.target.value);
                }
           }
           />
          <TextField
           label="password"
           type="password"
           required
           fullWidth 
           name="password"
           autoComplete="current-password"
           onChange= {(e) => {
               setPassword(e.target.value);
                }
           }
           />

           <Button type="submit" onClick ={handleSubmit} fullWidth variant="contained"
           sx={{ mt:3, mb:2}}>
              Sign in
            </Button>
           <Grid container>
                <Grid item xs>
                   <Link href="/findPw">Forgot password?</Link>
                </Grid>
            <Grid item>
                 <Link href="/signup" variant="body2"> Sign up</Link>
            </Grid>
           </Grid>
        </Box>
      </Container>
    );

 }

  