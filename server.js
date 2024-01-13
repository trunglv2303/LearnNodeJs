const http= require('http');//node,js thư viện
const hostname='127.0.0.1';//localhost
const port=3000;
const server= http.createServer((reg,res)=>
{
    res.statusCode=200;
    res.setHeader("Content-Type","Text/plain");
    res.end("Hello world\n");

})
server.listen(port,hostname,()=>{
    console.log(`Serve running at http://${hostname}:${port}/`)
})