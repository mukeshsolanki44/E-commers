import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import PrimarySearchAppBar from './../contaners/nav'
import FooterPagePro from './footer.jsx'
import firebase from './../config/firebase'

class FormPage extends React.Component{

    constructor() {
        super();
        this.state = {
            count: 0,
            myCart: [],
            allProduct: []
        }
    }
    componentDidMount() {
        let { allProduct } = this.state
        if (JSON.parse(localStorage.getItem("myCart"))) {
            this.setState({
                myCart: JSON.parse(localStorage.getItem("myCart")),
            })
        }

        firebase.firestore().collection("products").get().then(data =>
            data.forEach(value =>{
                allProduct.push(value.data())
                this.setState({
                    allProduct: allProduct
                })
            }
                )
        )

    }
    render(){
    return (
        <div style={{backgroundImage:"url(http://shashwatco.com/industries/Healthcare-Software-Mobile-and-Web-Application-Development.jpg)"}}>
                <PrimarySearchAppBar path={this.props} myCart={this.state.myCart} />
            <MDBContainer style={{ marginLeft: "600px !inportant" , marginRight:"5px" , }} >

                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4"></p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                           <h5 style={{color:"white",fontWeight:"italic"}}> Your Name</h5>
            </label>
                        <input
                            type="text"
                            id="defaultFormRegisterNameEx"
                            className="form-control"
                        />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                        <h5 style={{color:"#e192c9",fontWeight:"italic"}}> Your Email</h5>
                            
            </label>
                        <input
                            type="email"
                            id="defaultFormRegisterEmailEx"
                            className="form-control"
                        />
                        <br />
                        <label
                            htmlFor="defaultFormRegisterConfirmEx"
                            className="grey-text"
                        >
                        <h5 style={{color:"#e192c9",fontWeight:"italic"}}> Your location</h5>

                            
            </label>
                        <input
                            type="address"
                            id="defaultFormRegisterConfirmEx"
                            className="form-control"
                        />
                        <br />
                        <label
                            htmlFor="defaultFormRegisterPasswordEx"
                            className="grey-text"
                        >
                        <h5 style={{color:"#e192c9",fontWeight:"italic"}}> Phone number</h5>

                            
            </label>
                        <input
                            type="d"
                            id="defaultFormRegisterPasswordEx"
                            className="form-control"
                        />
                        <div className="text-center mt-4">
                            <MDBBtn type="submit" backgroundColor="e192c9" >
                               <b> Register</b>
              </MDBBtn>
                        </div>
                    </form>
                </MDBCol>

            </MDBContainer>
          <  FooterPagePro/>
        </div>
    );
};
}
export default FormPage;