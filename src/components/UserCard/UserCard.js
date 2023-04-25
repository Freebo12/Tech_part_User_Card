import {
  UserBox,
  UserTitle,
  BtnFollow,
  BtnContent,
  ImgUser,
  ImgBox,
  UserName,
} from './UserCardStyled';

export const UserCard = ({ user, changeValue }) => {
  return (
    <UserBox>
      <ImgBox>
        <ImgUser src={user.avatar} alt="photo user" />
      </ImgBox>
      <UserName>{user.user}</UserName>
      <UserTitle>{user.tweets} Tweets</UserTitle>
      <UserTitle>{user.followers} Followers</UserTitle>
      <BtnFollow type="button">
        <BtnContent>Follow</BtnContent>
      </BtnFollow>
    </UserBox>
  );
};
