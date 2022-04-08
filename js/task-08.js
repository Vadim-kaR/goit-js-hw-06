const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
    event.preventDefault();
  
    const email = form.querySelector('[name="email"]')
    const password = form.querySelector('[name="password"]')
    
    if (password.value === '' || email.value === '') { 
       return alert('Пожалуйста, заполните все поля')
    }

    const object = {
        email: email.value,
        password: password.value,
    }

    event.currentTarget.reset();
    
    return  console.log(object);

}

function checkInputValue() { 

}


