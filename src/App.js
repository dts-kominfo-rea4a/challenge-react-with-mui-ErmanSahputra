import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

import {Card, CardContent, Container, Grid} from '@mui/material';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const handleAddContact = (value) => {
    setContacts([...contacts, value])
  }

  const [contacts, setContacts] = useState(contactsJSON);
  return (
    <div className="App">
      <Header />
      <Container fixed>
      <Grid container>
        <Grid item md={6}>
          <ContactForm fnAddContact={ (value) => handleAddContact(value) }/>
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardContent sx={{backgroundColor: '#DBF6F0'}}>
              {contacts.map((contact, index) => (
                <Contact key={index} data={contact}/>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default App;
