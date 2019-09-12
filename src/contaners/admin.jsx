import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
// import PrimarySearchAppBar from './../contaners/nav'
import firebase from './../config/firebase'
// import { file } from "@babel/types";
     import PersistentDrawerLeft from './sider.jsx'
import FooterPagePro from './footer.jsx'




class FormPage extends React.Component {
    constructor(){
        super()
        this.state={
            ProductName:"",
            ProductDescription:"",
            Productprice:"",
            Productimage:"image",
            file:""
        }
    }
    // imageUpload(e){
    //     let fileName = e.target.files[0].name
    //     let ref = firebase.storage().ref('/').child(`images/${fileName}`)
    //     let imagePut = ref.put(e.target.files[0])
    //     imagePut.on('state_changed',()=>{
    //         ref.getDownloadURL()
    //         .then((url)=>{
    //             console.log("Url==>",url)
    //         })
    //     })
    // }
    async imageUpload(e) {
        let fileName = e.target.files[0].name
        console.log(fileName)
        console.log(this.state)
        let ref = firebase.storage().ref('/').child(`images/${fileName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL()
        .then((url)=>
            this.setState({Productimage:url})
        );
    }

    saveData=()=>{
        // console.log(this.state)
        firebase.firestore().collection("products").add(this.state)
    }
    render() {
        console.log(this.state)
        return (
            <div >
                <PersistentDrawerLeft />
                <MDBContainer style={{ marginLeft: "600px !inportant" }}>

                    <MDBCol md="6">
                        <form>
                            <p className="h4 text-center mb-4">Add Project</p>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                Project Name
                </label>
                            <input 
                            onChange={(e)=>this.setState({ProductName:e.target.value})}
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                            />
                            <br />
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                About project
                </label>
                            <input
                            onChange={(e)=>this.setState({ProductDescription:e.target.value})}

                                type="text  "
                                id="defaultFormRegisterEmailEx"
                                className="form-control"
                            />
                            <br />
                            <label
                                htmlFor="defaultFormRegisterConfirmEx"
                                className="grey-text"
                            >
                                Project Price
                </label>
                            <input
                            onChange={(e)=>this.setState({Productprice:e.target.value})}

                                type="address"
                                id="defaultFormRegisterConfirmEx"
                                className="form-control"
                            />
                            <br />
                            <label
                                htmlFor="defaultFormRegisterPasswordEx"
                                className="grey-text"
                            >
                                Image
                </label>
                            <input
                            // onChange={(e)=>this.setState({Productimage:e.target.value})}

                                type="file"
                                id="defaultFormRegisterPasswordEx"
                                className="form-control"
                                onChange={this.imageUpload.bind(this)}
                            />
                            <div className="text-center mt-4">
                                <MDBBtn onClick={()=>this.saveData()} color="unique" type="submit">
                                    Add product
                  </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>

                </MDBContainer>
                <FooterPagePro />
            </div>
        );
    }
};

export default FormPage;