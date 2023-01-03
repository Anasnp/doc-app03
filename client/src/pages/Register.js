
import React from "react"
import '../styles/Registerstyles.css'
import{ Form } from 'antd'
import {Link} from 'react-router-dom'
 
const Register = () => {
  
  const onFinishHandler=(values)=>{
    console.log(values)
  }
  return (
    <>
    <div className="form-container ">
      <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
        <h3 className="text-center">Register Form</h3>
        <Form.Item label='Name' name='name'>
          <input type='text' required />
        </Form.Item>
        <Form.Item label='Email' name='email'>
          <input type='email' required />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <input type='password' required />
        </Form.Item>
        <Link to='/login' className="">Already user Login here</Link>
       <button className="btn btn-primary" type="submit">Register</button>
      </Form>

    </div>

    </>
  )
}

export default Register