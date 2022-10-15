
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';
import { async } from "@firebase/util";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [passward,setPasswoed] = useState('');
    const [error,setError] = useState('');
    
    const navigate = useNavigate();

    const logIn = async() => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, passward);
            navigate('/articles')
        }catch (e) {
            console.log(e.message);
        }
    }


    return (
        <>
        <h1>Log In</h1>
        {error && <p className="error">{error}</p>}
        <input placeholder="User emil" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password"  placeholder="Password" onChange={e => setPasswoed(e.target.value)}/>
        <button onClick={logIn}>Sign In</button>
        <Link to="/create-account" >Dont have an account? Createa One Here.</Link>
        </>
    )
}
export default LoginPage;