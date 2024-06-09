import React from 'react';
import { Link } from 'react-router-dom'
import './button.scss';

function Button({ classes, text, onClick, to, isLink = false, color, backgroundColor, isBackButton = false, isSecondary = false }) {
  const buttonStyle = {
    color: color,
    backgroundColor: backgroundColor,
  }
  if (isLink) {
    return <Link to={to} onClick={onClick}><button className={"noselect " + classes} style={buttonStyle}>{text}</button></Link>;
  } else if (isBackButton) {
    buttonStyle.padding = `0`;
    return <button className={`back-button ${classes} noselect`} style={buttonStyle} onClick={onClick}>
      {/* <img alt={`button`} src="/assets/chooseFlow/icon/icon/ic40_chevron_left_white_outline.png" /> */}
      <span className="left-chevron">&#8249;</span>
    </button>;
  } else {
    return <button className={classes + ' ' + (isSecondary ? "button-secondary noselect " : "")} style={buttonStyle} onClick={onClick}>{text}</button>;
  }
}

export default Button;
