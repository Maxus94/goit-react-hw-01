import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <li className={css.friendsListItem} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
