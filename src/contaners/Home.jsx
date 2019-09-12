import React from 'react';

import CarouselPage from '../contaners/slider.jsx'
import EcommercePage from './items.jsx'
import FooterPagePro from './footer.jsx'
import Chips from './catagre'
import PrimarySearchAppBar from './nav'
import firebase from './../config/firebase'

class Home extends React.Component {
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
    render() {
        console.log(this.state.allProduct.length)
        return (
            <div>
                <PrimarySearchAppBar path={this.props} myCart={this.state.myCart} />

                <CarouselPage />

                <Chips />
                {this.state.allProduct.map((val, ind) =>
                <EcommercePage onClick={this.props.history}
                        About={val.ProductDescription}
                        image={val.Productimage}
                        title={val.ProductName}
                        about={val.ProductName} Packing='(2X10)'
                        price={val.Productprice} />
                   )}
            
                {/* <EcommercePage
                    onClick={this.props.history}
                    image='https://khalidpharmacy.com/wp-content/uploads/2018/02/1_1520738033.jpg'
                    title='Rigix TAB 10MG (2X10)'
                    about='Cetirizine Dihydrochloride' Packing='(2X15)'
                    price={140} />
                <EcommercePage
                    onClick={this.props.history}
                    image='https://sehat.com.pk/product_images/z/760/WM__44802_zoom.jpg'
                    title='Advant Tab 8mg 2x7'
                    about='CANDESARTAN CILEXETIL'
                    Packing='(2x7)'
                    price={221.35} />
                <EcommercePage onClick={this.props.history}
                    image='https://sehat.com.pk/product_images/w/186/Picture-168__14916_zoom.jpg'
                    title='Nims Tab 100mg 4x5'
                    about='Nimesulide'
                    Packing='(4x5)'
                    price={130} />
                <EcommercePage
                    onClick={this.props.history}
                    image='https://sehat.com.pk/product_images/n/328/sehat-com-pk-cefspan-susp-30ml__87208_zoom.jpg'
                    title='Cefspan Susp 100mg/5ml 30ml'
                    about='Cefixime'
                    Packing='(30ml)'
                    price={304.25} />
                <EcommercePage
                    onClick={this.props.history}
                    image='https://sehat.com.pk/product_images/b/311/sehat-com-pk-lysovit-syp-120ml-1s__38066_zoom.jpg'
                    title='LYSOVIT 120ML SYP'
                    about='Vitiman B-complex , vitiman C plus lysvit'
                    Packing='(120ML)'
                    price={65} />
                <EcommercePage
                    onClick={this.props.history}
                    image='https://www.telemart.pk/uploads/product_image/product_53263_1.jpg'
                    title='ARINAC SYP 120ml'
                    about='Ibuprofen,Pseudoephedrine HCl '
                    Packing='(120ml)'
                    price={52} />
                <EcommercePage
                    onClick={this.props.history}
                    image='https://www.tazeein.com/images/thumbnails/210/210/detailed/23/Hydryllin__Aminophylline_Plus_Compound__Syrup_120ml@2x.png'
                    title='Hydryllin Syp 120ml'
                    about='DICLOFENAC SODIUM'
                    Packing='(2X10)'
                    price={65.55} />
                <EcommercePage
                    onClick={this.props.history}
                    image='https://sevenseas.com.pk/shop/3923-home_default/voltral-tab-50mg-2x10.jpg'
                    title='VOLTRAL TAB 50MG (2X10)'
                    about='DICLOFENAC SODIUM'
                    Packing='(2X10)'
                    price={116} />
                <EcommercePage
                    onClick={this.props.history}
                    image='https://sevenseas.com.pk/shop/3923-home_default/voltral-tab-50mg-2x10.jpg'
                    title='VOLTRAL TAB 50MG (2X10)'
                    about='DICLOFENAC SODIUM'
                    Packing='(2X10)'
                    price={116} />
                <EcommercePage
                    onClick={this.props.history}
                    image='https://sevenseas.com.pk/shop/3923-home_default/voltral-tab-50mg-2x10.jpg'
                    title='VOLTRAL TAB 50MG (2X10)'
                    about='DICLOFENAC SODIUM'
                    Packing='(2X10)'
                    price={116} />
                <EcommercePage
                    onClick={this.props.history}
                    image='https://sevenseas.com.pk/shop/3923-home_default/voltral-tab-50mg-2x10.jpg'
                    title='VOLTRAL TAB 50MG (2X10)'
                    about='DICLOFENAC SODIUM'
                    Packing='(2X10)'
                    price={116} />

                <FooterPagePro /> */}
                 <FooterPagePro  /> 

            </div>
        )
    }
}
export default Home