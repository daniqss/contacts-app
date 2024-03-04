window.addEventListener('load', () => {
    fetch('http://localhost:3000/v1/contacts/jose/y', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((contacts) => console.log(contacts))
        .catch((error) => console.log(`error wtf ${error}`))

})
