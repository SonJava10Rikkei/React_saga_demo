import React, { useState } from 'react';
import { act_post_user } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCreate = () => {
        dispatch(act_post_user({ email, password, fullName }));
        navigate('/');
    }
    return (
        <div>
            <h2>Registration</h2>
            <label htmlFor='email'>Email</label>
            <input type={'text'} name='email' id='email' onChange={(e) => setEmail(e.target.value)} /><br />
            <label htmlFor='password'>Password</label>
            <input type={'password'} name='password' id='password' onChange={(e) => setPassword(e.target.value)} /><br />
            <label htmlFor='fullName'>Full Name</label>
            <input type={'text'} name='fullName' id='fullName' onChange={(e) => setFullName(e.target.value)} /><br />
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}
