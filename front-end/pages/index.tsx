import Link from "next/link";
import Button from "../src/components/UiElements/Button";
import styles from "../styles/scss/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.links}>
      <Link href="/criar-conta">
        <Button primary>Criar conta</Button>
      </Link>
      <Link href="/login">
        <Button secondary>Login</Button>
      </Link>
    </div>
  );
}
