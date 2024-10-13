import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, doc, arrayUnion, getDocs, collection } from 'firebase/firestore';
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
            await gatherCapsules(userCredential.user.email);
            setUserId(auth.currentUser.uid);
            navigate('/capsulecollection');
        } catch (error) {
            setError(error.message);
        }
    };

    // Searches the capsules collection for the user's email (given in email) in the bees array and adds the capsule to the user's capsules array
    const gatherCapsules = async (email) => {
        const db = getFirestore();
        const capsulesRef = collection(db, 'capsules');
        const capsulesSnap = await getDocs(capsulesRef);
        if (!capsulesSnap.empty) {
            for (const capsuleDoc of capsulesSnap.docs) {
                const capsuleData = capsuleDoc.data();
                if (capsuleData.bees && capsuleData.bees.includes(email)) {
                    const userRef = doc(db, 'users', getAuth().currentUser.uid);
                    await setDoc(userRef, {
                        capsules: arrayUnion(capsuleDoc.id),
                    }, { merge: true });
                    console.log(`Added capsule ${capsuleDoc.id} to user ${getAuth().currentUser.uid}`);
                }
            }
        } else {
            console.error('No capsules found!');
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
