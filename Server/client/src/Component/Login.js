import { React, useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuthLogin';

const Login = () => {
  const navigate = useNavigate();
  const {auth, setAuth} = useAuth();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [message, setMessage] = useState(' ')

  const postData = async (e) => {
    e.preventDefault()
    //console.log("Register CLicked")

    const res = await fetch("/login", {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        'email': email,
        'password': password,

      })
    })
    const data = await res.json()
    if (res.status === 422 || !data) {
      setMessage("*" + data.error)
    }
    else if (res.status === 200) {
      setMessage("*" + data.message)
      setAuth(true);
      navigate('/profile')
    }
  }

  return (
    <>
      <form method='POST'>
        <div className='shadow mx-auto mt-5 p-5' style={{ width: "50%" }}>

          <h4 className='mx-auto my-2'> Sign In </h4>

          <div className="row"  >
            <div className="col">
              <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mx-auto my-3" placeholder="Email" />
            </div>
            <div className="col">
              <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mx-auto my-3" placeholder="Password" />
            </div>
          </div>


          

          <div className="row"  >
            <div className="col-md-4">
              <button type="button" class="btn btn-primary mx-auto my-3" onClick={postData}>Login</button>
            </div>
            <div className="col mb-4">
              <NavLink className="nav-link my-3 " to="/passwordreset"><u> Forgot Password </u></NavLink>
            </div>
            <div className="col mb-4">
              <NavLink className="nav-link my-3 " to="/Register"><u> I don't have an account </u></NavLink>
            </div>
          </div>
          <p className='message'>{message}</p>


        </div>
      </form>
    </>
  )
}

export default Login