import { Rate } from 'antd';
import React from 'react';


const Rating = (props) => {
    const {rate} =props
    return(
        <Rate value={rate} count={5}/>
    )

} 

export default Rating;