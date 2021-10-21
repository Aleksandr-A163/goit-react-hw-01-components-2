import PropTypes from 'prop-types';
import avatarDeep from './avatarDeep.png';
import style from './SocialProfile.module.css';

export default function SocialProfile({
    avatar = avatarDeep,
    name,
    tag,
    location,
    followers,
    views,
    likes,
}) {
    return (
        <div className={style.profile}>
            <div className={style.description}>
                <img
                    src={avatar ?? avatarDeep}
                    alt={name}
                    className={style.avatar}
                />
                <p className={style.name}>{name}</p>
                <p className={style.tag}>@{tag}</p>
                <p className={style.location}>{location}</p>
            </div>

            <ul className={style.stats}>
                <li className={style.statsItem}>
                    <span className={style.label}>Followers </span>
                    <span className={style.quantity}>{followers}</span>
                </li>
                <li className={style.statsItem}>
                    <span className={style.label}>Views </span>
                    <span className={style.quantity}>{views}</span>
                </li>
                <li className={style.statsItem}>
                    <span className={style.label}>Likes </span>
                    <span className={style.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

SocialProfile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};