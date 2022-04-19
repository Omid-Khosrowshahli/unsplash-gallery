import './Gallery.css';
import ImageList from '../ImageList/ImageList';
import Image from '../Image/Image';
import { useState } from 'react';

const Gallery = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  
  const clickHandler = (url) => {
    setUrl(url);
}

  return (
    <>
      <ImageList loading={loading} setLoading={setLoading} handleClick={clickHandler} />
      <Image url={url} setLoading={setLoading} />
    </>
  );
}

export default Gallery;