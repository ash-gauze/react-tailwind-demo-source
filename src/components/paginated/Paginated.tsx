import React, { useEffect,useState } from 'react';
import '../../app/globals.css';


type Post= {
  userId:number,
  id:number,
  title:string,
  body:string,
};

type PostArray = Array<Post>;


const Pagination = () => {
  const [allPosts,setPosts] = useState<PostArray>([]);
  const [index, setIndex] = useState(1);
  const [indexB, setIndexB] = useState(8);
  const [pageStep,setPageStep] = useState(8);


  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => (response.json()))
      .then((data)=> setPosts(data))
    //all posts go into this array of data 
  },[])
  const currentPosts:PostArray = allPosts.slice(index,indexB);

  const handleNextPosts = () => {
    if(indexB+pageStep < allPosts.length){
    setIndex(index+pageStep);
    setIndexB(indexB+pageStep);

  } else {console.log('array bounds!')} }
  const handlePrevPosts = ()=> {
    if(index > 1) {setIndex(index-pageStep);setIndexB(indexB-pageStep)}
  }

  const handlePageResize = (code:string) => {
    if(code === "SHRINK" && pageStep >= 1) {
      setPageStep(pageStep-1);
      setIndexB(indexB-1);
    } else if(code === "GROW") {
      setPageStep(pageStep+1);
      setIndexB(indexB+1);
    }
  }
  return (
    <>
    <div className={'flex space-apart justify-around flex-row nowrap pb-4'}>
    <button className={'control-button'} onClick={handlePrevPosts}>previous page</button>
    <button className={'control-button'} onClick={()=>handlePageResize("SHRINK")}>see less</button>
    <button className={'control-button'} onClick={()=>handlePageResize("GROW")}>see more</button>
    <button className={'control-button'} onClick={handleNextPosts}>next page</button>
    </div>
      <ul>
        {currentPosts.map((post) => (
          <div className={'bg-slate-100 my-4 mb-[3rem]'} key={post.id}>
            <h1 className={'bg-slate-200 capitalize text-xl mt-4 mb-6'}>{post.title}</h1>
            <article>{post.body}</article>
          </div>
        ))}
      </ul>

    </>
  )
}


export {Pagination}
