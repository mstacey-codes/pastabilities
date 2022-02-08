const cleanUserInput = formInput => {
<<<<<<< HEAD
  Object.keys(formInput).forEach(field => {
    if(formInput[field] === "") {
      delete formInput[field]
    }
})
return formInput
}

export default cleanUserInput
=======
    Object.keys(formInput).forEach(field => {
      if(formInput[field] === "") {
        delete formInput[field]
      }
    })
    return formInput
  }
  
  export default cleanUserInput
>>>>>>> f4d661d844a644720761475d3b5266e5e1aa1f6a
