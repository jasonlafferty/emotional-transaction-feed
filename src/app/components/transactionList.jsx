import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TransactionCard from './transactionCard.jsx';
import { isStringContainedInStrings, sortTransitionsByDate } from '../utils/index';

const List = styled.div`
  background: #f2f4f8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  font-family: "Open Sans";
  padding-top: 110px;
`;

class TransactionList extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { transactions, searchString } = this.props;
    return (
      <List>
        {transactions.sort(sortTransitionsByDate).reduce((memo, transaction) => {
          const { emotion, description } = transaction;
          if (isStringContainedInStrings(searchString, [emotion, description])) {
            return [
              ...memo,
              <TransactionCard
                key={transaction.id}
                {...transaction}
              />];
          }
          return memo;
        }, [])}
      </List>
    );
  }
}


TransactionList.propTypes = {
  transactions: PropTypes.array, // eslint-disable-line
  searchString: PropTypes.string,
};

TransactionList.defaultProps = {
  transactions: [],
  searchString: '',
};

const mapStateToProps = state => ({
  transactions: state.transactions,
  searchString: state.searchString.toLocaleLowerCase(),
});

export default connect(mapStateToProps, null)(TransactionList);
