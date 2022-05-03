import React from 'react'
import {Img} from 'react-image'

const HourlyImage = (props) => {
<Img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
}
export default HourlyImage
  