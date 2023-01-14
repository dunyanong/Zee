import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ActionGoalIncome = () => {
  return (
    <div>
        <Head>
            <title>ZEE BY RHB</title>
            <meta name="description" content="Card Expenses" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="min-h-screen bg-cyan-400 px-12 py-10 h-max">
            <Link legacyBehavior href="/onboarding">
                <a className="text-3xl text-purple-700 pt-10"><AiOutlineArrowLeft /></a>
            </Link>                        
            <div className="py-5">
                <h2 className="text-purple-700 text-l md:text-xl max-w-xl mx-auto font-bold">Let us set you up!</h2>
                <p className="text-purple-700 text-sm md:text-l max-w-xl mx-auto mt-3">A budget starts with what you have</p>
            </div>
            <h1 className="text-pink-500 text-xl py-5 md:text-2xl max-w-xl mx-auto font-extrabold">What is your monthly income?</h1>
            
            <div type="button" className="text-white font-extrabold bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg text-xl px-5 py-4 text-center mb-2">
                RM 0.00
            </div>
            <div className="pt-60 pb-3 flex justify-end">
            <Link legacyBehavior href='/onboarding/ActionGoalMetric'>
                <a className="focus:outline-none text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-3xl text-sm py-2 px-5 mb-2">
                    Next step
                </a> 
            </Link>             
            </div>                    
        </main>
    </div>
  );
}

export default ActionGoalIncome;