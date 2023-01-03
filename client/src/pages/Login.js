import React from 'react'
import '../styles/Registerstyles.css'
import{ Form } from 'antd'
import {Link} from 'react-router-dom'


const Login = () => {
  const onFinishHandler=(values)=>{
    console.log(values)
  }


  return (
    <div className="form-container ">
      <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
        <h3 className="text-center">Login Form</h3>
        
        <Form.Item label='Email' name='email'>
          <input type='email' required />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <input type='password' required />
        </Form.Item>
        <Link to='/register' className="">Not a user Register here</Link>
       <button className="btn btn-primary" type="submit">Login</button>
      </Form>
      </div>
  )
}

export default Login