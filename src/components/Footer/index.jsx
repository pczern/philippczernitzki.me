import React from 'react'
import { LinkInternal, LinkExternal } from '../Link'
import Icon, { BrandIcon } from '../../components/Icon'
import { BoxedContainer } from '../Container'
import css from './index.scss'

function Footer() {
  return (
    // const posts = get(this, 'props.data.allMarkdownRemark.edges')
    <footer className={css.footer}>
      <BoxedContainer>
        <div className={css.footer__body}>
          <div className={css.footer__col}>
            <h3 className={css.footer__headline}>Incredible Articles</h3>
            <ul className={css.footer__linkList}>
              <li className={css.footer__item}>
                <LinkInternal to="/blog/my-youtube-channel">
                  My Youtube Channel
                </LinkInternal>
              </li>
              <li className={css.footer__item}>
                <LinkInternal to="/blog/motivation">
                  Motiviation Musik
                </LinkInternal>
              </li>
              <li className={css.footer__item}>
                <LinkInternal to="/blog/best-youtube">
                  Best Youtube Channels for Entrepreneurs
                </LinkInternal>
              </li>
              <li className={css.footer__item}>
                {/* <LinkInternal to="/blog/sport">
                  Sport, warum, wann und wie?
                </LinkInternal> */}
              </li>
            </ul>
          </div>
          <div className={css.footer__col}>
            <h3 className={css.footer__headline}>Ressources</h3>
            <ul className={css.footer__linkList}>
              <li className={css.footer__item}>
                <LinkInternal to="/blog/motivation">
                  Motivation Musik
                </LinkInternal>
              </li>
              <li className={css.footer__item}>
                <LinkInternal to="/blog/best-youtube">
                  Best Youtube Channels for Entrepreneurs
                </LinkInternal>
              </li>
              <li className={css.footer__item}>
                <LinkInternal to="/books">Recommended Books</LinkInternal>
              </li>
              <li className={css.footer__item}>
                {/* <LinkInternal to="/blog/sport">
                  Sport, warum, wann und wie?
                </LinkInternal> */}
              </li>
            </ul>
          </div>
          <div className={css.footer__col}>
            <h3 className={css.footer__headline}>Find Me</h3>
            <ul className={css.footer__linkList}>
              <li className={css.footer__itemWithIcon}>
                <LinkExternal to="mailto:philipp.czernitzki@gmail.com">
                  <Icon className={css.footer__icon} src="paper-plane" />philipp.czernitzki@gmail.com
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
              {/* <LinkItem to="https://stackoverflow.com/users/3885001/speeddeveloper" target="_blank"><cssdIcon src="stack-overflow" />Stack Overflow</LinkItem> */}
              {/* <LinkItem to="https://www.linkedin.com/in/philipp-czernitzki-08465894/" target="_blank"><cssdIcon src="linkedin-square" />LinkedIn</LinkItem> */}
              <li className={css.footer__itemWithIcon}>
                <LinkExternal
                  to="skype:philipp.czernitzki@gmail.com?add"
                  target="_blank"
                >
                  <BrandIcon className={css.footer__icon} src="skype" />Skype
                </LinkExternal>
              </li>
              {/* <LinkItem to="https://stackoverflow.com/users/3885001/speeddeveloper" target="_blank"><cssdIcon src="wordpress" />WordPress</LinkItem> */}
              <li className={css.footer__itemWithIcon}>
                <LinkExternal to="http://bcert.me/szssafdr" target="_blank">
                  <BrandIcon className={css.footer__icon} src="android" />Android
                  Certified Dev
                </LinkExternal>
              </li>
            </ul>
          </div>
        </div>
      </BoxedContainer>
    </footer>
  )
}
export default Footer
