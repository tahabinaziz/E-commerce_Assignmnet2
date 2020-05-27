import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Axios from 'axios';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProductDetail =(props)=> {
  const classes = useStyles();
console.log(props)

const [product, setproduct] = useState({})

const getRecord = () => {
    Axios.get(`http://localhost:3000/addProducts/${props.match.params.productId}`)
        .then((res) => {
            console.log(res)
            setproduct(res.data)
        })
}
useEffect(() => {
    getRecord()
}, [])



  return (
     
    <div className={classes.root}>
    <h1>Product Details</h1>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product.image} />
            </ButtonBase>
          </Grid>
          <Grid item>
            <h4>Product:</h4>
            <h4>Details:</h4>
            <h4>ProductId:</h4>
          
            </Grid>
           
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs>
              <br/>
                <Typography gutterBottom variant="subtitle1">
                  {product.title}
                </Typography>
               
                <Typography variant="body2" gutterBottom>
                {product.details}
                </Typography>
                
                <Typography variant="body2" color="textSecondary">
                  {product.productId}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Link to="/"><button >Back</button></Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            
              <Typography variant="subtitle1">{product.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ProductDetail