import React from 'react'

export const Form = (props) => {
  return (
   <form onSubmit={props.y}>
    <input type='text' value={props.v} onChange={props.x}/>
    <button type="submit" >Add</button>
   </form>
  )
}
