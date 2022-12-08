const dayOfWeek = (date = new Date())=>{
    const days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[date.getDay()]
}

try {
    document.getElementById("day").innerText=dayOfWeek()
} catch (error) {
    console.log({message: error.message});
}

exports.dayOfWeek= dayOfWeek