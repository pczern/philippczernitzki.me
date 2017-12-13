
import React from 'react';
import styled from 'styled-components';

import Link from 'gatsby-link';


export default (props) => (


    <div>
      <h3>
        <Link style={{ boxShadow: 'none' }} to={props.link}>
          {props.title}
        </Link>
      </h3>
      <small>{props.date}</small>
      <p dangerouslySetInnerHTML={{ __html: props.children }} />
    </div>


)
