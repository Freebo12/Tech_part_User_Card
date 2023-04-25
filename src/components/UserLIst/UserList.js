import { UserCard } from 'components/UserCard/UserCard';
import { UserListStyled } from './UserListStyled';

export const UserList = ({ users, changeValue }) => {
  return (
    <UserListStyled>
      {users.map(user => (
        <li key={user.id}>
          <UserCard user={user} changeValue={changeValue} />
        </li>
      ))}
    </UserListStyled>
  );
};
