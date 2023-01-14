import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Card from "../components/Card";
import Counter from "../components/Counter";
import { AnimatePresence } from "framer-motion";
import CARDS from "../data/cards";
import RotateIcon from "../icons/RotateIcon";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
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
      <Head>
        <title>ZEE BY RHB</title>
        <meta name="description" content="Card Expenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        align-items="center"
        padding="2rem"
        className="bg-[#6BCDE7] m-0 p-0 h-screen"
      >
        <Heading as="h1" size="4xl" color="brand.darkpink">
          Your Weekly Expense Report is ready!
        </Heading>
        <Text color="#036B9C" fontSize="2xl" padding="2rem 0 10rem 0">
          9/1/2023 to 15/1/2023
        </Text>
        <Link href="/card-expenses">
          <Button
            backgroundColor="brand.purple"
            color="#FFFFFF"
            width="100%"
            height="3rem"
          >
            Let's Go
          </Button>
        </Link>
      </Box>
    </>
  );
}
