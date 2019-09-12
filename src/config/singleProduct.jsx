
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Paper from '@material-ui/core/Paper';
// import SimpleRating from './Rating';
import Button from '@material-ui/core/Button';
import { MdShoppingCart } from 'react-icons/md';
import React from 'react';
import PrimarySearchAppBar from './../contaners/nav'
// import { height, fontWeight } from '@material-ui/system';

import FooterPagePro from '../contaners/footer.jsx'


class Cardpage extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            myCart: [],
        }
    }
    addToCart = () => {
        let { count, myCart } = this.state;
        let cart = {
            image: this.props.location.state.image,
            title: this.props.location.state.title,
            price: this.props.location.state.price,
            count: count
        }
        myCart.push(cart);
        this.setState({
            myCart: myCart,
        })
        localStorage.setItem("myCart", JSON.stringify(myCart));
    }
    componentDidMount() {
        if (JSON.parse(localStorage.getItem("myCart"))) {
            this.setState({                                            
            })
        }
    }
    render() {
        let { count, myCart } = this.state;
        return (
            <div>
                <PrimarySearchAppBar path={this.props} myCart={myCart} />

                <div style={{ margin: "20px" }}>
                    <Paper style={{ padding: 20, display: "flex" }}>
                        <div style={{ marginRight: "10px" }}>
                            <img src={this.props.location.state.image} width="500" />
                        </div>
                        <div style={{ marginTop: '60px', fontSize: "30px", fontWeight: "bold" }}>
                            <h2>{this.props.location.state.title}</h2>
                            {/* <SimpleRating /> */}
                            <p>{this.props.location.state.discription}</p>
                            <h3 style={{ color: "#9C27B0" }}>Rs: {this.props.location.state.price}</h3>
                            <h3>Quantity:</h3>
                            <div style={{ display: 'flex', justifyContent: "space-between", width: "70%", border: "2px solid", borderRadius: "10px " }}>
                                <button size="large" style={{ color: "#fff", backgroundColor: "#3f51b5", width: "80px", borderRadius: "10px" }} onClick={() => this.setState({ count: count > 1 ? count - 1 : 1 })}>-</button>
                                <h3 size="large" style={{ color: "#3f51b5", margin: "10px", }}>{count}</h3>
                                <button size="large" style={{ color: "#fff", backgroundColor: "#3f51b5", width: "80px", borderRadius: "10px" }} onClick={() => this.setState({ count: count + 1 })} >+</button>
                            </div>
                            <Button onClick={() => this.addToCart()} size="large" style={{ color: "#fff", backgroundColor: "#3f51b5", marginTop: "30px" }}>
                                <MdShoppingCart />Add to Cart
                    </Button>
                        </div>
                    </Paper>
                </div>
                <FooterPagePro />
            </div>
        )
    }
}

export default Cardpage;