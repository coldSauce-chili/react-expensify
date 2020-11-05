let person = {
    firstName: 'Tom',
    lastName: 'Cruise',
    age: 11,
    location: 'mnl'
}



const rename = ({ firstName: name, lastName, ...rest }) => {
    console.log('name: ', name)
    console.log('lastname: ', lastName)
    console.log({ ...rest })
}

rename(person)