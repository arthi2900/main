import { Movie } from './Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
export function MovieList({ movielist,setMovieList}) {
  return (
    <div className="movie-list">
      {movielist.map(({ name, poster, starCast, rating, summary }, index) => (
        <Movie key={index} name={name} poster={poster} starCast={starCast}
          rating={rating} summary={summary}
          deleteButton={<IconButton aria-label="delete" color="error" onClick={()=>{console.log(index);
            const copyMovieList=[...movielist];
            copyMovieList.splice(index,1)
            setMovieList(copyMovieList)
        }}>
    <DeleteIcon />
    </IconButton>} 
    id={index}
    />
          ))}
      
    </div>
  );
}

