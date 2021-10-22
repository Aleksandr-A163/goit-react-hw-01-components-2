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
            <h2 className={style.title}>{title}</h2>
            <div className={style.wrapper}>
                <ul className={style.statList}>
                    {stats.map(stat => (
                        <li
                            className={style.item}
                            key={stat.id}
                            style={{ backgroundColor: createColor() }}
                        >
                            <span className={style.label}>{stat.label}</span>
                            <span className={style.percentage}>{stat.percentage}%</span>
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
          id: PropTypes.string.isRequired,
          label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd']).isRequired,
          percentage: PropTypes.number.isRequired,
        }),
      ).isRequired,
};

export default StatisticList;