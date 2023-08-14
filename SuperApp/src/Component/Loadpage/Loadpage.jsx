import React, { useState, useEffect } from 'react'
import '../../fonts/font.css'
import './Loadpage.css'

import leftimg from '../../asset/left.jpg'

function Loadpage() {

  let [form, setform] = useState({
    Name: '',
    UserName: '',
    Email: '',
    Mobile: ''
  })

  let [formerror, setformerror] = useState({})
  let [submit, setsubmit] = useState(false)

  let handleform = (e) => {

    let { name, value } = e.target
    setform({
      ...form,
      [name]: value
    })


  }
  let validateform = (value) => {
    let error = {}
    if (!value.Name) {
      error.Name = 'Field is required';
    }
    if (!value.UserName) {
      error.UserName = 'Field is required';
    }
    if (!value.Email) {
      error.Email = 'Field is required';
    }
    if (!value.Mobile) {
      error.Mobile = 'Field is required';
    }
    return error;

  }

  let handleSubmit = (e) => {
    e.preventDefault();
    setformerror(validateform(form));
    setsubmit(true);
  }

  useEffect(() => {
    console.log(formerror)
    if (Object.keys(formerror).length === 0 && submit) {
      console.log(form)
    }
  }, [formerror])

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
              <p style={{ color: 'red' }}>{formerror.Name}</p>

              <input type="text"
                placeholder='UserName'
                name='UserName'
                value={form.UserName}
                onChange={handleform} />
              <p style={{ color: 'red' }}>{formerror.UserName}</p>

              <input type="email"
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
                <input type="checkbox" id='checkbox' />
                <label htmlFor='checkbox' style={{ color: '#7C7C7C' }}>&nbsp; Share my registration data with Superapp</label>
                <p></p>
              </div>
              <button type='submit'>Sign Up</button>
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

{/* <div className="hero-r">
          <p>SuperApp</p>
          <p> Create your new account</p>
          <div className="inputForm">



            <form onSubmit={Validateform}>
              <input type='text' name='Name' value={form.Name} onChange={handleform} placeholder='Name' />
              <p></p>
              <input type='text' name='UserName' value={form.UserName} onChange={handleform} placeholder='UserName' />
              <p></p>
              <input type='email' name='Email' value={form.Email} onChange={handleform} placeholder='Email' />
              <p></p>
              <input type='tel' name='Mobile' value={form.Mobile} onChange={handleform} placeholder='Mobile' />
              <p></p>
              <div className='checkbox'>

                <input type='checkbox' id='checkbox' />
                <label htmlFor='checkbox'>&nbsp; Share my registration data with Superapp</label>

              </div>
              <button type='submit'>Sign Up</button>

              <p style={{ color: '#7C7C7C' }}>By clicking on Sign up. you agree to Superapp <span style={{ color: ' #72DB73' }}>Terms and<br />  Conditionsof Use</span></p>
              <p style={{ color: '#7C7C7C', }}>To learn more about how Superapp collects, uses, shares<br /> and protects your personal data please head Superapp<br /> <span style={{ color: ' #72DB73' }}>Privacy Policy</span></p>


            </form>
          </div>









        </div> */}