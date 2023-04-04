import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saathi</title>
        <meta name="description" content="saathi matriomonial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <div className="md:flex block md:items-center md:p-12 p-4 mx-auto w-full">
          <img className="md:w-[60%] w-[100%] md:h-[70vh] h-[50vh] object-cover rounded-lg" src="https://manofmany.com/wp-content/uploads/2022/02/8-First-Date-Tips-According-to-an-Expert-Location-Location-Location.jpeg" alt="" />
          <div className="md:ml-12 ml-2 mt-4 md:text-left text-center ">
            <h1 className="md:text-[3rem] text-[2rem] leading-tight">Looking for a <span className="text-pink-600 font-bold md:block inline">Soulmate ?</span></h1>
            <p className="md:text-[1.5rem] text-[1rem]">Give a pause to your search engine, <br/> We are here for you </p>
            <button className="btn btn-primary mt-4 animate-bounce">Let's Start</button>
          </div>
        </div>
      </main>
    </>
  );
}
