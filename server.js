// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' +
      '<p>Welcome to the home page!</p>'
    )
  } else if (request.url === '/random-joke') {
    var rando = Math.floor(Math.random() * 10) + 1
    if (rando < 4) {
      response.end(
        '<h1>Joke 1</h1>' +
        '<a href="/">Home</a>' +
        '<p>Knock - Knock!</p>' +
        '<p>Who\'s there?</p>' +
        '<p>Opportunity!</p>' +
        '<p>That is impossible. Opportunity doesn\'t come knocking twice!</p>'
      )
    } else if (rando > 7) {
      response.end(
        '<h1>Joke 3</h1>' +
        '<a href="/">Home</a>' +
        '<p>Knock - Knock!</p>' +
        '<p>Who\'s there?</p>' +
        '<p>The Door!</p>'
      )
    } else {
      response.end(
        '<h1>Joke 2</h1>' +
        '<a href="/">Home</a>' +
        '<p>Knock - Knock!</p>' +
        '<p>Who\'s there?</p>' +
        '<p>Double.</p>' +
        '<p>Double who?</p>' +
        '<p>W!</p>'
      )
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cute Animal!!!</h1>' +
      '<a href="/">Home</a>' +
      '<img src="http://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals-2/cute-baby-animals-2-2.jpg" alt="Waving hi">'
    )
  } else {
    var url = request.url
    response.end(
      '<h1>Error 404</h1>' +
      '<p>Requested URL </p>' + url + '<p> not found</p>' +
      '<a href="/">Home</a>' +
      '<img src="http://404-error.com/wp-content/uploads/2013/03/404-error.jpg" alt="Waving hi">'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
