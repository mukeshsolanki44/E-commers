import React from 'react';
import { Link } from 'react-router-dom'
import PrimarySearchAppBar from './../contaners/nav'
import OutlinedButtons from './buybutton.jsx'

class CardView extends React.Component {
  constructor() {
    super()
    this.state = {
      myCart: 0
    }
  }
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("myCart"))) {
      this.setState({
        myCart: JSON.parse(localStorage.getItem("myCart")),
      })
    }
  }
  render() {
    return (
      <div >
        <PrimarySearchAppBar path={this.props} myCart={this.state.myCart} />
        <table className="table">
          <tr>
            <th className="th">Image</th>
            <th className="th">Title</th>
            <th className="th">Price</th>
            <th className="th">Total Price</th>
            <th className="th">Quantity</th>
            <th className="th">Remove</th>
          </tr>
          {
            this.props.location.state.data.map((val => {
              return <tr>
                <td>
                  <img width="60px" src={val.image} />

                </td>
                <td>
                  <span style={{ color: "black" }}>{val.title}</span>

                </td>
                <td>
                  <span style={{ color: "#3f51b5" }}>{val.price}</span>

                </td>

                <td>
                  <span style={{ color: "#3f51b5" }}>{val.price * val.count}</span>

                </td>
                <td>
                  <span style={{ color: "#3f51b5" }}>{val.count}</span>

                </td>
                <td>
                  ❌
      </td>
              </tr>

            }))
          }


        </table>

        <h1 style={{ marginLeft: "1000px" }}>
          <OutlinedButtons to='/userData' />
        </h1>
      </div>
    );

  }

}

export default CardView;