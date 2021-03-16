
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const useForm = (initialState = {}, onSubmit) => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(formData);
    }

    return { formData, handleInputChange, handleSubmit };
}

const  Login = () => {
    const { formData, handleInputChange, handleSubmit } = useForm(
        {
            username: "",
            password: "",
        },
        (formData) => console.dir(formData)
    );

    const { username, password } = formData;

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login