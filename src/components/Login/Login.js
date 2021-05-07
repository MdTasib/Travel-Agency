import React, { useState, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.confiq';
import style from './login.module.css';
import GoogleSing from './GoogleSing';
import FacebookLogin from './FacebookLogin';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const From = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // handle form submit
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(result => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                })
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(result => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                })
        }
        e.preventDefault();
    }

    // handle form validation
    const handleBlur = e => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    return (
        <div className={`${style.form} text-center pt-5 w-50 m-auto`}>
            <input className="form-check-input" type="checkbox" name="checkbok" onChange={() => setNewUser(!newUser)} />
            <label className="form-check-label" htmlFor="newUser">New User Sing Up</label>
            <form onSubmit={handleSubmit}>
                {newUser && <input className='form-control' name='name' onBlur={handleBlur} type="text" placeholder='User Name' required />}<br />
                <input className='form-control' name='email' onBlur={handleBlur} type="text" placeholder='Your Email' required /><br />
                <input className='form-control' name='password' onBlur={handleBlur} type="password" placeholder='Your Password' required /><br />
                <input className='btn btn-outline-primary' type="submit" value={newUser ? 'Create An Account' : 'Log In'} />
            </form>
            {
                user.success ?
                    <p className='text-success'>User {newUser ? 'Created' : 'Loged In'} Successfully.</p>
                    :
                    <p className='text-danger'>{user.error}</p>
            }
            <div className='p-3'>
                <span>--------------</span><b className='p-3'>Or</b><span>--------------</span>
            </div>
            <GoogleSing />
            <FacebookLogin />
        </div>
    );
};

export default From;