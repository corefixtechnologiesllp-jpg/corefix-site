export type BlogPost={slug:string;title:string;excerpt:string;content:string;publishedAt:string;updatedAt?:string;author?:string;image?:string;keywords?:string[];published?:boolean};
const localPosts:BlogPost[]=[];
export async function getBlogPosts():Promise<BlogPost[]>{
 const endpoint=process.env.BLOG_API_URL;
 if(!endpoint)return localPosts;
 try{const response=await fetch(endpoint,{next:{revalidate:300}});if(!response.ok)return localPosts;const data=await response.json();const posts=Array.isArray(data)?data:data.posts;if(!Array.isArray(posts))return localPosts;return posts.filter((post:BlogPost)=>post.published!==false);}catch{return localPosts;}
}
export async function getBlogPost(slug:string){const posts=await getBlogPosts();return posts.find(post=>post.slug===slug);}
