import React from 'react'
import {useState} from 'react'

//Child component to display the childrens and nested childrens 
function Childrens(props) {
  const [isChildrenVisible , setIsChildrenVisible] = useState(false)

  const handlesetIsChildrenVisible = ()=>{
    setIsChildrenVisible(!isChildrenVisible)
  }

  return (
    <div>
        <h4 onClick={handlesetIsChildrenVisible}>{props.data.name}</h4>
        {isChildrenVisible ? (props.data.children != undefined && props.data.children.length > 0 ? ( props.data.children.map((da)=>{
            if(da!=undefined)
                return (<Childrens key={da.name} data={da}/>)
        })) : (props.data.children) ):''}
    </div>
  )
}

export default Childrens