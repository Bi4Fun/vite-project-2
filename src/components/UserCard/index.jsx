import styles from "./UserCard.module.scss";

function UserCard({ user }) {
  if (!user) return null;
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <p>{user.name}</p>
        <p>Email: {user.email}</p>
        <p>Country: {user.address?.city || "-"}</p>
      </header>
      <div className={styles.body}>
        <p>ID: {user.id}</p>
        <p>User name: {user.username}</p>
        <p>Company: {user.company?.name || "-"}</p>
      </div>
    </article>
  );
}

export default UserCard;
