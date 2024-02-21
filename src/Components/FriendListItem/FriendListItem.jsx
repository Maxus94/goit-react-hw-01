import css from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="100" />
      <p className={css.name}>{name}</p>
      <p className={css.line}>
        {isOnline ? (
          <span className={css.onLine}>Online</span>
        ) : (
          <span className={css.offLine}>Offline</span>
        )}
      </p>
    </>
  );
}

export default FriendListItem;
