import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={css.transactionsTable}>
      <thead className={css.transactionsTableHead}>
        <tr className={css.transactionsTableRow}>
          <th className={css.transactionsTableCell}>Type</th>
          <th className={css.transactionsTableCell}>Amount</th>
          <th className={css.transactionsTableCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr className={css.transactionsTableRow} key={id}>
            <td
              className={`${css.transactionsTypeCell} ${css.transactionsTableCell}`}
            >
              {type}
            </td>
            <td
              className={`${css.transactionsPropertiesCell} ${css.transactionsTableCell}`}
            >
              {amount}
            </td>
            <td
              className={`${css.transactionsPropertiesCell} ${css.transactionsTableCell}`}
            >
              {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
