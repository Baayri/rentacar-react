import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import './App.css';
import AdminDashboard from './layouts/AdminDashboard';
import Navi from './layouts/Navi';
import UserDashboard from './layouts/UserDashboard';

function App() {
  return (
    <div>
      <Navi />
      <Container className='ui main container'>
        <UserDashboard />
        <Route exact path="/admin" component={AdminDashboard} ></Route>
      </Container>
    </div>
  );
}

export default App;
