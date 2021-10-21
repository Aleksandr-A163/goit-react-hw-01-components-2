import React from "react";
import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => (
    <table className={styles.transaction_history}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map((transaction) => (
                <TransactionItem
                    id={transaction.id}
                    type={transaction.type}
                    amount={transaction.amount}
                    currency={transaction.currency}
                />
            ))}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};

export default TransactionHistory;