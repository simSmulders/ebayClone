import React from 'react'

export default function AdForm(props) {
  return (
  <form onSubmit={props.onSubmit}>
    <label>
      Title:
      <input type="text" name="title" onChange={props.onChange} value={props.values.title} />
    </label>
    
    <label>
      Price:
      <input type="text" name="price" onChange={props.onChange} value={props.values.price} />
    </label>
    
    {/* <label>
      Description:
      <input type="text" name="description" onChange={props.onChange} value={props.values.description} />
    </label> */}

    <button type="submit">Add</button>
  </form>)
}