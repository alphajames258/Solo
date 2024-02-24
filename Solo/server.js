const express = require('express')
const fetch = require('node-fetch');




const app = express()
app.use(express.json())

// app.get('/api',  (req, res) => {
//    res.send('hello')
// })
app.post( '/',  (req, res) => {
const {companyName, Summary, Question} = req.body;
console.log(req.params, 'req.params')
console.log(req.body, 'req.body')

const API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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';
    fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    model: 'gpt-3.5-turbo-0125',
    messages: [
      {
        role: 'user',
        content: companyName
      },
      {
        role: 'user',
        content: Summary
      },
      {
        role: 'user',
        content: Question
      },
    ],
  }),
})
  .then(response => {
      console.log(response, 'response')
  
    return response.json();
  })
  .then(data => {
      console.log(data)
    const generatedResponse = data.message;
    res.send( {generatedResponse} );
  })


      



})




app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
    console.log('hello');
});