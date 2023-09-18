import LoginForm from "../components/LoginForm";
import '../styles.css'; // Import the CSS

export default function LoginPage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Login</h1>
      </div>
      <div className="page-content">
        <div className="form-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
