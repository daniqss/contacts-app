window.addEventListener('load', () => {
    const contactBook = document.getElementById('contact-book')

    const fetchContacts = async () => {
        const contacts = await fetch('http://localhost:3000/v1/contacts/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return await contacts.json()
    }
    
    const renderContacts = (contacts) => {
        let contactsHTML = ''

        for (let contact of contacts) {
            contactsHTML += `
            <article class="contact">
            <img src="logo.svg" alt="pipo" class="logo"/>
            <aside>
              <div class="contact-data">
                <div><b>Name: </b> <span>${contact.name}</span></div>
                <div><b>Birthday: </b> <span>${contact.birthday}</span></div>
                <div><b>Tlf: </b> <span>${contact.phone}</span></div>
                <div><b>Email: </b> <span>${contact.email}</span></div>
              </div>
              <div class="contact-btns">
                <button class="edit-btn">
                  <img src="edit-btn.svg" alt="edit" />
                </button>
                <button class="remove-btn">
                  <img src="remove-btn.svg" alt="remove" />
                </button>
              </div>
            </aside>
          </article>
            `
        }
        contactBook.innerHTML = contactsHTML
    }

    fetchContacts()
        .then(contacts => renderContacts(contacts))
        .catch(error => console.error(error))
})

