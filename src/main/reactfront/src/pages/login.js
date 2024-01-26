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
import { Link } from 'react-router-dom';



const login = () => {
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
           margin ="normal"
           label="Email Address"
           required
           fullWidth
           name="email"
           autoComplete="email"
           autoFocus
           />
          <TextField
           label="Password"
           type="password"
           required
           fullWidth 
           name="password"
           autoComplete="current-password"
           />
           <FormControlLabel
            control={<Checkbox value="remember"
            color="primary" />}
            label="Remember me"
           />
           <Button type="submit" fullWidth variant="contained"
           sx={{ mt:3, mb:2}}>
              Sign in
            </Button>
           <Grid container>
            <Grid item xs>
               <Link>Forgot password?</Link>
            </Grid>
            <Grid item>
               <Link to={'/signup'}>Sign up</Link>
            </Grid>
           </Grid>
        </Box>
      </Container>
    );
  }
  
  export default login;
  