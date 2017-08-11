import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBox from './searchBox.jsx';

const Header = styled.div`
  position: fixed;
  background-color: #222;
  height: 50px;
  padding: 20px;
  color: white;
  width: 100%;
  z-index: 99;
`;

class TransactionList extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header>
        <SearchBox />
      </Header>
    );
  }
}

export default connect(null, null)(TransactionList);
