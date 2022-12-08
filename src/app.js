const dayOfWeek = (date = new Date())=>{
    const days= ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'surtaday']
    return days[date.getDay()]
}