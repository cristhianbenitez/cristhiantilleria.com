'use client';
import Image from 'next/image';
import React from 'react';
import styles from './gallery.module.css';

const Gallery = React.memo(({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const intervalId = React.useRef(null);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  React.useEffect(() => {
    intervalId.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId.current);
  }, [images]);

  return (
    <div className={styles.row_image_container} onClick={handleImageClick}>
      <Image
        src={images[currentImageIndex]}
        width={9999}
        height={'9999'}
        priority
        alt="Image"
        className={styles.row_image}
      />
    </div>
  );
});

export default Gallery;
