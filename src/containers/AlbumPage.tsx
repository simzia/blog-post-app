// import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppDispatch, AppState } from '../redux/store';
import { getAlbum } from '../redux/slices/albumSlices';

function Gallery() {
  let params = useParams();
  let dispatch = useDispatch<AppDispatch>();
  const album = useSelector((state: AppState) => state.albumReducer.album);
  const isLoading = useSelector(
    (state: AppState) => state.albumReducer.isLoading
  );

  useEffect(() => {
    if (params && params.Albumid) {
      dispatch(getAlbum(parseInt(params.Albumid)));
    }
  }, []);

  return (
    <div className="profile-card flex justify-center items-center px-8">
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div>
          <div className="text-center text-3xl my-8">
            <h1>Photo Gallery</h1>
          </div>
          <div className="grid grid-cols-4 gap-9">
            {album?.map((albumItem) => {
              return (
                <div className="blogContainer px-9 py-6 border-2 border-zinc-800">
                  <div>
                    <img src={albumItem.thumbnailUrl} />
                  </div>
                  <div className="blogTitle">
                    <h4 className="text-xl">{albumItem.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
