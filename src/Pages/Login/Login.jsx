const Login = () => {
  return (
    <div className="auth-container">
      <h2 className="center-text">Login</h2>
      <form action="">
        <div className="input-group">
          <label htmlFor="username">Email address</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            className="textfield"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div className="signup-group">
        <a href="./signup.html" className="signup-link">
          Create New Account
        </a>
        <span className="material-icons-outlined">navigate_next</span>
      </div>
    </div>
  );
};

export default Login;
