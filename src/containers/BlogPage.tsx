// import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppDispatch, AppState } from '../redux/store';
import { getBlog, getComments } from '../redux/slices/blogSlices';

function BlogPost() {
  let params = useParams();
  let dispatch = useDispatch<AppDispatch>();
  const blogPost = useSelector((state: AppState) => state.blogReducer.blogPost);
  const isLoading = useSelector((state: AppState) => state.blogReducer.isLoading)
  const commentList = useSelector((state: AppState) => state.blogReducer.commentList)
  useEffect(() => {
    if (params && params.Blogid) {
      dispatch(getBlog(parseInt(params.Blogid)));
    }
  }, [])

  useEffect(() => {
    if (params && params.Blogid) {
      dispatch(getComments(parseInt(params.Blogid)));
    }
  },[])

  return (
    <div className="profile-card h-screen flex justify-center items-center px-8">
      {isLoading ? 
        <div>Loading....</div> : 
          <div>
            <h1 className='text-center text-3xl uppercase'>{blogPost?.title}</h1>  
            <h3 className='mt-4 text-black'>{blogPost?.body}</h3>
            <div className='font-bold my-4'>Comments:</div>
            <div className='commentContainer'>
              {commentList.map((comment) => {
                return <div className='shadow-md border border-slate-900 mb-4 p-5'>
                  <div>Name: {comment.name}</div>
                  <div>{comment.body}</div> </div>
              })}
            </div>
          </div>
      }
    </div>
  );
}

export default BlogPost;