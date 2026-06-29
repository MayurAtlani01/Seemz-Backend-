import { useState } from "react";
import "./Register.css";

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeOpenIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeClosedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default function Register() {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFocus = (field) => setFocused((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field) => setFocused((prev) => ({ ...prev, [field]: false }));

  const isFloating = (field) => focused[field] || formData[field].length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
  };

  return (
    <main className="auth-root">
      <section className="auth-hero">
        <div className="hero-img" />
        <div className="hero-veil" />
        <div className="hero-brand-mark">
          <span className="hero-brand-name">SEEMZ</span>
          <span className="hero-brand-line" />
          <span className="hero-brand-sub">Est. 2024</span>
        </div>
        <p className="hero-quote">Dressed in silence.<br />Defined by presence.</p>
      </section>

      <section className="auth-panel">
        <div className="auth-form-wrap">
          <header className="form-header">
            <p className="form-eyebrow">New membership</p>
            <h1 className="form-title">Create your<br /><em>account</em></h1>
          </header>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className={`field ${isFloating("fullName") ? "is-floating" : ""} ${focused.fullName ? "is-focused" : ""}`}>
              <span className="field-icon"><UserIcon /></span>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                className="field-input"
                value={formData.fullName}
                onChange={handleChange}
                onFocus={() => handleFocus("fullName")}
                onBlur={() => handleBlur("fullName")}
                required
              />
              <label className="field-label" htmlFor="fullName">Full name</label>
              <span className="field-line" />
            </div>

            <div className={`field ${isFloating("email") ? "is-floating" : ""} ${focused.email ? "is-focused" : ""}`}>
              <span className="field-icon"><MailIcon /></span>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="field-input"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                required
              />
              <label className="field-label" htmlFor="email">Email address</label>
              <span className="field-line" />
            </div>

            <div className={`field ${isFloating("password") ? "is-floating" : ""} ${focused.password ? "is-focused" : ""}`}>
              <span className="field-icon"><LockIcon /></span>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                className="field-input"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                required
              />
              <label className="field-label" htmlFor="password">Password</label>
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
              <span className="field-line" />
            </div>

            <button type="submit" className={`submit-btn ${loading ? "is-loading" : ""}`} disabled={loading}>
              {loading ? <span className="btn-spinner" /> : <span className="btn-label">Create Account</span>}
            </button>
          </form>

          <footer className="form-footer">
            <p className="signin-prompt">
              Already a member?{" "}
              <a href="/login" className="signin-link">Sign in</a>
            </p>
            <p className="terms-note">
              By continuing you agree to our{" "}
              <a href="/terms" className="terms-link">Terms</a>
              {" "}&amp;{" "}
              <a href="/privacy" className="terms-link">Privacy</a>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}