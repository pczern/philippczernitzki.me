import React from 'react'
import { LinkInternal } from '../Link'
import css from './index.scss'

class Header extends React.Component {
  render() {
    return (
      <header className={css.header}>
        <nav className={css.header__nav}>
          <LinkInternal to="/">
            <h2 className={css.header__title}>Philipp Czernitzki</h2>
            <h3 className={css.header__subtitle}>
              Web & App Engineer aus Deutschland
            </h3>
          </LinkInternal>
          <ul className={css.header__navList}>
            <li className={css.header__navItem}>
              <LinkInternal to="/blog">Blog</LinkInternal>
            </li>
            <li className={css.header__navItem}>
              <LinkInternal to="/training">Training</LinkInternal>
            </li>
            {/* <LinkItem to="/">Bücher</LinkItem> */}
          </ul>
        </nav>
      </header>
    )
  }
}
export default Header
