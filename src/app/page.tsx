import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="main-container">
        <label htmlFor="create-button">Create a new list</label>
        <button id="create-button">+</button>
      </div>
    </main>
  );
}
