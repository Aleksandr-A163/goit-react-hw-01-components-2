import React from "react";
import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {

return (
    <table className={styles.transaction_history}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
};
TransactionHistory.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number,
};

export default TransactionHistory;