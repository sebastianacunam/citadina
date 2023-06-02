import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Habitacion from './components/Habitacion/Habitacion.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route path='/habitacion' component={Habitacion}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
