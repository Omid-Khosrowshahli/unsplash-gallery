import './ImageList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ImageList = ({handleClick, loading, setLoading}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios.get("https://api.unsplash.com/photos?page=1&client_id=vVS3lodTOrCauuKgPNra44__tNybpx3HyRdjHzHO06Y")
    .then((Response) => {
        setData(Response.data);
    })
    .catch((e) => console.log(e))
    .finally(() => setLoading(false))
  }, []);
  console.log(data)
  return (
    loading ? <h1>Loading ...</h1> :
    <div className='image-list'>
      {data?.map((item) => (
        <div className='image' onClick={() => handleClick(item?.urls?.regular)}>
          <img src={item?.urls?.thumb} />
        </div>
      ))}
    </div>
  );
}

export default ImageList;