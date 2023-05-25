import styles from "../styles/page2.module.css"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return  <div className={styles.main}>
      <div className={styles.loading}>
      <h1>wait for it...👀</h1>
      </div>
      </div>
  }