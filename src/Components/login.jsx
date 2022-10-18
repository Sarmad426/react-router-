import React from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    props.setUser({ name, email });
    navigate("/dashboard");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login to Your Account</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleName}
        required
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmail}
        required
      />
      <button className="btn submit">Login</button>
    </form>
  );
};
export default Login;
