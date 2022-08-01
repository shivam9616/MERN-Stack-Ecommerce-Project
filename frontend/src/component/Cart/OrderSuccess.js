import React, { Fragment } from 'react'
import "./OrderSuccess.css"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'


const OrderSuccess = () => {
  return (
    <Fragment>
       <div className="orderSuccess">
       <CheckCircleIcon />

       <Typography>Your Order Has Been Placed Successfully</Typography>
       <Link to="/orders">View Orders</Link>
          </div> 

    </Fragment>
  )
}

export default OrderSuccess