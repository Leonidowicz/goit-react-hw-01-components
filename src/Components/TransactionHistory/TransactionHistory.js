import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';
const TransactionHistory = ({ items }) => (
    <table class={styles.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map((obj, idx) => (
                <tr
                    key={obj.id}
                    style={{
                        backgroundColor: !(idx % 2) ? 'white' : '#ecf1f3',
                    }}
                >
                    <td>{obj.type}</td>
                    <td>{obj.amount}</td>
                    <td>{obj.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
TransactionHistory.propTypes = { items: PropTypes.array.isRequired };

export default TransactionHistory;
