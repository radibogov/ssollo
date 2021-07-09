import './App.css';
import MainPage from './pages/MainPage';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />

    </Switch>
  );
}

export default App;
