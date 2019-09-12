import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Chips() {
  const classes = useStyles();




  return (
    <div className={classes.root}>
      
    
      <Chip
        // avatar={<Avatar>MB</Avatar>}
        label="Getz Pharma"
        clickable
        className={classes.chip}
        color="primary"
        style={{backgroundColor:"#e192c9"}}
       
        deleteIcon={<DoneIcon />}
      />
      <Chip
        // icon={<FaceIcon />}
        label=" Abbott Laboratories"
        clickable
        className={classes.chip}
        color="primary"
        style={{backgroundColor:"#e192c9"}}

        
        // deleteIcon={<DoneIcon />}
      />
      <Chip
        label="SAMI Pharmaceuticals "
        
        className={classes.chip}
        color="primary"
        style={{backgroundColor:"#e192c9"}}

      />
      <Chip
       
        label=" Hilton Pharma"
        
        className={classes.chip}
        color="primary"
        style={{backgroundColor:"#e192c9"}}

      />
      <Chip
        // icon={<FaceIcon />}
        label= " GlaxoSmithKline Pakistan "
        
        className={classes.chip}
        color="primary"
        style={{backgroundColor:"#e192c9"}}

      />
    </div>
  );
}