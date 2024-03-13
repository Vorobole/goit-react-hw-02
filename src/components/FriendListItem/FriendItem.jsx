import css from "../FriendList/FriendList.module.css";

const FriendItem = (props) => {
  return (
    <div>
      <img
        className={css.friendAvatar}
        src={props.avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.friendName}>{props.name}</p>
      {props.isOnline ? (
        <p className={css.friendOnline}>Online</p>
      ) : (
        <p className={css.friendOffline}>Offline</p>
      )}
    </div>
  );
};
export default FriendItem;
