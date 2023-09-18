import { useEffect } from "react";
import authStore from "../stores/authStore";
import '../styles.css'; // Import the CSS

export default function LogoutPage() {
  const store = authStore();

  useEffect(() => {
    store.logout();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Logout</h1>
      </div>
      <div className="page-content">
        <div className="form-container">
          You're now logged out.
        </div>
      </div>
    </div>
  );
}
