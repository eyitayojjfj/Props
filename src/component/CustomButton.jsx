import React from 'react'
import "./CustomButton.css"


const CustomButton = ({btnClass, btnFunc, bgColor, txColor, btnBorder, children}) => {
    const styles = {
        btn:  {
            backgroundColor: bgColor || "red",
            color: txColor || "white",
            padding: "10px 20px",
            border: btnBorder || "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            margin: "10px 58px",
        },
       main: {
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            margin: "10px",
        }
    }



  return (
    <button onClick={btnFunc} className={btnClass} style={styles.btn}>{children || "Default"}</button>
  )
}

export default CustomButton