import React, { useContext, useEffect, useState } from 'react';

//services
import Api from '../../services/Api';

//hooks
import { useSignUpForm } from '../../Hooks/Hooks';

//styles
import './Form.scss';

//components
import Input from '../Input/Input';
import Button from '../Button/Button';

import { AppContext } from '../../appContext';

function Form({ formTitle, autoComplete, clase }) {

  const {
    state: { guestUsers },
    dispatch,
  } = useContext(AppContext);
  const [err, setErr] = useState(null);

  useEffect(() => {
    Api.getUsers()
      .then(data => {
        dispatch({ type: 'setGuestUsers', data });
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
      const timer = window.setInterval(() => {
          setErr(null)
      }, 2500);
      return () => {
          window.clearInterval(timer);
      };
  }, [err]);

  const login = () => {
    const isValidData = validateInputs();
    if (isValidData) {
      const userExists = guestUsers.find(users => {
        return Object.values(users).find(user => user.email === inputs.email)
      });
      if (!userExists) {
        Api.setUser(inputs).then(data => {
          dispatch({ type: 'setGuestUsers', data });
          dispatch({ type: 'singin' });
        })
          .catch(err => {
              setErr(err);
          });
      } else {
        dispatch({
          type: 'setGuestUser',
          data: inputs,
        });
        dispatch({
          type: 'singin',
        });
      }
    }
  };

  const validateInputs = () => {
    let validated = false;
    if (typeof firstName === "undefined" || firstName.trim() === '') {
        setErr('Complete su nombre');
    } else if (typeof lastName === "undefined" || lastName.trim() === '') {
        setErr('Complete su apellido');
    } else if (typeof email === "undefined" || email.trim() === '' || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        setErr('Email invalido');
    } else {
      validated = true;
        setErr(null);
    }
    return validated;
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(login);
  const { firstName, lastName, email } = inputs;

  return (
    <div className='container'>
      <form
        onSubmit={handleSubmit}
        autoComplete={autoComplete ? autoComplete : 'off'}
        className={clase ? clase : 'form-container'}
      >
        <h1 className="form-title">{formTitle}</h1>
        <Input
          name="firstName"
          placeholder="Firts Name"
          onChange={handleInputChange}
          value={firstName}
          clase='form-input'
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          onChange={handleInputChange}
          value={lastName}
          clase='form-input'
        />
        <Input
          type="email"
          name="email"
          placeholder="Email@domain.com"
          onChange={handleInputChange}
          value={email}
          clase='form-input'
        />
        <Button
          text="Login"
          type="submit"
          onClick={handleSubmit}
          clase='form-button'
        />
          <div className='form-msg'>{err}</div>
      </form>

    </div>
  );
}

export default Form;
