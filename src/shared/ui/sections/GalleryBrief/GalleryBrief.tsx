import React, { useState, useEffect, useCallback } from 'react';
import { type EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { GalleryBriefThumbs } from './GalleryBriefThumbs';
import styles from './GalleryBrief.module.scss';
import classNames from 'classnames';

type PropType = {
  images: string[];
  options?: EmblaOptionsType;
};

export const GalleryBrief: React.FC<PropType> = (props) => {
  const { images, options } = props;
  // const slides = Array.from(Array(images.length).keys()); // Generate slides based on image count

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    duration: 10,
  });
  const [isFullView, setIsFullView] = useState(false);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className={classNames(styles.galleryBrief, {
      [styles['galleryBrief--fullView']]: isFullView,
    })}
      onClick={(event) => {

        if (isFullView) {
          if ((event.target as HTMLElement).closest(`.${styles['galleryBriefThumbs']}`)) {
            return
          }
          setIsFullView(false);
        }
      }}
    >
      <div className={styles['galleryBrief__viewport']}
        ref={emblaMainRef}
        onClick={() => setIsFullView(!isFullView)}
      >
        <div className={styles['galleryBrief__container']}>
          {images.map((imgSrc, index) => (
            <div className={styles['galleryBrief__slide']} key={index}>
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className={styles['galleryBrief__slide__img']}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles['galleryBriefThumbs']}>
        <div className={styles['galleryBriefThumbs__viewport']} ref={emblaThumbsRef}>
          <div className={styles['galleryBriefThumbs__container']}>
            {images.map((imgSrc, index) => (
              <GalleryBriefThumbs
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
