import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
const colors = {
    0: '#50c4f7',
    1: '#a33df5',
    2: '#e64c66',
    3: '#6c7176',
    4: '#50c4f7',
};
const Statistics = ({ title, data }) => (
    <section className={styles.statistics}>
        {{ title } && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            {data.map((obj, idx) => (
                <li
                    key={obj.id}
                    className={styles.item}
                    style={{ backgroundColor: colors[idx] }}
                >
                    <span className={styles.label}>{obj.label}</span>
                    <span className={styles.percentage}>{obj.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired,
};
export default Statistics;
