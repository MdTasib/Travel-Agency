import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.confiq';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const FacebookLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLogIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const loginUser = { name: displayName, email };
                setLoggedInUser(loginUser);
            })
    }

    return (
        <div className='p-3'>
            <Button
                onClick={handleLogIn}
                variant="outlined"
                color="primary"
                startIcon={<FacebookIcon />}
            >
                Continue with Google
      </Button>
        </div>
    );
};

export default FacebookLogin;