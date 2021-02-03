import React from 'react';
import PropTypes from "prop-types";
import styles from "./Button.module.scss";


const Button = ({content,size,type}) => {

  const sizeHandler = () => {
    switch(size){
      case "large":return{
        width: "150px",
        height: "60px",
      }
      case "medium":return{
        width: "130px",
        height: "45px",
      }
      case "small":return{
        width: "110px",
        height: "35px",
      }
      default:
        return{}
    }
  }
  const typeHandler = () => {
    switch(type){
      case "primary":return{
        backgroundColor:"rgba(192, 192, 192, 0.753)",
        borderColor:"silver",
        color:"white",
        outline:"none",
      }
      case "secondary":return{
        backgroundColor:"rgba(192, 192, 192, 0.753)",
        border:"1px solid silver",
        color:"grey",
        outline:"none"
      }
      case "filled":return{
        backgroundColor:"rgba(0, 128, 0, 0.685)",
        border:"1px solid green",
        color:"white",
        outline:"none"
      }
      case "outline":return{
        backgroundColor:"rgba(255, 255, 255, 0)",
        outline:"none"
      }
      default:{
        return {}
      }
    }
  }
  const stylesObject = {
    ...sizeHandler(),
    ...typeHandler()
  }

  return (
      <button className={styles.btn} style={stylesObject} >{content}</button>
  );
}
Button.propTypes = {
  content: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string
}

export default Button;