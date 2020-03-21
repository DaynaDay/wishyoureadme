//ADD BOOK TO WISHLIST (Must have access token)
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://localhost:3001/api/wishlist",
//   "method": "POST",
//   "headers": {
//     "content-type": "application/json",
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODQyMDc0MTIsImRhdGEiOnsibmFtZSI6IkFsZXgiLCJlbWFpbCI6ImFsZXhAYWxleC5jb20iLCJpZCI6MX0sImlhdCI6MTU4NDIwMzgxMn0.NKpFZtyf0vd_zPeS2yasY31o0pxFiG3UBckbxV12P9E"
//   },
//   "processData": false,
//   "data": "{\n\t\"BookId\": 3\n}"
// }
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
//GET ALL BOOKS
var getAllBooks = document.getElementById("Add");
getAllBooks.addEventListener("click",function(e){
  e.preventDefault()

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/api/books",
  "method": "GET",
  "headers": {}
}
$.ajax(settings).done(function (response) {
  console.log(response);
  var bookContainer =$(".bookctaineonr");
  for(var i=0;i<response.length;i++)
  {
    var title =response[i].title;
    bookContainer.append(title);
    var author =response[i].author;
    bookContainer.append(author);
    var category =response[i].category;
    bookContainer.append(category);
  }
});
});
//ADD BOOK TO WISHLIST (Must have access token)
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://localhost:3001/api/wishlist",
//   "method": "POST",
//   "headers": {
//     "content-type": "application/json",
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODQyMDc0MTIsImRhdGEiOnsibmFtZSI6IkFsZXgiLCJlbWFpbCI6ImFsZXhAYWxleC5jb20iLCJpZCI6MX0sImlhdCI6MTU4NDIwMzgxMn0.NKpFZtyf0vd_zPeS2yasY31o0pxFiG3UBckbxV12P9E"
//   },
//   "processData": false,
//   "data": "{\n\t\"BookId\": 3\n}"
// }
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });