
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import AboutUS from './components/AboutUs/AboutUS';
import MyOrder from './components/MyOrder/MyOrder';
import ManageOrder from './components/ManageOrder/ManageOrder';
import Services from './components/Services/Services';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/SignIn/PrivateRoute/PrivateRoute';
import SignUp from './components/SignUp/SignUp';
import Guides from './components/Guides/Guides';
import Contactus from './components/Contactus/Contactus';
import AddPackage from './components/AddPackage/AddPackage';

function App() {
  return (
    <div className="container-fluid">
    <AuthProvider>
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route  path="/home">
            <Home/>
          </Route>
          <Route  path="/guides">
            <Guides/>
          </Route>
          <PrivateRoute  path="/packages">
            <Services/>
          </PrivateRoute>
          <PrivateRoute  path="/myorder/:packageId">
            <MyOrder/>
          </PrivateRoute>
          <Route  path="/manageorder">
            <ManageOrder/>
          </Route>
          <Route  path="/addpackage">
            <AddPackage/>
          </Route>
          <Route  path="/aboutus">
            <AboutUS/>
          </Route>
          <Route  path="/contactus">
            <Contactus/>
          </Route>
          <Route  path="/signin">
            <SignIn/>
          </Route>
          <Route  path="/signup">
            <SignUp/>
          </Route>
          <Route  path="/*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
    </div>

  );
}

export default App;
