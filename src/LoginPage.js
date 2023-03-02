import { useNavigate,Link } from 'react-router-dom'
import React  from 'react'
import axios from 'axios';
import { useFormik } from 'formik';


function Login () {
  const navigate=useNavigate();
  const formik= useFormik({
      initialValues : {
          email : "",
          password : ""
      },
      onSubmit : async (values) => {
          try{
              const login = await axios.get("https://social-media-management-tool-backend.onrender.com/login/user-login",values) 
              window.localStorage.setItem("token",JSON.stringify(login.data.token))
              console.log(login.data.token);
              navigate("/")
          }catch(error){
              alert("Login Failed");
              console.log(error);
          }
      }
   })
return (

  <div className="LPage">
    <div className="LoginPage">
    <form onSubmit={formik.handleSubmit}>
          <div className="row">
              <div className="col-lg-12">
                  <button 
                      onClick={() =>{
                          window.localStorage.removeItem("token"); 
                          navigate("/")
                      }}
                       className="btn btn-danger btn-sm">
                      Log Out
                  </button>
              </div>
              <br></br>
              <div className="col-lg-12">
                  <label>Email</label>
                  <input type={"email"} 
                  className="form-control"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}/>
              </div>
              <br></br>
              <div className="col-lg-12">
                  <label>Password</label>
                  <input type={"password"} 
                  name="password"
                  className="form-control"
                  value={formik.values.password}
                  onChange={formik.handleChange}/>
              </div>
              <br></br>
              <div className="col-lg-12 mt-2">
                  <input type={"submit"} value="Login" className="btn btn-primary"/>
              </div>
          </div>
          <Link to="/register" id="register"><p>Register?</p></Link>
      </form>
    </div>
      
  </div>
)
}

export default Login
