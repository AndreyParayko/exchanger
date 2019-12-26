import React, { Fragment } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/'>
          <div className='logo'></div>
        </Link>
      </li>
      <li className='big'>
        <Link to='#'>Exchange rates</Link>
      </li>
      <li className='big'>
        <Link to='/news'>News</Link>
      </li>
      <li className='big'>
        <Link to='/analytycs'>Analytycs</Link>
      </li>
      <li className='small align'>
        <Link onClick={logout} to='/auth'>
          Sign out
        </Link>
      </li>
    </ul>
  );
  const questLinks = (
    <ul>
      <li>
        <Link to='/'>
          <div className='logo'></div>
        </Link>
      </li>
      <li className='big'>
        <Link to='#'>Exchange rates</Link>
      </li>
      <li className='big'>
        <Link to='/news'>News</Link>
      </li>
      <li className='big'>
        <Link to='/analytycs'>Analytycs</Link>
      </li>
      <li className='small align'>
        <Link to='/auth'>Sign in</Link>
      </li>
      <li className='small'>
        <Link to='/register'>Register</Link>
      </li>
    </ul>
  );
  return (
    <div id='header'>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : questLinks}</Fragment>
      )}
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
