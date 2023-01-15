import React from "react";
import CardExpensePage from "../../public/cardexpense.svg";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

function CardExpense() {
  return (
    <div>
      <Box align-items="center" className="bg-[#6BCDE7] m-0 p-0 h-screen">
        <Link href="/card-expenses/tindering">
          <CardExpensePage />
        </Link>
      </Box>
    </div>
  );
}

export default CardExpense;
