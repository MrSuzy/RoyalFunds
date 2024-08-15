import React from 'react';

const CustomCard: React.FC = () => {
  return (
    <div className="sc-jTMoxg fNMrRT">
      <div className="sc-jFmBXp habnFl pt-0 position-relative">
        <div className="sc-jLVyhk OABoA">
          <img
            className="position-absolute w-100"
            src="/wallpaper.jpg"
            alt="background"
            style={{
              objectFit: 'cover',
              left: 0,
              top: 0,
              height: '168px',
              borderRadius: '6px 6px 0 0',
              pointerEvents: 'none',
            }}
          />
        </div>
        <div className="sc-cnMZnH hpWZUU profile-picture d-inline-block">
          <img
            className="rounded-circle w-100 img-thumbnail d-block"
            src="/favicon.ico"
            alt="avatar"
            style={{
              width: '40px',
              height: '40px',
              position: 'absolute',
              bottom: '-10px',
              left: '14px',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
      <div className="sc-febvLc hkRzil">
        <div className="sc-ePBJll dzmzlg">YEAR OF THE CHEF</div>
        <div className="sc-iOdfRm fzZMcN">
          🐉 The free mint of 2024 hand-drawn dragon-chef NFTs for public goods
          supporters...
        </div>
        <div className="sc-cnOiCc clTRvF">
          <span className="sc-bkldj jyZBIT">Public Good</span>
        </div>
      </div>
      <div className="sc-izDtrv iMMXzh">
        <div className="sc-eQVdPn kgLHzF">
          <div className="sc-kOjCZu bQZrNu">456.66 NEAR</div>
          <div className="sc-hFVsQR fFFfOx">Raised</div>
        </div>
        <div style={{ cursor: 'default', color: 'rgb(41, 41, 41)' }}></div>
      </div>
    </div>
  );
};

export default CustomCard;
