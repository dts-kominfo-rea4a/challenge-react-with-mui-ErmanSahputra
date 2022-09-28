// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    TextField,
    FormControl,
} from '@mui/material';
// import Contact from './Contact';
// import contactsJSON from '../data/contacts.json';
const ContactForm = ({fnAddContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const initialState = {
        name:'',
        phone:'',
        email:'',
        photo:'',
    };

    const [newContact, setNewContact] = useState(initialState);

    const handleChange = (name, value) => {
        setNewContact({...newContact, [name] : value})
    }

    const hendleSubmit = (e) => {
        e.preventDefault();
        fnAddContact(newContact);
        setNewContact(initialState)
    }

    return (
        <>
        <Card
          sx={{ maxWidth: 500, margin: 'auto', backgroundColor: '#f0f0f0' }}
        >
          <form onSubmit={hendleSubmit}>
            <CardContent>
              <FormControl fullWidth margin='normal'>
                <TextField
                  required
                  id='outlined-required'
                  label='Name'
                  name='name'
                  value={newContact.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth margin='normal'>
                <TextField
                  required
                  id='outlined-required'
                  label='Phone'
                  name='phone'
                  value={newContact.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth margin='normal'>
                <TextField
                  required
                  id='outlined-required'
                  label='Email'
                  name='email'
                  value={newContact.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth margin='normal'>
                <TextField
                  required
                  id='outlined-required'
                  label='Photo Url'
                  name='photo'
                  value={newContact.photo}
                  onChange={(e) => handleChange('photo', e.target.value)}
                />
              </FormControl>
            </CardContent>
            <CardActions>
              <Button size='small' type="submit" color="success" variant="outlined">ADD NEW</Button>
            </CardActions>
          </form>
        </Card>
      </>
    );
}

export default ContactForm;
