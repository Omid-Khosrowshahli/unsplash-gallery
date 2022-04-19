import './Image.css';

const Image = ({url}) => {
  return (
    <div className='image-container'>
      <img className='image' src={url} onLoad={() => setLoading(false)} />
    </div>
  );
}

export default Image;