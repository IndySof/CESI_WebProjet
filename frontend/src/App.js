import { createContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";

import Welcome, { ErrorPage } from "./component/Welcome";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Applications from "./component/Applications";
import Profile from "./component/Profile";
import Terms from "./component/Terms";
import Contact from "./component/Contact";
import CreateJobs from "./component/recruiter/CreateJobs";
import MyJobs from "./component/recruiter/MyJobs";
import JobApplications from "./component/recruiter/JobApplications";
import AcceptedApplicants from "./component/recruiter/AcceptedApplicants";
import RecruiterProfile from "./component/recruiter/Profile";
import MessagePopup from "./lib/MessagePopup";
import isAuth, { userType } from "./lib/isAuth";
import Users from "./component/Users";
import Plan from "./component/Plan";


const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    fontFamily: "Helvetica, Arial, sans-serif",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const SetPopupContext = createContext();

function App() {
  const classes = useStyles();
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
    <BrowserRouter>
      <SetPopupContext.Provider value={setPopup}>
        <Grid container direction="column">
          <Grid item xs>
            <Navbar />
          </Grid>
          <Grid item className={classes.body}>
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route exact path="/terms">
                <Terms />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/logout">
                <Logout />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/applications">
                <Applications />
              </Route>
              <Route exact path="/profile">
                {userType() === "recruiter" ? (
                  <RecruiterProfile />
                ) : (
                  <Profile />
                )}
              </Route>
              <Route exact path="/addjob">
                <CreateJobs />
              </Route>
              <Route exact path="/myjobs">
                <MyJobs />
              </Route>
              <Route exact path="/job/applications/:jobId">
                <JobApplications />
              </Route>
              <Route exact path="/employees">
                <AcceptedApplicants />
              </Route>
              <Route exact path="/users">
                <Users />
              </Route>
              <Route exact path="/plan">
                <Plan />
              </Route>
              <Route>

              </Route>
            </Switch>
          </Grid>
        </Grid>
        <MessagePopup
          open={popup.open}
          setOpen={(status) =>
            setPopup({
              ...popup,
              open: status,
            })
          }
          severity={popup.severity}
          message={popup.message}
        />
        
        {/* <Grid container direction="column">
          <Grid item xs>
            <Footer />
          </Grid>
          <Grid item className={classes.body}>
            <Switch>
              <Route exact path="/terms">
                <Terms />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Grid>
        </Grid> */}
        
      </SetPopupContext.Provider>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
