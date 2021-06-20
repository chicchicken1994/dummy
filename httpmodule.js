const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('Welcome to our home page')
    }
    if(req.url==='/about')
    {
        res.end('here is our shared history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find a suitable page.</p>
        <a href='/'>home</a>`
    )
})

server.listen(5000);