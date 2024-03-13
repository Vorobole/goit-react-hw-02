import FriendItem from "../FriendListItem/FriendItem";
import css from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        return (
          <li className={css.friendItem} key={friend.id}>
            <FriendItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
