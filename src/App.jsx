import "./App.css";
import Profile from "./components/profile/profile.jsx";
import userData from "./data/userData.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./data/transaction.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
