import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

const FilmSetting = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

ReactDom.render(
    <App name={FilmSetting.NAME} genre={FilmSetting.GENRE} year={FilmSetting.YEAR}/>,
    document.querySelector(`#root`)
);
