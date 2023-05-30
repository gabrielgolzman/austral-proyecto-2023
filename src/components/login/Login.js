import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h4>¡Bienvenidos a Book Champions!</h4>
        <div className="input-container">
          <input className="input-control" placeholder="Email" type="email" />
        </div>
        <div className="input-container">
          <input
            className="input-control"
            placeholder="Password"
            type="password"
          />
        </div>
        <button className="signin-button" type="button">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
