import Head from "next/head";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
// import RotateIcon from "../icons/RotateIcon";

export default function Main() {
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
