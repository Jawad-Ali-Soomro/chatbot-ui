import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { GrGithub, GrGoogle, GrLinkedin, GrTwitter } from "react-icons/gr";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="form-main flex">
        <div className="background flex">
          <img src="/bg.jpg" alt="" />
        </div>
        <div className="login-form flex">
          <div className="form-inputs flex col">
            <h1>Join Us!</h1>
            <p>Please Register To Continue!</p>
            <div className="input-wrap flex" style={{ marginTop: "20px" }}>
              <input type="text" placeholder="Username..." />
            </div>
            <div className="input-wrap flex">
              <input type="text" placeholder="Email Address..." />
            </div>
            <div className="input-wrap flex">
              <input type="password" placeholder="Password..." />
            </div>

            <button>Register</button>
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
              <button
                className="register-btn flex"
                onClick={() => navigate("/")}
              >
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
