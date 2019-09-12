import React from 'react';
import Cardpage from '../config/singleProduct.jsx'
class Shop extends React.Component{
    render(){
        console.log(this.props)
        return(
                <div>
            
            <h1>
                shop
            
            </h1>
               <Cardpage props={this.props}/>

            </div>
        )
    }
}
export default Shop