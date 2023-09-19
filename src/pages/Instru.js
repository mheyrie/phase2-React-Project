import React from 'react'

function Instru({instruction}) {
    console.log(instruction)
  return (
    <div>
         {instruction.map((instructn,index) => {
                return(
                  <li key={index}>{instructn}</li>
                )
              })}  
              </div>
              
  )
  
}

export default Instru