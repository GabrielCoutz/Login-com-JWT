import Link from "next/link";
import styles from "../styles/scss/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.links}>
      <Link href="/criar-conta" className="btn primary">
        Criar conta
      </Link>
      <Link href="/login" className="btn secondary">
        Login
      </Link>
    </div>
  );
}
