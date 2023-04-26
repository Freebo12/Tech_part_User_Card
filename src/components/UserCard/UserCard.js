import {
  UserBox,
  UserTitle,
  BtnFollow,
  BtnContent,
  ImgUser,
  ImgBox,
  SubBox,
  Line,
  LogoGoIt,
} from './UserCardStyled';
import { useState } from 'react';

export const UserCard = ({ user }) => {
  const [buttonText, setButtonText] = useState('Follow');
  const [followers, setFollowers] = useState(user.followers);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleClick = () => {
    setActiveBtn(prev => !prev);

    buttonText === 'Follow'
      ? setButtonText('Following')
      : setButtonText('Follow');

    buttonText === 'Follow'
      ? setFollowers(followers + 1)
      : setFollowers(followers - 1);
  };

  return (
    <UserBox>
      <LogoGoIt></LogoGoIt>
      <ImgBox>
        <ImgUser src={user.avatar} alt="photo user" />
        <Line> </Line>
      </ImgBox>
      <SubBox>
        <UserTitle>{user.tweets} Tweets</UserTitle>

        <UserTitle>{followers} Followers</UserTitle>
      </SubBox>
      <BtnFollow
        type="button"
        onClick={handleClick}
        className={`${activeBtn ? 'active' : ''}`}
        style={{ backgroundColor: activeBtn === true ? '#5cd3a8' : '#ebd8ff' }}
      >
        <BtnContent>{buttonText}</BtnContent>
      </BtnFollow>
    </UserBox>
  );
};
