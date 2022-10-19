import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import ComponentGrid from './ComponentGrid';

const https = require('https');




function App() {
  const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));
  
  https.get('https://reddit.com', res => {
    let data = [];
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);
  
    res.on('data', chunk => {
      data.push(chunk);
    });
  
    res.on('end', () => {
      console.log('Response ended: ');
      const users = JSON.parse(Buffer.concat(data).toString());
  
      for(const user of users) {
        console.log(`Got user with id: ${user.id}, name: ${user.name}`);
      }
    });
  }).on('error', err => {
    console.log('Error: ', err.message);
  });


  return (
    <ComponentGrid /> 
  );


}

export default App;

