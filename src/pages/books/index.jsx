import React from 'react'

import Book from './Book'
import BookList from './BookList'
import { BoxedContainer } from '../../components/Container'

import books from './books'

export default () => (
  <BoxedContainer className="article-styles">
    <h1>Bücher</h1>
    <section>
      <p>
        Stellt euch vor es gibt einen Weg sich das Wissen von den besten,
        angesehensten Personen einer Industrie anzueignen. Bücher geben uns
        diesen Weg. Du lernst ihre Denkweisen, ihre Persönlichkeiten und ihr
        Wissen in wenigen Stunden kennen. Deine eigene Persönlichkeit erweitert
        sich und du bist um vieles bereichert, dass dir helfen kann diese Welt
        besser zu machen. Deshalb liebe ich Bücher. Wir haben die Möglichkeit
        neue einzigartige Persönlichkeiten uns anzueignen, um selbst zu Top
        Performern zu werden.
      </p>
      <p>
        Im nächsten Abschnitt zeige ich Dir die Bücher, welche mich beeinflusst
        haben.
      </p>
    </section>
    <section>
      <h2>Meine Buchempfehlungen</h2>
      <BookList>
        {books.map((book, index) => (
          <Book
            key={index}
            src={book.src}
            title={book.title}
            book={book.description}
          />
        ))}
      </BookList>
    </section>
    <section>
      <h2>Warum Englisch?</h2>
      <p>
        Die meisten Bücher in meiner Liste sind auf Englisch. Wenn ihr startet
        Bücher auf Englisch zu lesen, habt ihr ein viel besseres Verständnis der
        Sprache. Als Programmierer seid ihr auf Englisch angewiesen, so finde
        ich es immer exzellent mein Englisch zu verbessern.
      </p>
    </section>
  </BoxedContainer>
)
