import React, {} from 'react';
import classes from '../../../CSS/GameStyle.module.css'
const LogicContainers = props =>{
    let pushpuzzle = (
        <ul className={classes.GameComp} >
            
            {props.Data.map((val,index)=>{
                let status = null;
                let color = null;
                let inputValue = null
                if (val == null || !props.start) {
                    inputValue = " "
                    status = "static"
                    color = ""
                } else {
                    if(val!= 0){
                        inputValue = val
                    } if (val==0||typeof val == "string"){
                        status = "dynamic"
                        color = "rgb(0, 183, 255)"
                    } else {
                        status = "static"
                        color = ""
                    } if (val.length > 1) {
                        if (val.split('')[0] == "0"){
                            inputValue = ""
                        } else {
                            inputValue = val.split('')[0]
                         }
                        color = "#ffd66f"
                    } 
                } 
            return(
                <li key={index} status={status} id={index}  onClick={(event)=>{props.PadHandler(event,status, props.Sector,index,inputValue)}} style={{color:`${color}`}} >{inputValue}</li>
                )
            })}
            
        </ul>
    )
    return(
        <div>
            {pushpuzzle}
            
        </div>
    )

}
export default LogicContainers;