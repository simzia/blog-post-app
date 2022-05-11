import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../redux/store';
import { useNavigate, Navigate, useLocation } from 'react-router';
import { useEffect } from 'react';
import { getBlogList, getBlog } from '../redux/slices/blogSlices';

function Screen1() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBlogList(1));
  }, []);

  const blogList = useSelector((state: AppState) => state.blogReducer.blogList);

  return (
    <div className="text-center px-5 py-6">
      {/* <h2>Hello {name}</h2> */}
      <div className="grid grid-cols-3 gap-9">
        {blogList?.map((blogItem) => {
          return (
            <div className="blogContainer bg-orange-400 px-9 py-6 border-2 border-zinc-800">
              <div className="blogTitle">
                <h4 className="text-2xl">{blogItem.title}</h4>
              </div>
              <div className="readBlog">
                <Link to={`/blog-list/${blogItem.id}`} className="user">
                  <button className="bg-green-50 py-2 px-4 mt-4">
                    Read more...
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Screen1;
