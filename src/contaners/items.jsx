import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import OutlinedButtons from './buybutton.jsx'
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    display: 'inline-block',
    width: '260px',
    margin: '23px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
let data={
  image:props.image,
  title:props.title,
  discription:props.discription,
  price:props.price

}
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          KM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.discription}
        subheader="September 14, 2016"
      />
      <CardMedia
       onClick = {()=>props.onClick.push('/Cardpage',data)}
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
    {props.about}
    <br />
    Packing: {props.Packing}
    <br />
    Price: {props.price}
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        </IconButton>

        <ShoppingCartIcon />

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <FavoriteIcon />
        </IconButton>
        <OutlinedButtons />
      </CardActions>
      <CardContent>

      </CardContent>
    </Card>
  );
}