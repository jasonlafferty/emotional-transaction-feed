import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EMOTIONS, EMOTIONS_EMOJI } from '../constants/index';
import { updateEmotion } from '../actions/index';

const FORGROUND_COLOR = '#7f5dc1';
const FORGROUND_COLOR_ALT = '#4d92cc';
const PI = 3.14;

// config
const MENU_ITEMS = EMOTIONS.length;
const OPEN_DISTANCE = 105;
const OPENING_ANGLE = PI * 2;

const WIDTH = 500;
const HEIGHT = 500;

// https://codepen.io/lbebber/pen/RNgBPP

const EmotionIcon = styled.div`
  height: 100px;

  .menu-open{
    display:none;
  }
  .menu-item{
    background: ${FORGROUND_COLOR};
    border-radius:100%;
    width:80px;
    height:80px;
    margin-left:-40px;
    position:absolute;
    top:20px;
    color:${FORGROUND_COLOR_ALT};
    text-align:center;
    line-height:80px;
    transform:translate3d(0,0,0);
    transition:transform ease-out 200ms;
  }
  .menu{
    filter:url('#goo');
    // debug
    // background:rgba(255,0,0,0.2);
    width:${WIDTH}px;
    height:${HEIGHT}px;
    position:absolute;
    left:50%;
    margin-left:-${WIDTH / 2}px;
    padding-top:20px;
    padding-left:${WIDTH / 2}px;
    box-sizing:border-box;
    font-size:20px;
    text-align:left;
  }

  .menu-item{
    &:hover{
      background:${FORGROUND_COLOR_ALT};
      color:$fg;
    }
    ${EMOTIONS.map((e, index) => `
      &:nth-child(${index + 2}){
        transition-duration:180ms;
      }
    `)}
  }

  .menu-open-button{
    background:${FORGROUND_COLOR};
    font-size: 40px;
    border-radius:100%;
    width:80px;
    height:80px;
    margin-left:-40px;
    position:absolute;
    top:20px;
    color:${FORGROUND_COLOR_ALT};
    text-align:center;
    line-height:80px;
    transform:translate3d(0,0,0);
    transition:transform ease-out 200ms;
    z-index:2;
    transition-timing-function:cubic-bezier(0.175, 0.885, 0.320, 1.275);
    transition-duration:400ms;
    transform:scale(1.1,1.1) translate3d(0,0,0);
    cursor:pointer;
  }
  .menu-open-button:hover{
    transform:scale(1.2,1.2) translate3d(0,0,0);
  }
  .menu-open.checked+.menu-open-button{
    transition-timing-function:linear;
    transition-duration:200ms;
    transform:scale(0.8,0.8) translate3d(0,0,0);
  }

  .menu-open:checked~.menu-item{
    transition-timing-function:cubic-bezier(0.935, 0.000, 0.340, 1.330);
    ${EMOTIONS.map((e, index) => {
    const angle = ((PI - OPENING_ANGLE) / 2) + ((OPENING_ANGLE / (MENU_ITEMS - 1)) * (index - 1));
    return `
      &:nth-child(${index + 2}){
        transition-duration:${80 + (100 * index)}ms;
        transform:translate3d(${Math.cos(angle) * OPEN_DISTANCE}px,${Math.sin(angle) * OPEN_DISTANCE}px,0);
      }
    `;
  })}
  }
  `;

const Icon = styled.i`
  font-size: 40px;
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  `;

const Cover = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  background-color: #f1f3f7;
  opacity: 0;
  transition: opacity 0.2s ease-in;

  &.fadeIn{
    opacity: 0.4;
  }
  `;

class TransactionList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
    this.handeClick = this.handeClick.bind(this);
  }
  makeHandleClick(emotion) {
    return () => this.handeClick(emotion);
  }
  handeClick(emotion) {
    const { updateEmotion, id } = this.props;
    updateEmotion(id, emotion);
    this.setState({ checked: false });
  }
  handleChange(event) {
    const { checked } = event.target;
    this.setState({ checked });
  }
  render() {
    const { emotion, id } = this.props;
    return (
      <EmotionIcon>
        <Cover
          className={`${ this.state.checked ? 'fadeIn' : ''}`}
        />
        <nav
          className="menu"
        >
          <input
            type="checkbox"
            href="#"
            className={'menu-open'}
            checked={this.state.checked}
            onChange={this.handleChange}
            name={`menu-open-${id}`}
            id={`menu-open-${id}`}
          />
          <label className="menu-open-button" htmlFor={`menu-open-${id}`}>{EMOTIONS_EMOJI[emotion]}</label>
          {EMOTIONS.map(e =>
            (<a
              key={e}
              className="menu-item"
              onClick={this.makeHandleClick(e)}
            >
              <Icon>{EMOTIONS_EMOJI[e]}</Icon>
            </a>),
          )}
        </nav>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="shadowed-goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
              <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
              <feOffset in="shadow" dx="1" dy="1" result="shadow" />
              <feComposite in2="shadow" in="goo" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
      </EmotionIcon>
    );
  }
}

TransactionList.propTypes = {
  id: PropTypes.string, // eslint-disable-line
  emotion: PropTypes.string, // eslint-disable-line
};

TransactionList.defaultProps = {
  id: '',
  emotion: '',
};

const mapDispatchToProps = dispatch => ({
  updateEmotion: (id, emotion) =>
    dispatch(updateEmotion(id, emotion)),
});

export default connect(null, mapDispatchToProps)(TransactionList);
