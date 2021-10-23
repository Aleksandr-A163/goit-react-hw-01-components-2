import PropTypes from 'prop-types';
import style from './Statistics.module.css';


const createColor = () => {
    const color =
        'rgb(' +
        Math.round(150) +
        ',' +
        Math.round(Math.random() * 200) +
        ',' +
        Math.round(Math.random() * 250) +
        ')';
    return color;
  };

const StatisticList = ({ title, stats }) => {
    return (
        <section className={style.container}>
            {title && <h2 className={style.title}>{title}</h2>}
            <div className={style.wrapper}>
                <ul className={style.statList}>
                    {stats.map(({ id, label, percentage }) => (
                        <li
                            className={style.item}
                            key={id}
                            style={{ backgroundColor: createColor() }}
                        >
                            <span className={style.label}>{label}</span>
                            <span className={style.percentage}>{percentage}%</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
};

StatisticList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string,
          label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd']),
          percentage: PropTypes.number,
        }),
      ).isRequired,
};

export default StatisticList;