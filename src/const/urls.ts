 const baseURL = 'https://jsonplaceholder.typicode.com'

 const posts = '/posts'

 const urls ={
    posts:{
        base: posts,
        postById:(id: number): string =>`${posts}/${id}`
    }
 }


 export {
    baseURL,
     urls
 }
