import Link from "next/link";
import styles from "../styles/scss/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/criar-conta">Criar conta</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}
