class DBService {
    static BASE_URL = "https://64b512c3f3dbab5a95c6a4a9.mockapi.io/";

    //POST (C)
    static createBook(newBook) {
    let url = DBService.BASE_URL + 'books';
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newBook),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((resp) => resp.json())
        .then((res) => console.log("new", res));
    }

    //GET (R)
    static readBooks() {
    let url = DBService.BASE_URL + 'books';
    return fetch(url, { method: "get" })
        .then((resp) => resp.json())
    }

    static readsSingleBook(id) {
    let url = DBService.BASE_URL + id;
    return fetch(url, { method: "get" })
        .then((resp) => resp.json())
        
    }

    //PUT (U)
    static updateBook(modifiedBook) {
    let url = DBService.BASE_URL + 'books' + modifiedBook.id;
    fetch(url, {
        method: "PUT",
        body: JSON.stringify(modifiedBook),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((resp) => resp.json())
        .then((res) => console.log("upfdate", res));
    }

    //DELETE (D)
    static deleteBook(id) {
    let url = DBService.BASE_URL + 'books' + id;
    fetch(url, { method: "DELETE" })
        .then((resp) => resp.json())
        .then((res) => console.log("delete", res));
    }




}
