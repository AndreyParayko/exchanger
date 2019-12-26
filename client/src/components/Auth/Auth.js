import React, { useState } from 'react';
import './auth.scss';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Auth = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <div id='auth'>
      <div id='formAuth'>
        <div id='margin'></div>
        <form onSubmit={e => onSubmit(e)}>
          <input
            type='text'
            className='authField'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            placeholder='Email: '
          />
          <input
            type='password'
            className='authField'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            placeholder='Password: '
          />
          <br />
          <div id='buttons'>
            <input type='submit' value='ОК' className='authBut Ok' />
            <button className='authBut Canc'>CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
};
login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Auth);
