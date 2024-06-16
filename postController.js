const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
];

// esjs way 1
// export const getPosts = () => posts;

// esjs way 2
// const getPosts = () => posts;
// export { getPosts };

// esjs export default
const getPosts = () => posts;
export default getPosts;

export const getPostsLength = () => posts.length;