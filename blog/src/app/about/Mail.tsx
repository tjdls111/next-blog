'use client'

import React, { useState } from 'react';
import styles from './Mail.module.css'
const Mail = () => {
  const [formLoading, setFormLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmission = async (event) => {
    event.preventDefault() // for AJAX form submission, e.g. prevent the page refresh on a form submit
    
    setFormLoading(true) // Show a "loading" status for our form element

    // Retrieve our form data
    const formData = {
      "name": document.getElementById('emailFormName')?.value,
      "email": document.getElementById('emailFormEmail')?.value,
    }

    // Send our data in JSON using the Fetch API
    fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json()) // Transform our returned data into JSON
    .then(data => { 
      if (data) setStatusMessage(data) // Append our message
      setFormLoading(false) // Remove the loading state
    })
    .catch(err => {
      console.error(err)
      setStatusMessage(err.message) // display an error message
      setFormLoading(false)
    })
  }


  
//    async function sendContactEmail(emailForm: any) {
//     // Nextjs app 폴더 내 api로 post 요청
//     const response = await fetch('/api/sendmail', {
//       method: 'POST',
//       body: JSON.stringify(emailForm),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
  
//     const data = await response.json();
  
//     if (!response.ok) {
//       throw new Error(data.message || '서버 요청에 실패함');
//     }
    
//     return data;
//   }
// const emailForm = {
//   email:'test2@ruu.kr',
//   name:'te'
// }
//   const onSubmit = () => {
//     sendContactEmail(emailForm);
//   }

const onSubmit = () => {
  sendContactEmail({
    from: 'from',
    subject: 'string',
    message: 'mes'
  });
}

async function sendContactEmail(emailForm) {
  // Nextjs app 폴더 내 api로 post 요청
  const response = await fetch('/api/sendmail', {
    method: 'POST',
    body: JSON.stringify(emailForm),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함');
  }
  
  return data;
}
return (
  <>
    <div>Mail</div>
    <FormComponent submissionHandler={handleSubmission} styles={styles.form} />
    <div>
      <pre>{statusMessage}</pre>
    </div>
    <button type='button' onClick={onSubmit}>send mail</button>
  </>
);
}

function FormComponent(props) {
  const { submissionHandler, styles } = props
  return (
    <form id="emailForm" className={styles} method='POST' onSubmit={e => submissionHandler(e)}>
      <label>Name</label>
      <input id="emailFormName" name='name' type='text'/>
      <label>Email *(required)</label>
      <input id="emailFormEmail" required name='email' type='email'/>
    </form>
  )
}
export default Mail;