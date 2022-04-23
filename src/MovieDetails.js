import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';

export function MovieDetails({ movielist }) {
  const { id } = useParams();
  console.log(id, movielist);
  const movie = movielist[id];
  const history=useHistory();
  return (
    <div>
      <h1>arthi</h1>
      <div class="movie-detail-container">
        <div class="movie-space">
          <iframe width="100%" height="650" src={movie.trialor} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>{movie.name}</h3>
          <h3>{movie.rating}</h3>
        </div>
        <p>{movie.starCast}</p>
        <p>{movie.summary}</p>
        <Button variant="outlined" startIcon={<DeleteIcon />}  onClick={()=>history.push('/movie')}>
      Back
      </Button>

      </div>
    </div>

  );

}
