import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Chat from "./components/Chat/Chat";
import DirectMessages from "./components/Sidebar/containers/DirectMessages";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import MentionsReactions from "./components/Sidebar/containers/MentionsReactions";
import More from "./components/Sidebar/containers/More";
import PeoplesAndGroups from "./components/Sidebar/containers/PeoplesAndGroups";
import SaveItems from "./components/Sidebar/containers/SaveItems";
import Sidebar from "./components/Sidebar/Sidebar";
import Threads from "./components/Sidebar/containers/Threads";
import db, { auth } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
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
                  <Threads />
                </Route>
                <Route path="/all-direct-messages">
                  <DirectMessages />
                </Route>
                <Route path="/mentions-and-reactions">
                  <MentionsReactions />
                </Route>
                <Route path="/saved-items">
                  <SaveItems />
                </Route>
                <Route path="/groups-and-people">
                  <PeoplesAndGroups />
                </Route>
                <Route path="/more-options">
                  <More />
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
