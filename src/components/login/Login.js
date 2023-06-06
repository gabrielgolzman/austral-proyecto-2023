import { useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";

const Login = ({ loginHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const changeEmailHandler = (event) => {
    if (event.target.value === "") {
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
    } else {
      emailRef.current.style.borderColor = "";
      emailRef.current.style.outline = "";
    }
    setEmail(event.target.value);
  };

  const changePasswordHandler = (event) => {
    if (event.target.value === "") {
      passwordRef.current.style.borderColor = "red";
      passwordRef.current.style.outline = "none";
    } else {
      passwordRef.current.style.borderColor = "";
      passwordRef.current.style.outline = "";
    }
    setPassword(event.target.value);
  };

  const signInHandler = () => {
    setRegister(true);
    if (email === "") {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      emailRef.current.style.outline = "none";
      return;
    }

    if (password === "") {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "orange";
      passwordRef.current.style.outline = "none";
      return;
    }

    loginHandler();
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h4>¡Bienvenidos a Book Champions!</h4>
        <div className="input-container">
          <input
            className="input-control"
            placeholder="Email"
            type="email"
            ref={emailRef}
            value={email}
            onChange={changeEmailHandler}
          />
        </div>
        {register && email === "" && <p>Email esta vacío</p>}
        <div className="input-container">
          <input
            className="input-control"
            placeholder="Password"
            type="password"
            ref={passwordRef}
            value={password}
            onChange={changePasswordHandler}
          />
        </div>
        {register && password === "" && <p>Password está vacío</p>}
        <button className="signin-button" type="button" onClick={signInHandler}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
