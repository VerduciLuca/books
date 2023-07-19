// DBService.readPosts()

const mioPost = {
    title: 'il mio post',
    userID: 1,
    body: 'ciao a tutti ecco il mio nuovo interessantissimo post'
}

DBService.readBooks().then(res => console.log('read all', res))     

function render(books){

    const mainList = document.getElementById('main-list')
    mainList.innerHTML=''

    for (const book of books) {
        mainList.innerHTML += `<li>  <a href="./detail.html?id=${book.id}">${book.title}</a> </li>`
    }
}