import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Habitacion from './components/Habitacion/Habitacion.jsx';
import Bathroom from './components/Bathroom/Bathroom.jsx';
import Pileta from './components/Pileta/Pileta.jsx';
import Gym from './components/Gym/Gym.jsx';
import Otros from './components/Otros/Otros.jsx'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route path='/habitacion' component={Habitacion}/>
          <Route path='/baño' component={Bathroom}/>
          <Route path='/pileta' component={Pileta}/>
          <Route path='/gimnasio' component={Gym}/>
          <Route path='/otros' component={Otros}/>
          
         
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
