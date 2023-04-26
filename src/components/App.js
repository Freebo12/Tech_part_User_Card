import { UserList } from './UserLIst/UserList';
import { useEffect, useState } from 'react';
import { getUsers } from '../services/getUser';
import { BtnLoadMore } from './BtnLoadMore/BtnLoadMore';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { SectionApp } from './App.styled';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  console.log(error);

  useEffect(() => {
    getUsers(page)
      .then(resp => resp.json())
      .then(items => {
        if (page === 1) {
          setUsers([...items]);
          setPage(1);
        } else if (page > 1) {
          setUsers(prev => [...prev, ...items]);
        }
      })
      .catch(error => setError(error));
  }, [page]);

  // useEffect(() => {
  //   getUsers(1)
  //     .then(resp => resp.json())
  //     .then(items => {
  //       setUsers([...items]);
  //       setPage(1);
  //     })
  //     .catch(error => setError(error));
  // }, []);

  // useEffect(() => {
  //   getUsers(page)
  //     .then(resp => resp.json())
  //     .then(items => {
  //       setUsers([...users, ...items]);
  //     })
  //     .catch(error => setError(error));
  // }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <SectionApp>
      <GlobalStyle />
      <UserList users={users} />
      {users.length !== 0 && <BtnLoadMore loadMore={loadMore} />}
    </SectionApp>
  );
};
