import './App.css';
import {useState} from 'react';
import { Tic } from './Tic';
import { AddColor } from './AddColor';
import{Switch,Route,Link} from 'react-router-dom';
import { MovieList } from './MovieList.1';
import { initial_MovieList } from './initial_MovieList';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';

function App() {
    const [movielist,setMovieList]=useState(initial_MovieList);
           const name1 = "movie app";
        
    return (
      <div className="App">
                <h1>Hello {name1}</h1>
                
                 <ul>
                 <li><Link to="/movie">Movie List</Link></li>
                 <li><Link to="/add">Add Movie</Link></li>
                   <li><Link to="/addcolor">ADD COLOR list</Link></li>
                 <li><Link to="/">HOME</Link></li>
                 <li><Link to="/tic">Tic</Link></li>
                 <li><Link to="/tic">Tic</Link></li>
                                                </ul>
                 
                 <Switch>
                  <Route path="/movie/:id"><MovieDetails movielist={movielist}/></Route>
         <Route path="/movie/add"> <AddMovie movielist={movielist} setMovieList={setMovieList}/> </Route>
          <Route exact path="/movie">
            <MovieList movielist={movielist} setMovieList={setMovieList}/>
          </Route>
          <Route path="/addcolor">
            <AddColor />
          </Route>
          <Route path="/tic">
            <Tic />
          </Route>
          <Route path="/">ftuhjgykyhfhgdfgs</Route>
          <Route path="**">404 error</Route>
        </Switch>
              </div>
    );
     }
    export default App;