import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import NextButton from "../../components/NextButton";

const ActionGoalControl = () => {
  return (
    <div>
      <Head>
        <title>ZEE BY RHB</title>
        <meta name="description" content="Card Expenses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-cyan-400 px-12 py-10 h-max">
        <Link legacyBehavior href="/onboarding/ActionGoalMetric">
          <a className="text-3xl text-purple-700 pt-10">
            <AiOutlineArrowLeft />
          </a>
        </Link>
        <div className="py-5">
          <h2 className="text-purple-700 text-2xl max-w-xl mx-auto font-bold">
            Last step - Take control of your expenses
          </h2>
          <p className="text-purple-700 text-md max-w-xl mx-auto mt-3">
            Zee can help categorize the following expenses but if you want to
            have full control, all power to you
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <div>
            {/*1st display*/}
            <div
              id="toast-success"
              className="flex justify-between items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-gray-100 rounded-lg shadow"
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
                <p className="text-4xl">🚗</p>
              </div>
              <div className="ml-3 text-sm font-normal px-3">Transport</div>
              {/*Toggle*/}
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-700"></div>
                </label>
              </div>
            </div>
            {/*2nd display*/}
            <div
              id="toast-success"
              className="flex justify-between items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-gray-100 rounded-lg shadow"
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
                <p className="text-4xl">🍔</p>
              </div>
              <div className="ml-3 text-sm font-normal px-3">
                Foods & beverages
              </div>
              {/*Toggle*/}
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-700"></div>
                </label>
              </div>
            </div>
            {/*3rd display*/}
            <div
              id="toast-success"
              className="flex justify-between items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-gray-100 rounded-lg shadow"
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
                <p className="text-4xl">🛍️</p>
              </div>
              <div className="ml-3 text-sm font-normal px-3">Shopping</div>
              {/*Toggle*/}
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-700"></div>
                </label>
              </div>
            </div>
            {/*4th display*/}
            <div
              id="toast-success"
              className="flex justify-between items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-gray-100 rounded-lg shadow"
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
                <p className="text-4xl">🎥</p>
              </div>
              <div className="ml-3 text-sm font-normal px-3">Entertainment</div>
              {/*Toggle*/}
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-700"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-12">
          <p className="text-gray-500">Let me do it myself!</p>
        </div>

        <Link href="/card-expenses">
          <NextButton text="Next Step" />
        </Link>
      </main>
    </div>
  );
};

export default ActionGoalControl;
