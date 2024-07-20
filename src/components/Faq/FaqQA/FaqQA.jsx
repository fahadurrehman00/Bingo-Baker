// /components/FaqQA.js

import React, { useState, useRef } from "react";
import QA from './QA';

const FaqQA = () => {
  const [showAnswers, setShowAnswers] = useState({});
  const answerRefs = useRef([]);

  const faqs = [
    {
      heading: "How do I generate bingo cards?",
      description: (
        <>
          Enter the bingo title, select the size of your bingo card grid, and
          type your items into the squares. Whatever items you enter into the
          squares will be shuffled around when the bingo cards are generated.{" "}
          <br />
          You can add numbers (like in traditional bingo), words, phrases, or
          pictures to your card. You can also customize the colors of the
          squares, and the bingo card itself. <br />
          <strong>Tip: </strong>You can put text and an image into a square. Use
          the text shadow to make the text "pop" against the background image.
          You can also change the vertical alignment of the text in the square
          so it does not cover the important parts of the image. <br />
          If your center square is the free space (and should not be shuffled
          around the card), make sure you check the "The center square is the
          free space" checkbox. Only 5x5 and 3x3 have a free space. <br />
          By default, when your cards are generated, the items are shuffled over
          the entire card. In traditional bingo, items are fixed to a certain
          column (and only shuffled within their respective column). To enable
          that, check the "Shuffle items only within their column" checkbox.
        </>
      ),
    },
    {
      heading: "How does question/answer-style bingo work?",
      description: (
        <>
          When you create your card, you can flip over a square to enter a
          clue/question. Whatever you enter on the back of your square will
          appear in the call list for your bingo game. For example, to help kids
          learn animal words, you might put the word 'Bear' on the front of the
          square, and a picture of the bear on the back. When you play the game,
          the image of the bear will appear in the call list for your students
          to see. If they recognize the literal word 'Bear' on their card, they
          would mark it. <br />
          You can use question/answer-style bingo to quiz players about
          anything!
        </>
      ),
    },
    {
      heading: "How many bingo cards can I generate?",
      description: (
        <>
          Enter the bingo title, select the size of your bingo card grid, and
          type your items into the squares. Whatever items you enter into the
          squares will be shuffled around when the bingo cards are generated.{" "}
          <br />
          You can add numbers (like in traditional bingo), words, phrases, or
          pictures to your card. You can also customize the colors of the
          squares, and the bingo card itself.
        </>
      ),
    },
    {
      heading: "How do I print bingo cards?",
      description:
        "After generating bingo cards or finding an existing bingo card, enter the number of cards you want to print, and select how many cards you want to print per page. You can print 1, 2 or 4 cards per page. Make sure you switch to landscape print mode on your printer to print 2 cards per page.",
    },
    {
      heading: "How do I play virtual bingo?",
      description:
        "To play a virtual bingo game, simply send your players the bingo card URL. They can generate a virtual bingo card instantly. Here are more detailed instructions to play virtual bingo.",
    },
    {
      heading: "How do I call items?",
      description:
        "A call sheet is included with your bingo game. Simply read the items off in the order you see them. You can also print the call sheet, cut it out, and pull the items from a hat.",
    },
    {
      heading: "How many items should I put on my bingo card?",
      description:
        "You should at least fill the entire bingo card grid. A traditional number bingo card has 75 items. You can add up to 350 squares to your card.",
    },
    {
      heading: "I need more help",
      description:
        "See the help page. But I strongly recommend you just play around. It's bingo. You won't break anything.",
    },
  ];

  const toggleAnswer = (index) => {
    setShowAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="py-6">
      {faqs.map((faq, index) => (
        <QA
          faq={faq}
          index={index}
          showAnswers={showAnswers}
          toggleAnswer={toggleAnswer}
          answerRefs={answerRefs}
          key={index}
        />
      ))}
    </div>
  );
};

export default FaqQA;
