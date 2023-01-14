import React, { useState } from "react";
import OtherCategories from "../../components/OtherCategories";
import Card from "../../components/Card";
import EXPENSE from "../../data/expense";
import CARDS from "../../data/cards";
import { AnimatePresence } from "framer-motion";
import TinderCard from "../../components/TinderCard";
import TotalSpend from "../../components/TotalSpend";
import { Box } from "@chakra-ui/react";

function CardExpenses() {
  const [expense, setExpense] = useState(EXPENSE);
  const [cards, setCards] = useState(CARDS);
  const [result, setResult] = useState({
    like: 0,
    nope: 0,
    superlike: 0,
  });
  const [history, setHistory] = useState([]);
  // index of last card
  const activeIndex = cards.length - 1;

  const removeCard = (oldCard, swipe) => {
    setHistory((current) => [...current, { ...oldCard, swipe }]);
    setCards((current) =>
      current.filter((card) => {
        return card.id !== oldCard.id;
      })
    );
    setResult((current) => ({ ...current, [swipe]: current[swipe] + 1 }));
  };

  const undoSwipe = () => {
    const newCard = history.pop();
    if (newCard) {
      const { swipe } = newCard;
      setHistory((current) =>
        current.filter((card) => {
          return card.id !== newCard.id;
        })
      );
      setResult((current) => ({ ...current, [swipe]: current[swipe] - 1 }));
      setCards((current) => [...current, newCard]);
    }
  };

  return (
    <>
      <div className="my-4 flex items-center justify-center">
        <TotalSpend />
      </div>

      <div className="my-4 flex items-center justify-center">
        <h1 className="font-bold text-[32px] leading-9 text-center">
          RM 120.50
        </h1>
      </div>

      <div className="relative flex flex-col justify-center items-center w-full h-[130vw] gradient">
        <AnimatePresence>
          {cards.map((card, index) => (
            <TinderCard
              key={card.name}
              active={index === activeIndex}
              removeCard={removeCard}
              card={card}
            />
          ))}
        </AnimatePresence>
      </div>

      {cards.length === 0 ? (
        <h1 className="text-3xl font-bold underline">End of Stack</h1>
      ) : null}

      <div className="grid grid-cols-3 gap-4 p-2">
        {expense.map((i, index) => (
          <Card key={i.name} card={i} />
        ))}
      </div>

      <div className="my-4 flex items-center justify-center">
        <OtherCategories />
      </div>
    </>
  );
}

export default CardExpenses;
