import SignupForm from "../components/SignupForm";
import '../styles.css'; // Import the CSS

export default function SignupPage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Signup</h1>
      </div>
      <div className="page-content">
        <div className="form-container">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
