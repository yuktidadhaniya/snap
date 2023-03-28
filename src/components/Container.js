import React, { useContext, useEffect, useState } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import Gallery from './Gallery';
import axios from 'axios';
import { apiKey } from './api/config';
import Loader from '../components/Loader';
const Container = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { searchTerm } = props;

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setLoading(false);
        setImages(response.data.photos.photo);
      })
      .catch((error) => {
        console.log(
          'Encountered an error with fetching and parsing data',
          error
        );
      });
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
