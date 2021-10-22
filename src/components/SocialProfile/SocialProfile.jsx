import PropTypes from 'prop-types';
import avatarDeep from './avatarDeep.png';
import style from './SocialProfile.module.css';

export default function SocialProfile({
    avatar = avatarDeep,
    name,
    tag,
    location,
    stats,
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
                    <span className={style.quantity}>{stats.followers}</span>
                </li>
                <li className={style.statsItem}>
                    <span className={style.label}>Views </span>
                    <span className={style.quantity}>{stats.views}</span>
                </li>
                <li className={style.statsItem}>
                    <span className={style.label}>Likes </span>
                    <span className={style.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

SocialProfile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

SocialProfile.defaultProps = {
    name: 'User name',
    tag: '@User tag',
    location: 'User location',
    avatar: 'https://avatars.mds.yandex.net/get-zen_doc/163385/pub_5edb5e34221f4123b4d856e8_5edb6109b9e66247de83bbd4/scale_1200',
    stats: {
      followers: '0',
      views: '0',
      likes: '0',
    },
  };