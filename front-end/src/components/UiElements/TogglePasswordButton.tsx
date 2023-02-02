import React from "react";
import styles from "../../../styles/scss/TogglePasswordButton.module.scss";

function togglePassword(passwordInput: string, toggleButton: HTMLDivElement) {
  const input = document.getElementById(passwordInput);
  if (!input) return;

  toggleButton.classList.toggle(styles.active);
  const type = input.getAttribute("type") === "text" ? "password" : "text";
  input.setAttribute("type", type);
}

const TogglePasswordButton = ({ passwordInput }: { passwordInput: string }) => {
  return (
    <div
      className={styles.togglePasswordButton}
      onClick={({ currentTarget }) =>
        togglePassword(passwordInput, currentTarget)
      }
    ></div>
  );
};

export default TogglePasswordButton;
