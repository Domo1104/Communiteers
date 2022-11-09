import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import EventListing from "./components/EventListing";
import Volunteer from "./components/Volunteers";
import Info from "./components/Infos";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NavBar from './components/NavBar'
import Search from "./components/Search";
import SelectEvent from "./components/SelectEvent";

function App() {
  const [eventListing, setEventListing] = useState([]);
  const [volunteerLogIn, setVolunteerLogIn] = useState(null)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((events) => {
        setEventListing(events);
      });

    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setVolunteerLogIn(user));
      }else {
        return <Redirect to = "/login" />;
      }
    });
  }, []);


  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setVolunteerLogIn(null));
  }

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  const searchEvents = eventListing.filter((events) => {
    return events.title.toLowerCase().includes(search.toLowerCase()) || events.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
      <div className="App">
        <NavBar volunteerLogIn={volunteerLogIn} handleLogout = {handleLogout} />
        <Switch>
          <Route exact path="/">
         <Home searchEvents={searchEvents} handleSearch={handleSearch} search={search} eventListing={eventListing} />
          </Route>
          <Route path="/events/:title">
            <SelectEvent eventListing={eventListing}/>
          </Route>
          <Route path="/events">
            <EventListing eventListing = {eventListing} setEventListing = {setEventListing}/>
          </Route>
          <Route path="/volunteers">
            <Volunteer />
          </Route>
          <Route path="/infos">
            <Info />
          </Route>
          <Route path="/login">
            {volunteerLogIn !== null? <Redirect to="/"/> : <LogIn setVolunteerLogIn = {setVolunteerLogIn} />}
          </Route>
          <Route path="/signup">
          {volunteerLogIn !== null ? <Redirect to="/" /> : <SignUp setVolunteerLogIn = {setVolunteerLogIn} />}
          </Route>
        </Switch>
      </div>
  );
}

export default App;
