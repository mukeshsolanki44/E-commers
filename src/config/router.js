import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Shop, myProduct, Cardpage, viewCard, userData, admin, login, slider,Total, edit,allproduct} from '../componats';



export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>

                <Route exact path='/' component={Home} />
                <Route path='/Shop' component={Shop} />
                <Route path='/product' component={myProduct} />
                <Route path='/Cardpage' component={Cardpage} />
                <Route path='/viewCard' component={viewCard} />
                <Route path='/userData' component={userData} />
                <Route path='/admin' component={admin} />
                <Route path='/login' component={login} />    
                <Route path='/slider' component={slider} />     
                <Route path='/total' component={Total} />  
                <Route path='/edit' component={edit} />    
                <Route path='/allproduct' component={allproduct} />                








            
            </Router>
        )
    }
}