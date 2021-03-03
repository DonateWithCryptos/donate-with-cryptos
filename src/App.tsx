import CreatePageComponent from 'components/CreatePageComponent';
import NavbarComponent from 'components/NavbarComponent';
import { Container } from 'react-bootstrap';
import './App.css';
import PageComponent from 'components/PageComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/channel">
              <PageComponent />
            </Route>
            <Route path="/">
              <CreatePageComponent />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
