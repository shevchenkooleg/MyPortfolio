import React from "react";

const scrollHandler = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string, callback: (id:string)=>void) => {
    e.preventDefault()
     callback(id)
}

export default scrollHandler