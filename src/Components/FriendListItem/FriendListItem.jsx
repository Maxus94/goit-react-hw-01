function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? <span>Online</span> : <span>Offline</span>}</p>
    </div>
  );
}

export default FriendListItem;
