import "./Form.css";
import React from 'react'

const Form = () => {
  return (
    <div className="forms">
      <form >
      <h1>Enter Form Details..</h1>
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <textarea rows="6" placeholder="Type your message here"/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
