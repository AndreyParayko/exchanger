import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import './register.scss';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    surname: '',
    info: '',
    login: ''
  });

  const { name, surname, info, login, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords not match', 'danger');
    } else {
      register({ name, email, password, surname, login, info });
    }
  };
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <Fragment>
      <form className='register' onSubmit={e => onSubmit(e)}>
        <div className='inputs'>
          <span className='registerText'>Register</span>
          <br></br>
          <input
            type='text'
            size='40'
            placeholder=' Name:'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          ></input>
          <input
            type='text'
            size='40'
            placeholder=' Surname:'
            name='surname'
            value={surname}
            onChange={e => onChange(e)}
          ></input>
          <input
            type='text'
            size='40'
            placeholder=' Login: '
            name='login'
            value={login}
            onChange={e => onChange(e)}
          ></input>
          <input
            size='40'
            type='email'
            placeholder=' Email:'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          ></input>
          <input
            size='40'
            type='password'
            placeholder=' Password:'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          ></input>
          <input
            size='40'
            type='password'
            placeholder=' Confirm Password:'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
            minLength='6'
          ></input>
          <input
            type='text-area'
            size='82'
            placeholder='  Other (Skype, Telegram, Facebook, Instagram, Etc): '
            name='info'
            value={info}
            onChange={e => onChange(e)}
          ></input>
          <input id='okButton' type='submit' value='ок'></input>
        </div>
      </form>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
