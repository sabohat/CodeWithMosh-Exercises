let post = new Blog('a', 's', 'g')

console.log(post)

//constructor function
function Blog(title, body, author){
    this.title = title,
    this.body = body, 
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isAlive = false
}