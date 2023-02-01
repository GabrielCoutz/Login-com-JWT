import CreateUserForm from "../src/components/Forms/CreateUserForm";
import LoginForm from "../src/components/Forms/LoginForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <CreateUserForm /> */}
      <LoginForm />
    </div>
  );
}
