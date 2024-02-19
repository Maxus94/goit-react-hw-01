import css from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={image} alt={name} width="320" />
        <p className={css.name}>{name}</p>
        <p className={css.subname}>{tag}</p>
        <p className={css.subname}>{location}</p>
      </div>

      <ul className={css.statList}>
        <li className={css.statItem}>
          <span className={css.itemName}>Followers</span>
          <span className={css.itemValue}>{followers}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.itemName}>Views</span>
          <span className={css.itemValue}>{views}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.itemName}>Likes</span>
          <span className={css.itemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
