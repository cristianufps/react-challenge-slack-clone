import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Chat from "./components/Chat/Chat";
import DirectMessages from "./components/DirectMessages";
import Header from "./components/Header";
import Login from "./components/Login";
import MentionsReactions from "./components/MentionsReactions";
import More from "./components/More";
import PeoplesAndGroups from "./components/PeoplesAndGroups";
import SaveItems from "./components/SaveItems";
import Sidebar from "./components/Sidebar";
import Threads from "./components/Threads";
import db, { auth } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      console.log(db);
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/threads">
                  <Chat user={Threads} />
                </Route>
                <Route path="/all-direct-messages">
                  <Chat user={DirectMessages} />
                </Route>
                <Route path="/mentions-and-reactions">
                  <Chat user={MentionsReactions} />
                </Route>
                <Route path="/saved-items">
                  <Chat user={SaveItems} />
                </Route>
                <Route path="/groups-and-people">
                  <Chat user={PeoplesAndGroups} />
                </Route>
                <Route path="/more-options">
                  <Chat user={More} />
                </Route>
                <Route path="/">Select or Create Channel</Route>
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
