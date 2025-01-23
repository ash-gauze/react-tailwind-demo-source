'use client'
import React, { useState, useEffect } from 'react';



const Posts = ({ posts, loading }) => {
  if (loading) {
    return (<h2>...loading</h2>);
  }

  return (
    <ul> {posts.map((post) => (
      <div className='bg-slate-100 my-4 mb-[5rem]' key={post.id}
        id={post.id}>
        <h1 className='bg-slate-200 capitalize text-xl mt-4 mb-6'>{post.title}</h1>
        <article>{post.body}</article>
      </div>
    ))}
    </ul>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i); }

  return (
    <nav className='p-5'>
      <ul className='flex'>
        {pageNumbers.map((number) => (
          <li className='mr-6' key={number}>
            <button
              className='text-blue-500'
              onClick={() => paginate(number)}
              aria-label={`Go to page ${number}`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const PageExample = () => {
  const [allPosts, setAllPosts] = useState([]);
  // all literal post data, set by the fetched json data 
  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(8);

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => (response.json()))
      .then((data)=> setAllPosts(data))
    //all posts go into this array of data 
  },([]))


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);



  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Posts posts={currentPosts}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={allPosts.length}
        paginate={paginate}
      />
    </div>
  );
}

export {PageExample}
