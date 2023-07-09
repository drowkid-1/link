import React from 'react';
import ReactDOM from 'react-dom';
import { Linktree, CHANNEL_TYPES } from 'linkees';

import './css/normalize.css';

const items = [
  {
    title: 'Sitio Web',
    subtitle: 'Checa mi trabajo en mi página',
    type: CHANNEL_TYPES.WEBSITE,
    link: 'https://drowkid.bswc.net', //your personal website or portfolio  link
  },
  {
    title: 'GitHub',
    subtitle: '@drowkid01 | 🏡 Checa mis trabajos open-source',
    type: CHANNEL_TYPES.GITHUB,
    link: 'https://github.com/drowkid01', //Github Profile link
  },
  {
    title: 'Instagram',
    subtitle: '@lalodk_01 |  Mi instagram personal 🙂',
    type: CHANNEL_TYPES.INSTAGRAM,
    link: 'https://instagram.com/lalodk_01', //instagram profile link
  },
  {
    title: 'Twitter',
    subtitle: '@drowkid01 | 😉',
    type: CHANNEL_TYPES.TWITTER,
    link: 'https://twitter.com/', // twitter profile link
  },
  {
    title: 'YouTube',
    subtitle: 'DrowKid01 | Official channel of mine',
    type: CHANNEL_TYPES.YOUTUBE,
    link: 'https://m.youtube.com/@DrowKid01', //youtube channel link
  },

  {
    title: 'Telegram',
    subtitle: '@drowkid01 | Chat with me instantly ',
    type: CHANNEL_TYPES.TELEGRAM,
    link: 'https://telegram.me/drowkid01', //Telegram Pofile
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Linktree cardItems={items} />
  </React.StrictMode>,
  document.getElementById('root')
);
