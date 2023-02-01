import Form from "../src/components/Form";
import Input from "../src/components/Input";
import Label from "../src/components/Label";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Form>
        <Label htmlFor="nome" text="Nome" />
        <Input id="nome" name="nome" />
      </Form>
    </div>
  );
}
