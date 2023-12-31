import style from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';



export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    id: PropTypes.number.isRequired
  }))

}




