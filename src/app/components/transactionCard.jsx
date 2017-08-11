import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import human from 'human-time';
import { EMOTIONS } from '../constants/index';
import EmotionSelector from './emotionSelector.jsx';

const Card = styled.div`
  background-color: #fff;
  border: $card-border;
  border-radius: 10px;
  box-shadow: 0 14px 26px rgba(0,0,0,0.04);
  cursor: pointer;
  flex-basis: 15em;
  flex-grow: 1;
  margin: 0 10px 10px 10px;
  position: relative;
  transition: all 0.2s ease-in-out;
`;

const Text = styled.p`
  font-size: 17px;
  color: #4C5656;
  margin-top: 30px;
  z-index: 1000;
  transition: color 0.3s ease-out;
`;

class TransactionCard extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      id,
      amount,
      created,
      currency,
      emotion,
      description,
      note,
    } = this.props;
    return (
      <Card>
        <Text>{human(new Date(created))}</Text>
        <Text>{amount} {currency}</Text>
        <EmotionSelector
          id={id}
          emotion={emotion}
        />
        <Text>{description}</Text>
        <Text>note: {note}</Text>
      </Card>
    );
  }
}


TransactionCard.propTypes = {
  id: PropTypes.string,
  amount: PropTypes.number,
  created: PropTypes.string,
  currency: PropTypes.string,
  emotion: PropTypes.oneOf(EMOTIONS),
  description: PropTypes.string,
  note: PropTypes.string,
};

TransactionCard.defaultProps = {
  id: '',
  amount: 0,
  created: '',
  currency: '',
  emotion: '',
  description: '',
  note: '',
};

export default connect(null, null)(TransactionCard);
