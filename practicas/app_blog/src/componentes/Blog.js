import React from "react";
import { NavLink } from "react-router-dom";
import post from "./../data/post";

const Blog = () => {
    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {post.map((articulo)=>{
                    return <li key={articulo.id}><NavLink to={`/articulo/${articulo.id}`}>{articulo.titulo}</NavLink></li>
                })}
            </ul>
        </div>
    );
}
 
export default Blog;