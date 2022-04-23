import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="counter-container">
      <IconButton className="Like-dislike" aria-label="like" color="primary"
        onClick={() => {
          setLike(like + 1);
        }}>
       <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton className="Like-dislike" color="error" aria-label="dislike"
        onClick={() => {
          setdisLike(dislike + 1);
          //console.log(like);
        }}
      >
        👎 {dislike}
      </IconButton>

    </div>
  );
}
