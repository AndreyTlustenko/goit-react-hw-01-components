import {Profile}  from './Profile/Profile';
import user from "./Profile/user.json";
import {Statistics} from './Statistics/Statistics';
import data from "./Statistics/data.json";
import {FriendList} from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import {TransactionHistory} from "./Transactions/TransactionHistory";
import transactions from "./Transactions/transactions.json";


export const App = () => {
  return (
    <div
      style={{
       
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor:'rgba(214, 209, 209)',
      }}
    >
 <Profile
   username={user.username}
   tag={user.tag}
   location={user.location}
  avatar={user.avatar}
   stats={user.stats}
      />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
</div>
 );
};
