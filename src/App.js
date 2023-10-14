import "./App.css";
import Profile from "./profile/Profile";
import ChatContent from "./chatContent/ChatContent";
import UserStats from "./userStats/UserStats";
export default function App() {
  return (
    <div className="App">
      <Profile />
      <ChatContent />
      <UserStats />
    </div>
  );
}
