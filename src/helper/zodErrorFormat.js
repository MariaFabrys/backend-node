const zodErrorFormat = (error) => {
    const errorFormatted = validUser.error.format()
    delete errorFormatted._errors

    for(let field in errorFormatted){
        errorFormatted[field] = {message: errorFormatted[field]._errors}
    }
    return errorFormatted
}

export default zodErrorFormat