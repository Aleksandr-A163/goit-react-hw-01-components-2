import React from "react";
import PropTypes from "prop-types";
import styles from './FriendList.module.css'


const Friend = ({ id, avatar, name, isOnline }) => (
    <li className={styles.item} key={id}>
        <span className={styles[isOnline]}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="55" height="40"/>
        <p className={styles.name}>{name}</p>
    </li>
);

Friend.defaultProps = {
    avatar: "",
    isOnline: "onLine",
};

Friend.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.oneOf(['onLine', 'offLine']),
};

export default Friend;