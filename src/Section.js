import React from 'react'
import './section.css'

function Section({Icon,title,selected,color}) {
  return (
    <div className={`section ${selected && "section--selected"}`}
    style={{
        borderBottom:`3px solid  ${color}`,
        color:`${selected && color}`,    
    }}
    >
    <div className="section_header">
      <Icon/>
      <h4>{title}</h4>
    </div>  

    </div>
  )
}

export default Section