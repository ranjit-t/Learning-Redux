import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getPhotos } from "./Store/Reduxstore";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const photos = useSelector((state) => state.photos);

  console.log(isLoading);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  console.log(photos);

  return (
    <div className="App">
      <h1>Photos Gallery</h1>
      <h3>Powered By Redux-Thunk</h3>
      <div>{isLoading === true && <p>...Loading</p>} </div>
      <div>
        {isLoading === false && (
          <div>
            <h2>Photos</h2>
            {photos.map((photo) => {
              return (
                <img
                  key={photo.id}
                  src={photo.download_url}
                  alt={photo.author}
                  style={{ width: "200px", height: "auto" }}
                ></img>
              );
            })}
          </div>
        )}{" "}
      </div>
    </div>
  );
}

export default App;
