import React from "react"
import _ from "lodash"

const ErrorList = props => {
  const errantFields = Object.keys(props.errors)
  if (errantFields.length > 0) {
    let index = 0
    const listItems = errantFields.map(field => {
      index++
      return (
        <li key={index}>
<<<<<<< HEAD
        {props.errors[field]}
=======
          {_.capitalize(field)} {props.errors[field]}
>>>>>>> f4d661d844a644720761475d3b5266e5e1aa1f6a
        </li>
      )
    })
    return (
      <div className="callout alert">
        <ul>{listItems}</ul>
      </div>
    )
  } else {
    return ""
  }
}

<<<<<<< HEAD
export default ErrorList
=======
export default ErrorList
>>>>>>> f4d661d844a644720761475d3b5266e5e1aa1f6a
