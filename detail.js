const params = new URLSearchParams(window.location.search)

console.log(params);

DBService.readsSingleBook(params.get('id')).then(book => console.log((book)))