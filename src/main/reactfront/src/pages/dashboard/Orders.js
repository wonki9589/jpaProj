import React, { useState , useEffect } from 'react';
import Title from './Title';
import API from '../../api.js';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
    // usestate
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [orders, setOrders] = useState('');
    const [array, setArray] = useState([]);

    function GetMembers() {

          API
          .get('/admin/members',{
            id : id,
            username : username,
            email: email,
            address: address,
            orders : orders
          })
          .then((response) => {
              console.log(response.data);
              setArray(response.data);
          })
          .catch((error) => {
            console.log(error.data);

          })

    }

     useEffect(()=>{
        GetMembers()
     },[])
  return (
    
    <React.Fragment>
      <Title>Members</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Street</TableCell>
            <TableCell>Zipcode</TableCell>
            <TableCell>Order</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((a,index) => (
            <TableRow key={index}>
              <TableCell>{a.username}</TableCell>
              <TableCell>{a.email}</TableCell>
              <TableCell>{a.address.city}</TableCell>
              <TableCell>{a.address.street}</TableCell>
              <TableCell>{a.address.zipcode}</TableCell>
              <TableCell>{a.orders}</TableCell> 
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
 
    </React.Fragment>
  );
}
