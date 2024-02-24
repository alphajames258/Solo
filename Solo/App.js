import React from 'react';
import { useState } from 'react';

import CompanyInput from './components/companyInput';
import ResumeInput from './components/resumeInput';
import QuestionInput from './components/questioninput';
import DescriptionInput from './components/description';
import Button from './components/button';

const API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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';

function App() {
  const [input1, setinput1] = useState('');
  // console.log(input1, 'input1');

  // const [input3, setinput3] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [Summary, setSummaryName] = useState('');
  const [Question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  // let count = 3
  const [sentences, setSentences] = useState(1);

  const addOne = () => {
    setSentences(sentences + 1);
    console.log(sentences, 'sentences');
  };

  const deleteOne = () => {
    setSentences(sentences - 1);
  };

  const reset = () => {
    setSentences(1);
  };

  const handleInputChange = (event) => {
    setCompanyName(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setSummaryName(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setQuestion(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setDescription(event.target.value);
  };
  // console.log(Summary, 'summary');
  // console.log(companyName, 'company');
  // console.log(Question, 'Question');
  // console.log(description);

  const resetOnClick = () => {
    setCompanyName('');
    setSummaryName('');
    setQuestion('');
    setDescription('');
    setinput1('');
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo-0125',
        messages: [
       
          {
            role: 'user',
            content: 'The company i am applying for is' + ' ' + companyName,
          },
          {
            role: 'user',
            content: 'Here is the job description' + ' ' + description,
          },
          {
            role: 'user',
            content: 'my resume is' + ' ' + Summary,
          },
          {
            role: 'user',
            content: `Separate each question and Answer each question in ${sentences} sentences with technical communication based on all information given ${Question}`,
          },
          {
            role: 'user',
            content:
              'Has to be software engineer related'
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setinput1(data.choices[0].message.content);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <img
        className="image1"
        src="https://media.licdn.com/dms/image/C4D12AQFqbsg_8L4xEg/article-cover_image-shrink_600_2000/0/1589201852487?e=2147483647&v=beta&t=wPQf6GWGECrscegjj38IF2bA1JfiOdsJnUZs0Ay5_wI"
      ></img>
      <img
        className="image2"
        src="https://www.multilingualjobsworldwide.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL2kvRXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8c7563442e9d8ad54f76e48b75b23a6938ec4c52/1580271660-Job-Search-Cartoon-1580271660.jpg"
      ></img>
      <div className="header">
        <h1>Welcome to SWE Application Generator</h1>
        <span>
          Tired of writing many application questions that you already explained
          in your resume,
          <br /> We have SWE Application Generator. Allowing you to generate
          answers based on the company,
          <br /> job description, the resume you give me and the questions you
          want answers.
          <br /> Good luck JOB hunting
        </span>
      </div>
      <div className="middle">
        <section className="All">
          <form>
            <CompanyInput handleInputChange={handleInputChange} />
            <DescriptionInput handleInputChange={handleInputChange4} />
            <ResumeInput handleInputChange={handleInputChange2} />
            <QuestionInput handleInputChange={handleInputChange3} />
            <div className="buttons">
              <Button onClick={handleButtonClick} />

              <input
                className="reset"
                onClick={resetOnClick}
                type="reset"
                value="reset form"
              />
            </div>
          </form>
        </section>
        <textarea className="comment-area" value={input1} readOnly />
        <div>
          <h1>Count: {sentences}</h1>
          <button onClick={addOne}>+1</button>
          <button onClick={deleteOne}>-1</button>
          <button onClick={reset}>Reset</button>
        </div>
        );
      </div>
    </div>
  );
}

export default App;
