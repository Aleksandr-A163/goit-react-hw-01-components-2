import Container from './components/Container/Container';

import Profile from './components/SocialProfile/SocialProfile';
import profile from './json/user.json';

import StatisticList from './components/Statistics/StatisticsList';
import statisticalData from './json/statical-data.json';

import FriendsList from "./components/FriendsList/FriendsList";
import friends from "./json/friends.json";

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './json/transactions.json'

export default function App() {
    return (
        <Container>
            <h2>Home work 01 REACT 'COMPONENTS'</h2>
            
                <Profile
                    name={profile.name}
                    tag={profile.tag}
                    location={profile.location}
                    avatar={profile.avatar}
                    stats={profile.stats}

                />

                <StatisticList title='upload stats' stats={statisticalData} />

                <FriendsList friends={friends} />

                <TransactionHistory items={transactions} />  

        </Container>
    );
}