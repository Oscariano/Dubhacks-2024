import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { setUserId } from '../../../Login/Login';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await createUserCollection(userCredential.user.uid);
            setUserId(auth.currentUser.uid);
            navigate('/capsulecollection');
        } catch (error) {
            setError(error.message);
        }
    };

    const createUserCollection = async (userId) => {
        const db = getFirestore();
        try {
            await setDoc(doc(db, 'users', userId), {
                email: email,
                capsules: [],
            });
        } catch (error) {
            console.error('Error creating user collection:', error);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
