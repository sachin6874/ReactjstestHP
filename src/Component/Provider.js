import PackageContext from "./Context";
import React, {useState} from "react";
const Provider =(props)=>{
    let[intro]=useState({
        name:"Sachin Singh Tanwar",
         qualification :"B.Tech CSE",
         college: "Lovely Professional University"
    })
    return(
     <PackageContext.Provider 
      value={
        {data:intro}
      }
      >
        {props.children}
      </PackageContext.Provider>

    )
}
export default Provider;