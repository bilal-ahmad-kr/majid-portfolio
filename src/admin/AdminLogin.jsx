import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminLogin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const { error } = await signIn(email, password);
    setSubmitting(false);
    if (error) {
      setError(error.message);
      return;
    }
    navigate("/admin");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.2)]"
      >
        <h1 className="text-[20px] font-extrabold tracking-tight text-[#0F172A]">
          Admin Sign In
        </h1>
        <p className="mt-1.5 text-[13.5px] text-[#64748B]">
          MJD AI Automation — content dashboard
        </p>

        <label className="mt-6 block text-[13px] font-semibold text-[#334155]">
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2.5 text-[14px] outline-none focus:border-[#1E5BFF]"
          />
        </label>

        <label className="mt-4 block text-[13px] font-semibold text-[#334155]">
          Password
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2.5 text-[14px] outline-none focus:border-[#1E5BFF]"
          />
        </label>

        {error && (
          <p className="mt-3 text-[13px] font-medium text-[#D90429]">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 w-full rounded-lg bg-gradient-to-br from-[#1E5BFF] to-[#0B3FA0] py-2.5 text-[14px] font-semibold text-white transition-opacity disabled:opacity-60"
        >
          {submitting ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}