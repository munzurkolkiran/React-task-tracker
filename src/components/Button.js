import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
  // const onClick = (e)=>{
  //   console.log('click')
  // }
 

  return <button onClick={onClick} className = "btn" style={{backgroundColor:color}}> {text} </button>
}

Button.defaultProps={
  color:'red',
  text:'button'
}
Button.protoTypes = {
  text : PropTypes.string,
  color : PropTypes.string,
  onClick : PropTypes.func,
}
export default Button