import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import {BoxedContainer} from '../../components/Container';

import IMAGE_ANDROID from './covers/android.jpg';
import IMAGE_C_VON_KOPF_BIS_FUSS from './covers/cvonkopfbisfuss.jpg';
import IMAGE_GRUNDKURS_GUTES_WEBDESIGN from './covers/grundkursguteswebdesign.jpg';
import IMAGE_HOW_TO_WIN_FRIENDS_AND_INFLUENCE_PEOPLE from './covers/howtowinfriendsandinfluencepeople.jpg';
import IMAGE_HTML_UND_CSS_VON_KOPF_BIS_FUSS from './covers/htmlundcssvonkopfbisfuss.jpg';
import IMAGE_JAVA7 from './covers/java7.jpg';
import IMAGE_JAVASCRIPT_AND_JQUERY from './covers/javascriptandjquery.jpg';
import IMAGE_JAVA_VON_KOPF_BIS_FUSS from './covers/javavonkopfbisfuss.jpg';
import IMAGE_KOPF_SCHLAEGT_KAPITAL from './covers/cvonkopfbisfuss.jpg';
import IMAGE_OBJEKT_ORIENTIERTE_ANALYSE_VON_KOPF_BIS_FUSS from './covers/objektorientierteanalysevonkopfbisfuss.jpg';
import IMAGE_OUTWITTING_THE_DEVIL from './covers/outwittingthedevil.jpg';
import IMAGE_PHP_UND_MYSQL_VON_KOPF_BIS_FUSS from './covers/phpundmysqlvonkopfbisfuss.jpg';
import IMAGE_RESPONSIVE_WEBDESIGN from './covers/responsivewebdesign.jpg';
import IMAGE_SCREW_IT_LETS_DO_IT from './covers/screwitletsdoit.jpg';
import IMAGE_SOFT_SKILLS from './covers/softskills.jpg';
import IMAGE_SOFTWARE_ENTWICKLUNG_VON_KOPF_BIS_FUSS from './covers/softwareentwicklungvonkopfbisfuss.jpg'
import IMAGE_THE_E_MYTH_REVISITED from './covers/theemythrevisited.jpg';
import IMAGE_WORDPRESS_3 from './covers/wordpress3.jpg';
import IMAGE_ZERO_TO_ONE from './covers/zerotoone.jpg';

const books = [
  {
    title: 'Android',
    src: IMAGE_ANDROID,
    content: 'Lorem ipsum'
  },
  {
    title: 'C von Kopf bis Fuß',
    src: IMAGE_C_VON_KOPF_BIS_FUSS,
    content: 'Lorem ipsum'
  },
  {
    title: '',
    src: IMAGE_GRUNDKURS_GUTES_WEBDESIGN,
    content: ''
  },
  {
    title: '',
    src: IMAGE_HOW_TO_WIN_FRIENDS_AND_INFLUENCE_PEOPLE,
    content: ''
  },
  {
    title: '',
    src: IMAGE_HTML_UND_CSS_VON_KOPF_BIS_FUSS,
    content: ''
  },
  {
    title: '',
    src: IMAGE_JAVA7,
    content: ''
  },
  {
    title: '',
    src: IMAGE_JAVASCRIPT_AND_JQUERY,
    content: ''
  },
  {
    title: '',
    src: IMAGE_JAVA_VON_KOPF_BIS_FUSS,
    content: ''
  },
  {
    title: '',
    src: IMAGE_KOPF_SCHLAEGT_KAPITAL,
    content: ''
  },
  {
    title: '',
    src: IMAGE_OBJEKT_ORIENTIERTE_ANALYSE_VON_KOPF_BIS_FUSS,
    content: ''
  },
  {
    title: '',
    src: IMAGE_OUTWITTING_THE_DEVIL,
    content: ''
  },
  {
    title: '',
    src: IMAGE_PHP_UND_MYSQL_VON_KOPF_BIS_FUSS,
    content: ''
  },
  {
    title: '',
    src: IMAGE_RESPONSIVE_WEBDESIGN,
    content: ''
  },
  {
    title: '',
    src: IMAGE_SCREW_IT_LETS_DO_IT,
    content: ''
  },
  {
    title: '',
    src: IMAGE_SOFT_SKILLS,
    content: ''
  },
  {
    title: '',
    src: IMAGE_SOFTWARE_ENTWICKLUNG_VON_KOPF_BIS_FUSS,
    content: ''
  },
  {
    title: '',
    src: IMAGE_THE_E_MYTH_REVISITED,
    content: ''
  },
  {
    title: '',
    src: IMAGE_WORDPRESS_3,
    content: ''
  },
  {
    title: '',
    src: IMAGE_ZERO_TO_ONE,
    content: ''
  },
  {
    title: '',
    src: require('./covers/howtotraveltheworldon50dollaraday.jpg'),
    content: ''
  },
  {
    title: '',
    src: require('./covers/extremeownership.jpg'),
    content: ''
  },
  {
    title: '',
    src: require('./covers/understandingecmascript6.jpg'),
    content: ''
  },
  {
    title: '',
    src: require('./covers/hownottodie.jpg'),
    content: ''
  }
]

const BookContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const BookImage = styled.img`
  height: auto;
`
const Book = (props) => (
  <div className={props.className}>
    <BookImage src={props.src} />
  </div>
)

const StyledBook = styled(Book)`

  float: left;

    margin-right: 10px;
    margin-left: 10px;


    margin-bottom: 30px;
    img{
      height: auto;
      height: 117px;
        width: 87px;
    }
`


export default (props) => (
  <BoxedContainer className={"article-styles"}>
    <h1>Bücher</h1>
    <p>Stellt euch vor es gibt einen Weg sich das Wissen von den besten, angesehensten Personen einer Industrie anzueignen. Bücher geben uns diesen Weg. Du lernst ihre Denkweisen, ihre Persönlichkeiten und ihr Wissen in wenigen Stunden kennen. Deine eigene Persönlichkeit erweitert sich und du bist um vieles bereichert, dass dir helfen kann diese Welt besser zu machen. Deshalb liebe ich Bücher. Wir haben die Möglichkeit neue einzigartige Persönlichkeiten uns anzueignen, um selbst zu Top Performern zu werden.</p>
    <p>Im nächsten Abschnitt zeige ich Dir die Bücher, welche mich beeinflusst haben.</p>
    <h2>Meine Buchempfehlungen</h2>
      <BookContainer>
        {books.map((book, index) => (
          <StyledBook key={index} src={book.src} title={book.title} book={book.description}/>
        ))}
      </BookContainer>
      <h2>Warum Englisch?</h2>
      <p>Die meisten Bücher in meiner Liste sind auf Englisch. Wenn ihr startet Bücher auf Englisch zu lesen, habt ihr ein viel besseres Verständnis der Sprache. Als Programmierer seid ihr auf Englisch angewiesen, so finde ich es immer exzellent mein Englisch zu verbessern.</p>


    </BoxedContainer>

)
