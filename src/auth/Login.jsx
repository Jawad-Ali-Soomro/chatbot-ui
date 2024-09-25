import { Link } from 'react-router-dom'
import '../styles/login.css'
import { GrGithub, GrGoogle, GrLinkedin, GrTwitter } from 'react-icons/gr'

const Login = () => {
    return (
        <>
            <div className="form-main flex">
                <div className="background flex">
                    <img src="/bg.jpg" alt="" />
                </div>
                <div className="login-form flex">
                    <div className="form-inputs flex col" >
                        <h1>Welcome</h1>
                        <p>Please Login To Continue!</p>
                        <div className="input-wrap flex" style={{ marginTop: '20px' }}>
                            <input type="text" placeholder='Email Address...' />
                        </div>
                        <div className="input-wrap flex">
                            <input type="password" placeholder='Password...' />
                        </div>
                        <Link className='link' to={'/'}>Forgot Password?</Link>
                        <button>Login</button>
                        <div className="text flex">
                            <p>OR</p>
                        </div>
                        <div className="icons flex">
                            <div className="icon flex">
                                <GrGoogle />
                            </div>
                            <div className="icon flex">
                                <GrGithub />
                            </div>
                            <div className="icon flex">
                                <GrLinkedin />
                            </div>
                            <button className="register-btn flex">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login