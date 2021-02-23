import CreatePageComponent from 'components/CreatePageComponent';
import NavbarComponent from 'components/NavbarComponent';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <CreatePageComponent />
      </Container>
    </>
  );
}

export default App;
