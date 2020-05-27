import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 550,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    Input: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        But:{
            '& > *': {
                margin: theme.spacing(1),
              },
        }
    },
}));


export default function Home() {
    const classes = useStyles();

    const [cart, setCart] = useState({
        "userName": "",
        "address": "",
        "contact": "",
        "email": "",
        "quantity":"",
        "productId": ""
    })
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [products, setProduct] = useState([])

    const getProduct = () => {
        Axios.get("http://localhost:3000/addProducts")
            .then((res) => {
                console.log(res)
                setProduct(res.data)
            })
    }
    useEffect(() => {
        getProduct()
    }, [])

    

const addInfo=()=>{
    const params = {
        userName:cart.userName,
        address:cart.address,
        contact:cart.contact,
        email:cart.email,
        quantity:cart.quantity,
        productId:101

    }

    Axios.post("http://localhost:3000/purchaseRecord",params)
    .then((res)=>{
        console.log(res,"res");
      setOpen(false)
    })
}

    return (
        <div className={classes.root}>

            <GridList cellHeight={200} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                  <h1>Products</h1>
                </GridListTile>
                {products.map((tile) => (
                    <GridListTile key={tile.image} >
                        <img src={tile.image} style={{ height: "204px", width: "auto" }} alt={tile.image} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.price}</span>}

                            actionIcon={

                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                <Link to={"/"+tile.id}><Button style={{background:"#2a52be",color:'white'}}>View</Button></Link>
                                <Button style={{background:"#ff2400", color:'white'}} onClick={handleOpen}>Cart</Button>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                    <h2 id="transition-modal-title">Information Form</h2>
        
                        <form className={classes.Input} noValidate autoComplete="off">
                            <TextField
                                hintText="Product Title"
                                floatingLabelText="Product Title"
                                label="Username"
                                defaultValue={cart.userName}
                                onChange={e=>setCart({...cart, userName: e.target.value})}
                            />
                            <TextField
                                hintText="Product Title"
                                floatingLabelText="Product Title"
                                label="Address"
                                defaultValue={cart.address}
                                onChange={e=>setCart({...cart, address: e.target.value})}
                            />
                            <br />
                            <TextField
                                hintText="Product Title"
                                floatingLabelText="Product Title"
                                label="Contact"
                                defaultValue={cart.contact}
                                onChange={e=>setCart({...cart, contact: e.target.value})}
                            />
                            <TextField
                                hintText="Product Title"
                                floatingLabelText="Product Title"
                                label="Email"
                                defaultValue={cart.email}
                                onChange={e=>setCart({...cart, email: e.target.value})}
                            />
                            <br/>
                            <TextField
                            id="standard-number"
                            label="Quantity"
                            type="number"
                            defaultValue={cart.quantity}
                            onChange={e=>setCart({...cart, quantity: e.target.value})}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                          <Button style={{background:"#fff44f"}} onClick={addInfo}>Submit</Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}