import PropTypes from 'prop-types';
import style from './Statistics.module.css';




const Statistics = ({ label, percentage }) => {
    return (
        <>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
        </>
    );
};

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistics;