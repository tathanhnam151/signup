import React, { useState} from 'react';
import './SignupForm.css';
import Validation from './Validation';

const SignupForm = () => {
    
    const [values, setValues] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.name
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    };
    
    return (
        <div className='container'>
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Tạo tài khoản</h2>
                </div>
                <form className="form-wrapper">
                    <div className="fullname">
                        <label className="label">Họ và Tên</label>
                        <input 
                            className="input" 
                            type="text" 
                            name="fullname"
                            value={values.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <p className="error">{errors.fullName}</p>}
                    </div>
                    <div className="username">
                    <label className="label">Username</label>
                        <input 
                            className="input" 
                            type="username" 
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="email">
                    <label className="label">Email</label>
                        <input 
                            className="input" 
                            type="email" 
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                    <label className="label">Mật khẩu</label>
                        <input 
                            className="input" 
                            type="password" 
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className='submit' onClick={handleFormSubmit}>Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
