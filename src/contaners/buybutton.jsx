import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    marginLeft:"30px",
    color:"#e192c9"
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons(props) {
  const classes = useStyles();

  return (
    <div>
     
      <Button variant="outlined" color="#e192c9 !important" className={classes.button}>
  <Link to={props.to} style={{color:"#e192c9"}}> BUY NOW</Link>
      </Button>
 
    </div>
  );
}
