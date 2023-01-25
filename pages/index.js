import Head from "next/head";
import { useState } from "react";
// import TinderCard from "../components/TinderCard";
import Card from "../components/Card";
// import Counter from "../components/Counter";
// import { AnimatePresence } from "framer-motion";
import CARDS from "../data/cards";
import RotateIcon from "../icons/RotateIcon";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
// import RotateIcon from "../icons/RotateIcon";
import RHBHomepage from "../public/rhbhomepage.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>ZEE BY RHB</title>
        <meta name="description" content="Card Expenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box align-items="center" className="bg-[#6BCDE7] m-0 p-0 h-screen">
        <Link href="/onboarding">
            <RHBHomepage className="w-full" />
        </Link>
    </Box>

    </>
  );
}
