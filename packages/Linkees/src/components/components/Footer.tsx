import React from 'react';

import '../../css/skeleton.css';
import '../../css/components.css';

function Footer(): JSX.Element {
  return (
    <div className="Footer container">
      <p>
        © Derechos Reservados <span className="heart">❤️</span> <a href={'https://drowkid.bswc.net> DrowKid</a><i class="fa-solid fa-badge-check"></i>
      </p>
    </div>
  );
}

export default Footer;
