import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.confiq';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { UserContext } from '../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const GoogleSing = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSingIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { email, displayName } = result.user;
                const singUser = { email, name: displayName };
                setLoggedInUser(singUser);
            })
    }
    return (
        <div>
            <Button
                onClick={handleSingIn}
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircleIcon />}
            >
                Continue with Google
      </Button>
        </div>
    );
};

export default GoogleSing;