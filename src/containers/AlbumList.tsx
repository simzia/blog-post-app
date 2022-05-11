import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../redux/store';
import { useNavigate, Navigate, useLocation } from 'react-router';
import { useEffect } from 'react';
import { getAlbumList, getAlbum } from '../redux/slices/albumSlices';

function AlbumList() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAlbumList(1));
  }, []);

  const albumList = useSelector((state: AppState) => state.albumReducer.albumList);

  return (
    <div className="text-center px-5 py-6">
      <div className="grid grid-cols-3 gap-9">
        {albumList?.map((albumItem) => {
          return (
            <div className="blogContainer bg-orange-400 px-9 py-6 border-2 border-zinc-800">
              <div className="blogTitle">
                <h4 className="text-2xl">{albumItem.title}</h4>
              </div>
              <div className="readBlog">
                <Link to={`/album-list/${albumItem.id}`} className="user">
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

export default AlbumList;
