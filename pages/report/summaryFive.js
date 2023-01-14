import Head from 'next/head'
import Image from 'next/image'

const summaryFive = () => {
    return (
      <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-gray-800 font-medium md:text-6xl">Some recommendation</h2>
            <div className="flex justify-center pt-20">
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
                  <p className="font-normal text-gray-700">RHB Merchant 1 to save money</p>
              </div>
            </div>                         
          </div>
      </main>
      </div>
    )
}

export default summaryFive