import PropTypes from 'prop-types';
import Statistics from './Statistics';
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
                            <Statistics
                                label={stat.label}
                                percentage={stat.percentage}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
};

StatisticList.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default StatisticList;