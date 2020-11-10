
// Ex 1 

// const fetch =function(isbn){
//     $.ajax({            
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data);
//         },  
//         error: function (xhr, text, error) {
//         console.log(text);
//         }
//     }); 

// }

// fetch(9780575087057)



// Ex 2 

// const fetch = function (queryType,queryValue) {
//     $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//     success: function (data) {
//         if(queryType=="isbn"){
//             console.log(data.items[0].volumeInfo.title)
//         }
//         else if (queryType=="title"){
//             console.log("book by "+data.items[0].volumeInfo.authors[0])
//         }
//     } ,
//      error: function (xhr, text, error) {
//                  console.log(text);
//             }
// })
// }

// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")



// Ex 3 


// const fetch = function (queryType,queryValue) {
//     $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//     success: function (data) {
//         for ( let item of data.items){
//             console.log(item.volumeInfo.industryIdentifiers[0].identifier)
//             console.log(item.volumeInfo.title)
//             console.log(item.volumeInfo.authors)
//         }
//     } ,
//      error: function (xhr, text, error) {
//                  console.log(text);
//             }
// })
// }

// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")

