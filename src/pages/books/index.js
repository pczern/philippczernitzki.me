import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import {BoxedContainer} from '../../components/Container';


import bookList from './covers.json';

const books = bookList.books;
console.log(bookList.books);
const BookContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 1em;
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
    <section>
      <p>Stellt euch vor es gibt einen Weg sich das Wissen von den besten, angesehensten Personen einer Industrie anzueignen. Bücher geben uns diesen Weg. Du lernst ihre Denkweisen, ihre Persönlichkeiten und ihr Wissen in wenigen Stunden kennen. Deine eigene Persönlichkeit erweitert sich und du bist um vieles bereichert, dass dir helfen kann diese Welt besser zu machen. Deshalb liebe ich Bücher. Wir haben die Möglichkeit neue einzigartige Persönlichkeiten uns anzueignen, um selbst zu Top Performern zu werden.</p>
      <p>Im nächsten Abschnitt zeige ich Dir die Bücher, welche mich beeinflusst haben.</p>
    </section>
    <section>
      <h2>Meine Buchempfehlungen</h2>
      <BookContainer>
        {books.map((book, index) => (
          <StyledBook key={index} src={require(`./covers/${book.src}`)} title={book.title} book={book.description}/>
        ))}
      </BookContainer>
    </section>
    <section>
      <h2>Warum Englisch?</h2>
      <p>Die meisten Bücher in meiner Liste sind auf Englisch. Wenn ihr startet Bücher auf Englisch zu lesen, habt ihr ein viel besseres Verständnis der Sprache. Als Programmierer seid ihr auf Englisch angewiesen, so finde ich es immer exzellent mein Englisch zu verbessern.</p>
    </section>

    </BoxedContainer>

)
