import React, { useEffect, useState } from 'react';
import { type StylesContainerFC, stylesContainer } from '../utils';
import { VideoStyled } from './Videos.styled';
import { VideosProps } from './types';

const Videos: StylesContainerFC<VideosProps> = ({
  url,
  colors,
  paletteKey = 'primary',
}) => {
  const [videoId, setVideoId] = useState('' as string);

  const [isShorts, setIsShorts] = useState(false as boolean);
  const [error, setError] = useState(false as boolean);

  useEffect(() => {
    try {
      const youtubeURL = new URL(url);

      if (
        youtubeURL.pathname.startsWith('/shorts') ||
        youtubeURL.pathname.startsWith('/embed')
      ) {
        const path = youtubeURL.pathname.split('/');
        const videoId = path[path.length - 1];
        setIsShorts(true);
        setVideoId(videoId);
        return;
      }

      const params = new URLSearchParams(youtubeURL.search);

      const videoId = params.get('v') as string;

      setVideoId(videoId);
    } catch (error) {
      setError(true);
    }
  }, [url]);

  return (
    <VideoStyled className="iframe" colors={colors[paletteKey]}>
      <div className="header">
        <span className="btn"></span>
        <span className="btn"></span>
        <span className="btn"></span>
      </div>
      {error ? (
        <div className="error">
          <h1>URL inválida</h1>

          <p>Por favor, verifique se a URL está correta.</p>
        </div>
      ) : (
        <div className="content">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      )}
    </VideoStyled>
  );
};

export default stylesContainer(Videos);
