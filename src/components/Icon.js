import React, { Component } from 'react';
import classNames from 'classnames';
const Icon = props => <i {...props} className={classNames( props.className, 'fa', `fa-${props.src}`)}  />;
export default Icon;
