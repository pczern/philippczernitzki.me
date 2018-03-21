import React from 'react'
import { LinkInternal, LinkExternal } from '../Link'
import Icon, { BrandIcon } from '../../components/Icon'
import css from './index.scss'

function Footer() {
  return (
    // const posts = get(this, 'props.data.allMarkdownRemark.edges')
    <footer className={css.footer}>
      <div className={css.footer__body}>
        <div className={css.footer__col}>
          <h3 className={css.footer__headline}>Neuste Beiträge</h3>
          <ul className={css.footer__linkList}>
            <li className={css.footer__item}>
              <LinkInternal to="/blog/react-starte-jetzt">
                React, starte jetzt
              </LinkInternal>
            </li>
            <li className={css.footer__item}>
              <LinkInternal to="/blog/motivation">
                Motiviation Musik
              </LinkInternal>
            </li>
            <li className={css.footer__item}>
              <LinkInternal to="/blog/beste-youtuber">
                Die besten YouTube Channels für Entrepreneurs
              </LinkInternal>
            </li>
            <li className={css.footer__item}>
              <LinkInternal to="/blog/sport">
                Sport, warum, wann und wie?
              </LinkInternal>
            </li>
          </ul>
        </div>
        <div className={css.footer__col}>
          <h3 className={css.footer__headline}>Ressourcen</h3>
          <ul className={css.footer__linkList}>
            <li className={css.footer__item}>
              <LinkInternal to="/blog/motivation">
                Motivation Musik
              </LinkInternal>
            </li>
            <li className={css.footer__item}>
              <LinkInternal to="/blog/best-youtube">
                Beste Youtube Channels
              </LinkInternal>
            </li>
            <li className={css.footer__item}>
              <LinkInternal to="/books">Empfohlene Bücher</LinkInternal>
            </li>
            <li className={css.footer__item}>
              <LinkInternal to="/blog/sport">
                Sport, warum, wann und wie?
              </LinkInternal>
            </li>
          </ul>
        </div>
        <div className={css.footer__col}>
          <h3 className={css.footer__headline}>Finde Mich</h3>
          <ul className={css.footer__linkList}>
            <li className={css.footer__itemWithIcon}>
              <LinkExternal to="mailto:philipp.czernitzki@gmail.com">
                <Icon className={css.footer__itemWithIcon} src="paper-plane" />philipp.czernitzki@gmail.com
              </LinkExternal>
            </li>
            <li className={css.footer__itemWithIcon}>
              <LinkExternal
                to="https://github.com/speeddeveloper"
                target="_blank"
              >
                <BrandIcon className={css.footer__icon} src="github" />Github
              </LinkExternal>
            </li>
            {/* <LinkItem to="https://stackoverflow.com/users/3885001/speeddeveloper" target="_blank"><StyledIcon src="stack-overflow" />Stack Overflow</LinkItem> */}
            {/* <LinkItem to="https://www.linkedin.com/in/philipp-czernitzki-08465894/" target="_blank"><StyledIcon src="linkedin-square" />LinkedIn</LinkItem> */}
            <li className={css.footer__itemWithIcon}>
              <LinkExternal
                to="skype:philipp.czernitzki@gmail.com?add"
                target="_blank"
              >
                <BrandIcon className={css.footer_icon} src="skype" />Skype
              </LinkExternal>
            </li>
            {/* <LinkItem to="https://stackoverflow.com/users/3885001/speeddeveloper" target="_blank"><StyledIcon src="wordpress" />WordPress</LinkItem> */}
            <li className={css.footer__itemWithIcon}>
              <LinkExternal to="http://bcert.me/szssafdr" target="_blank">
                <BrandIcon className={css.footer__icon} src="android" />Android
                Certified Dev
              </LinkExternal>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
