import React,{useEffect,useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Axios from 'axios';


const Admin =()=>{


    const [detail, setDetail] = useState({
        "title": "",
        "details": "",
        "price": "",
        "image": "",
        "productId": ""
    })
   
    

const addProduct= () =>{

   
//console.log(detail)
    const params = {
        title:detail.title,
        details:detail.details,
        price:detail.price,
        image:detail.image,
        productId:detail.productId

    }

    Axios.post("http://localhost:3000/addProducts",params)
    .then((res)=>{
        console.log(res,"res");
      
    })
    
    

}

// useEffect(() => {
//     addProduct()
   
// })

    const styles = {
        button: {
            margin: 15
        }
    }


    return(
       
        <MuiThemeProvider>
        <React.Fragment>
        <h2>Admin Dashboard</h2>
        <h4>Add Product</h4>
            <TextField
                hintText="Product Title"
                floatingLabelText="Product Title"
                defaultValue={detail.title}
                name="name"
                onChange={e=>setDetail({...detail, title: e.target.value})}
            />
            <br />
            <TextField
                hintText="Product Detail"
                floatingLabelText="Product Detail"
                name="detail"
                onChange={e=>setDetail({...detail, details: e.target.value})}
                defaultValue={detail.details}
            />
            <br />
            <TextField
                hintText="Price"
                floatingLabelText="Price"
                name="price"
                onChange={e=>setDetail({...detail, price: e.target.value})}
                defaultValue={detail.price}
            />
            <br />
            <TextField
                hintText="Image"
                floatingLabelText="Image"
                name="image"
                onChange={e=>setDetail({...detail, image: e.target.value})}
                defaultValue={detail.image}
            />
            <br />
            <TextField
                hintText="Product Id "
                floatingLabelText="Product Id"
                name="productId"
                onChange={e=>setDetail({...detail, productId: e.target.value})}
                defaultValue={detail.productId}
            />
            <br />
            
            <RaisedButton
                label="Add"
                primary={true}
                style={styles.button}
                onClick={addProduct}
               
               />
        </React.Fragment>
    </MuiThemeProvider>
    )
}
export default Admin