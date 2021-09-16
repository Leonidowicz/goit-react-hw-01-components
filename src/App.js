// import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile/Profile';
import dataProfile from './Components/Profile/data.json';
import Statistics from './Components/Statistics/Statistics.js';
import dataStat from './Components/Statistics/statistical-data.json';
import FriendList from './Components/FriendList/FriendList.js';
import dataFriends from './Components/FriendList/friends.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory.js';
import transactions from './Components/TransactionHistory/transactions.json';
import avatar from './Components/Profile/avatar.jpg';
function App() {
    return (
        <div className="App">
            {/* <header className="App-header"></header> */}
            <Profile
                name={dataProfile.name}
                tag={dataProfile.tag}
                location={dataProfile.location}
                avatar={avatar}
                followers={dataProfile.stats.followers}
                views={dataProfile.stats.views}
                likes={dataProfile.stats.likes}
            />
            <Statistics title="UPLOAD STATS" data={dataStat} />
            <FriendList friends={dataFriends} />
            <TransactionHistory items={transactions} />
        </div>
    );
}

export default App;
