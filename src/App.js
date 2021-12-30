import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import './App.css';
import AdminDashboard from './layouts/AdminDashboard';
import Footer from './layouts/Footer';
import Navi from './layouts/Navi';
import SignUp from './layouts/SignUp';
import UserDashboard from './layouts/UserDashboard';
import UserLogIn from './layouts/Users/UserLogIn';

function App() {
  return (
    <div>
      <Navi />
      <Container className='ui main container'>
        <UserDashboard />
        <Route exact path="/admin" component={AdminDashboard} ></Route>
        <Route exact path="/signUp" component={SignUp} ></Route>
        <Route exact path="/LogIn" component={UserLogIn} ></Route>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
