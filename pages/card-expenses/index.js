import React, { useState } from "react";
import OtherCategories from "../../components/OtherCategories";
import Card from "../../components/Card";
import EXPENSE from "../../data/expense";
import CARDS from "../../data/cards";
import { AnimatePresence } from "framer-motion";
import TinderCard from "../../components/TinderCard";

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
    <div className="flex flex-wrap gap-4 items-stretch">
      {expense.map((i, index) => (
        <Card key={i.name} card={i} />
      ))}
    </div>
  );
}

export default CardExpenses;
