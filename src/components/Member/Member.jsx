import React from 'react';
import './Member.css';
import user_frame from '../../assets/user-frame.svg';
import member_img from '../../assets/member_img.png';
import ronaldo from '../../assets/ronaldo.jpg'

const Member = ({player}) => {
  return (
    <div className='member'>
      <div className='member-img-container'>
          <img className='image' src={player.image} alt="" />
      </div>

      <div className='member-details'>
        <h2>{player.name}</h2>
        <p style={{ color: '#17A1FA' }}>{player.post? player.post: null}</p>
        {/* <p style={{ color: '#17A1FA' }}>webmail</p> */}
      </div>
    </div>
  );
}

export default Member;
