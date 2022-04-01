
const generalListItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', generalListItemEl.length) 


generalListItemEl.forEach(element => { 
    const itemTitleEl = element.querySelector('h2')
    const sublistEl = element.querySelector('ul')
    console.log('Category:',itemTitleEl.textContent)
    console.log('Elements:',sublistEl.children.length)
})

