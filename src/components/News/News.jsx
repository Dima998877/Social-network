import React from 'react';
import s from './News.module.css';

const News = () => {
  return (
    <div className={s.news}>
      <img
        src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000"
        className={s.wallpaper}
        alt="wallpaper"
      />
      <div>icon+discrip</div>
    </div>
  );
};

export default News;
