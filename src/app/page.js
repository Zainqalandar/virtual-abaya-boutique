export default function Home() {
  return (
    <>
      <div className="bg-cover bg-center h-screen p-24 bg-no-repeat bg-gradient-to-r from-pink-500 to-purple-500">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white bg-gradient-to-r from-pink-500 bg-clip-text tracking-tight leading-tight">
          Virtual Abaya Boutique
        </h1>
        <p className="text-xl text-center text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Welcome to our online store!
        </p>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 leading-normal mt-2">
          Explore our latest collections and find your perfect abaya.
        </p>
        <p className="text-base text-center text-gray-500 dark:text-gray-400 leading-snug mt-2">
          Don't hesitate to contact us for any inquiries.
        </p>
      </div>
    </>
  );
}
