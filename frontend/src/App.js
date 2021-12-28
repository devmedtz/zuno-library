import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Header from './components/Header';

// Site Pages/Screens
import HomeScreen from './screens/HomeScreen';
import BookDetailScreen from './screens/BookDetailScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/book/:bibnum' component={BookDetailScreen} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
