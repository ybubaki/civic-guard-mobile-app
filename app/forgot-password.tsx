import EmailView from "../components/forgot-password/email-view";
import PasswordView from "@/components/forgot-password/password-view";
import { useState } from "react";

export default function ForgotPasswordScreen() {
  const [view, setView] = useState("email");
  const [email, setEmail] = useState("");

  if (view === "email") {
    return (
      <EmailView
        handleStep={() => setView("password")}
        setEmail={setEmail}
        email={email}
      />
    );
  }

  if (view === "password") {
    return <PasswordView email={email} />;
  }
}
