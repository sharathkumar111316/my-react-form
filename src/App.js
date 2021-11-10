import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [values,setValues] = useState({
            firstName: "",
            lastName: "",
            eMail: "",
          });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName &&  values.lastName &&  values.eMail) {
        setValid(true);
    }
    setSubmitted(true);
  }

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, eMail: event.target.value})
  }

  return (
    <div class='form-container'>
          <form class='register-form' onSubmit={handleSubmit}>
          {submitted  && valid ? <div className='success-message'>Success! Thankyou for registering.</div> : null}          
          <input 
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            id='first-name'
            class='form-field'
            type='text'
            placeholder='First Name'
            name='firstName'
          />
          {submitted && !values.firstName ? <span>please enter the First Name</span> : null}
          
          <input 
            onChange={handleLastNameInputChange}
            value={values.lastName}
            id='last-name'
            class='form-field'
            type='text'
            placeholder='Last Name'
            name='lastName'
          />
          {submitted && !values.lastName ? <span>please enter the Last Name</span> : null}
          
          <input
            onChange={handleEmailInputChange}
            value={values.eMail} 
            id='email'
            class='form-field'
            type='text'
            placeholder='Email'
            name='eMail'
          />
          {submitted && !values.eMail ? <span>please enter the Email</span> : null}
          
          <button class='form-field' type='submit'>Register</button>
          </form>
    </div>
  );
}


