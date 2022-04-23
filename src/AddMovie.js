import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
export function AddMovie({ movielist, setMovieList }) {
  const [name, setName] = useState(" ");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [starCast, setStarCast] = useState("");
  const history=useHistory();
  return (
    <div className="add-movie-form">
      <TextField label="Movie Name" placeholder="name" type="text" onChange={(event) => setName(event.target
        .value)} />
      <TextField label="Movie poster" placeholder=" poster" onChange={(event) => setPoster(event.target
        .value)} />
      <TextField label="Movie rating" placeholder=" rating" onChange={(event) => setRating(event.target
        .value)} />
      <TextField label="Movie starCast" placeholder="starCast" onChange={(event) => setStarCast(event.target
        .value)} />
      <TextField label="Movie summary" placeholder=" summary" onChange={(event) => setSummary(event.target
        .value)} />
      <Button variant="contained" onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          summary: summary,
          starCast: starCast,
          rating: rating
        };
        setMovieList([...movielist, newMovie]);
        history.push("/movie");
      }}>Add movie</Button>
    </div>
  );

}
