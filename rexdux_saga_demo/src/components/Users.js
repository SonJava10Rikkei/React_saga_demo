import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { act_get_user } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

export default function Users() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const listUser = useSelector(state => state.users);
    useEffect(() => {
        console.log("Step 1: Từ component bắn 1 action");
        dispatch(act_get_user());
    }, []);

    let elementListUser = listUser.map((user, index) => {
        return <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.fullName}</td>
            <td>
                <button>Update</button>
                <button>Delete</button>
            </td>
        </tr>
    })
    return (
        <div>
            <h2>List User</h2>
            <table border={"1"}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Full Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elementListUser}
                </tbody>
            </table>
            <button onClick={() => navigate('/register')}>Create New User</button>
        </div>
    )
}
