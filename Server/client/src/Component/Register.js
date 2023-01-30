import { React, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'


const Register = () => {

  const [user, setUser] = useState({
    fullname: '', username: '', email: '', pass: '', cpass: ''
  })

  const [message, setMessage] = useState(' ')

  let keyname, valuename;
  const handleInputs = (e) => {
    console.log(user)
    keyname = e.target.name
    valuename = e.target.value

    setUser({ ...user, [keyname]: valuename })

  }

  const postData = async (e) => {
    e.preventDefault()
    console.log("Register CLicked")
    

    const res = await fetch("/register", {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        'username': user.username,
        'fullname': user.fullname,
        'email': user.email,
        'password': user.pass,
        'cpassword': user.cpass
      })
    })

    const data = await res.json()
    if (res.status === 422 || !data) {
      setMessage("*" + data.error)
    }
    else if (res.status === 201 || res.status === 500) {
      setMessage("*"+ data.message)
    }

  }


  return (
    <form method='POST'>
      <div className='shadow mx-auto mt-5 p-5' style={{ width: "50%" }}>

        <h4 className='mx-auto my-2'> Sign Up </h4>

        <div className="row"  >
          < div className="col">
            <input type="text" name="username" value={user.username} onChange={handleInputs} className="form-control mx-auto my-3" placeholder="Username" />
          </div>
          <div className="col">
            <input type="text" name="fullname" value={user.fullname} onChange={handleInputs} className="form-control mx-auto my-3" placeholder="Full Name" />
          </div>
        </div>

        <div className="row"  >

          <div className="col">
            <input type="text" name="email" value={user.email} onChange={handleInputs} className="form-control mx-auto my-3" placeholder="Email" />
          </div>
          
          <div className="col">
            <input type="text" name="randmo"   className="form-control mx-auto my-3" placeholder="Random field for symmetry" />
          </div>

        </div>
        <div className="row"  >
          <div className="col">
            <input type="text" name="pass" value={user.pass} onChange={handleInputs} className="form-control mx-auto my-3" placeholder="Password" required />
          </div>
          <div className="col">
            <input type="text" name="cpass" value={user.cpass} onChange={handleInputs} className="form-control mx-auto my-3" placeholder="Confirm Password" />
          </div>
        </div>

        

        <div className="row"  >
          <div className="col">
            <button type="button" class="btn btn-primary mx-auto my-3" onClick={postData}>Register</button>
          </div>
          <div className="col">
            <NavLink className="nav-link my-3 " to="/login"> <u> I have an account </u></NavLink>
          </div>
        </div>

        <p className='message'>{message}</p>

      </div>
    </form>
  )
}

export default Register