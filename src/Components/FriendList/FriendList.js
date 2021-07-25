import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';
const FriendList = ({ friends }) => (
    <ul class={styles.friendList}>
        {friends.map(obj => (
            <li key={obj.id} class={styles.item}>
                <span
                    class={obj.isOnline ? styles.status : styles.statusNot}
                ></span>
                {/* {obj.isOnline && <span class={styles.status}></span>} */}
                <img
                    class={styles.avatar}
                    src={obj.avatar}
                    alt={obj.name}
                    width="48"
                />
                <p class={styles.name}>{obj.name}</p>
            </li>
        ))}
    </ul>
);

FriendList.ropTypes = { friends: PropTypes.array.isRequired };
export default FriendList;
