// Import from framework
import React from 'react';

// Import user created components
import Card from '../UI/Card';

// Import css module
import style from './UserList.module.css';

// Component outputs a list of the received user data, mapping through the array passed in via props
const UserList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
