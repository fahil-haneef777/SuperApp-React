import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../../fonts/font.css'
import './Loadpage.css'

import leftimg from '../../asset/left.jpg'

function Loadpage() {
  const navigate = useNavigate();

  let [form, setform] = useState({
    Name: '',
    UserName: '',
    Email: '',
    Mobile: ''
  })




  let [checked, setchecked] = useState()
  let [formerror, setformerror] = useState({})
  let [submit, setsubmit] = useState(false)


  let handlecheck = (e) => {
    setchecked(e.target.checked)

  }

  let handleform = (e) => {

    let { name, value } = e.target
    setform({
      ...form,
      [name]: value,
    })




  }
  let validateform = (value) => {
    let regix = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let test = regix.test(form.Email);
    let error = {};

    // name
    if (!value.Name) {
      error.Name = 'Field is required';
    } else if (value.Name.length < 3 || value.Name.length > 10) {
      error.Name = 'Name should be more than 3 and less than 10  character ';
    }
    // username
    if (!value.UserName) {
      error.UserName = 'Field is required';
    }

    // email
    if (!value.Email) {
      error.Email = 'Field is required';
    } else if (!test) {
      error.Email = 'Enter a valid Email address';
    }

    // mobile
    if (!value.Mobile) {
      error.Mobile = 'Field is required';
    } else if (value.Mobile.length < 10) {
      error.Mobile = "Enter a valid mobile number";
    }

    // checkbox
    if (checked === false) {
      error.ischecked = 'Check this box if you want to proceed!'
    }


    return error;
  }



  let handleSubmit = (e) => {

    e.preventDefault();
    const errors = validateform(form);
    setformerror(errors);
    console.log(formerror);
    if (Object.keys(errors).length === 0) {
      localStorage.setItem('formdata', JSON.stringify(form));
      setsubmit(true);
      console.log(formerror);
      console.log(form);
      navigate('/Category')

    }
  }



  return (
    <>
      <div className="hero">
        {/* leftarea   */}
        <div className='hero-l'>
          <img alt='' src={leftimg} /><br />
          <h1>Discover new things on <br />SuperApp</h1>
        </div>

        {/* rightarea */}
        <div className="hero-r">
          <div className='right-heading'>
            <p>SuperApp</p>
            <p> Create your new account</p>
          </div>

          <div className="input-area">


            {/* form */}
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder='Name'
                name='Name'
                value={form.Name}
                onChange={handleform} />
              <p style={{ color: 'red' }}>{formerror.Name} </p>

              <input type="text"
                placeholder='UserName'
                name='UserName'
                value={form.UserName}
                onChange={handleform} />
              <p style={{ color: 'red' }}>{formerror.UserName}</p>

              <input type="text"
                placeholder='Email'
                name='Email'
                value={form.Email}
                onChange={handleform} />
              <p style={{ color: 'red' }}>{formerror.Email}</p>

              <input type="tel"
                placeholder='Mobile'
                name='Mobile'
                value={form.Mobile}
                onChange={handleform}
              />
              <p style={{ color: 'red' }}>{formerror.Mobile}</p>

              <div className="checkbox">
                <input type="checkbox" id='checkbox' name='ischecked' checked={form.ischecked} onChange={handlecheck} />
                <label htmlFor='checkbox' style={{ color: '#7C7C7C' }}>&nbsp; Share my registration data with Superapp</label>
                <p style={{ color: 'red' }}>{formerror.ischecked}</p>
              </div>
              <button type='submit' >Sign Up</button>
              <div className="bottomhead">
                <p style={{ color: '#7C7C7C', margin: '20px 0 0 0' }}>By clicking on Sign up. you agree to Superapp <span className='green'>Terms and <br />  Conditions of Use</span></p>
                <p style={{ color: '#7C7C7C', margin: '4px 0 0 0' }}>To learn more about how Superapp collects, uses, shares<br /> and protects your personal data please head Superapp <span className='green'>Privacy<br /> Policy</span></p>
              </div>
            </form>




          </div>


        </div>

      </div>
    </>
  )
}

export default Loadpage

