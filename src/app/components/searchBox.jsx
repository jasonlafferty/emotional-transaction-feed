import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateSearchString } from '../actions/index';

const Input = styled.input`
  background-color: white;
  height: 25px;
  margin: 20px;
  color: #222;
  width: calc(100% - 90px);
  position: absolute;
  left: 0px;
`;

class SearchBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.updateSearchString(event.target.value);
  }
  render() {
    return (
      <Input type="text" value={this.props.searchString} onChange={this.handleChange} />
    );
  }
}

SearchBox.propTypes = {
  searchString: PropTypes.string, // eslint-disable-line
  updateSearchString: PropTypes.func, // eslint-disable-line
};

SearchBox.defaultProps = {
  searchString: '',
  updateSearchString: () => {},
};

const mapStateToProps = state => ({
  searchString: state.searchString,
});


const mapDispatchToProps = dispatch => ({
  updateSearchString: (id, emotion) =>
    dispatch(updateSearchString(id, emotion)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
