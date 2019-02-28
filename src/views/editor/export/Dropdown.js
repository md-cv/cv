import React, { Component } from 'react';
import styles from './Dropdown.module.css';
import { connect } from 'react-redux';
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        left: 0,
        top: 0
      }
    };
  }
  componentDidMount() {
    const el = this.props.hoverEl;
    const { left, height, top } = el.getBoundingClientRect();
    this.setState({
      style: {
        left: left + 'px',
        top: height + top + 'px'
      }
    });
  }
  onAction(key) {
    this.props.onClickItem(key);
    this.props.mouseOut();
  }
  render() {
    return (
      <div
        className={styles.dropdown}
        style={this.state.style}
        onMouseEnter={this.props.mouseIn}
        onMouseLeave={this.props.mouseOut}
      >
        {this.props.items.forEach(item => (
          <a
            className={styles.link}
            href="javascript:;"
            onClick={() => this.onAction(item.key)}
          >
            {item.title}
          </a>
        ))}
      </div>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {};
  }
)(Dropdown);
