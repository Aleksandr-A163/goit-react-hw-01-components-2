import React from "react";
import PropTypes from "prop-types";
import Friend from "./Friend";
import styles from './FriendList.module.css'

const FriendsList = ({ friends }) => (
    <ul className={styles.stat_list}>
        {friends.map(({ isOnline, id, avatar, name }) => (
            <Friend
                id={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        ))}
    </ul>
);

FriendsList.defaultProps = {
    friends: PropTypes.shape({
        avatar: "",
    }),
};

FriendsList.propTypes = {
    friends: PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
    }),
};

export default FriendsList;