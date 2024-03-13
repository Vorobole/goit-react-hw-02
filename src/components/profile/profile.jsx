import css from "./profile.module.css";

const Profile = (props) => {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className={css.profileContainer}>
      {" "}
      <div className={css.profileUserInfo}>
        {" "}
        <img
          className={css.profileAvatar}
          src={avatar}
          alt="User avatar"
        />{" "}
        <p className={css.profileUserName}>{name}</p>
        <p className={css.profileUserTag}>{tag}</p>{" "}
        <p className={css.profileUserLocation}>{location}</p>{" "}
      </div>{" "}
      <ul className={css.profileList}>
        {" "}
        <li className={css.profileItem}>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsQuantity}>{followers}</span>{" "}
        </li>{" "}
        <li className={css.profileItem}>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsQuantity}>{views}</span>{" "}
        </li>{" "}
        <li className={css.profileItem}>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsQuantity}>{likes}</span>{" "}
        </li>{" "}
      </ul>
    </div>
  );
};
export default Profile;
