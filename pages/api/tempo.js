function tempo(request,response) {
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGTMString()
    })
}

export default tempo;