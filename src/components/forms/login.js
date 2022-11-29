import React, { useState }  from 'react'
import AuthuserService from '../../services/authuser.service'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {username, password};
        console.log('Hey', data);

        var authUser = {
            username : username,
            password : password
        };

        AuthuserService.authenticateAuthUser(authUser)
                       .then(response => {
                            this.setState({
                                username : response.authUser.username,
                            password : response.authUser.password
                            });                            
                       })
                        .catch(error => console.log(error));
    }


  return (
      <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Log in to Boomerangfx</h3>
                    <div className="card-text">			
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> 
                        <form>				
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control form-control-sm" 
                                       value={username} onChange={(e) => setUsername(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                {/* <a href="#" style="float:right;font-size:12px;">Forgot password?</a> */}
                                <input type="password" className="form-control form-control-sm" 
                                       value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign in</button>
                            
                            <div className="sign-up">
                                Don't have an account? 
                                {/* <a href="#">Create One</a> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Login
