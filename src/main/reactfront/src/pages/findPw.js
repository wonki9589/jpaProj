import React, { useState,useEffect } from 'react';
import API from '../api.js';
import DataTest from './login.js';
import Loading from '../components/Loading';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import KeyIcon from '@mui/icons-material/Key';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';





export default function FindPw() {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [loading, setLoading] = useState(false);



   const handleSubmit = (event) => {
     event.preventDefault();
     if(username == ''){
        alert("이름을 입력해주세요.");
        return false;
     }
     if(email ==''){
        alert("이메일을 입력해주세요.");
        return false;
     }
     setLoading(true);
     API
         .post('/member/send',{
           username : username,
           email: email,
         })
         .then((response) => {
            setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리

            console.log(response);
            if (response.data == true) {
                alert("해당 이메일로 임시 비밀번호를 발송하였으니 임시비밀번호로 로그인해주세요.");
                setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
                //document.location.href = "/login";
            }
         })
         .catch((error) => {
             console.log('error !!!',error.response);
             if(error.response.status == 500){
                alert("일치하는 회원정보가 없습니다.");
                setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
             }
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
           <KeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Find Password
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
           label="email"
           type="email"
           required
           fullWidth 
           name="email"
           autoComplete="current-password"
           onChange= {(e) => {
               setEmail(e.target.value);
                }
           }
           />

           {loading ? <Loading /> : null}

           <Button type="submit" onClick ={handleSubmit} fullWidth variant="contained"
           sx={{ mt:3, mb:2}}>
              Send email
            </Button>
           <Grid container>
             <Grid item >
                <Link href="/login"> login </Link>
             </Grid>
           </Grid>
        </Box>
      </Container>
    );

 }

  