import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full sm:bg-[url('/images/hero.jpg')] sm:bg-right-top bg-[url('/images/MOBILEHERO.jpg')] bg-cover bg-left-top  bg-no-repeat min-h-[90vh] flex sm:items-center items-end justify-center text-white mt-16">
      <div className="max-w-[1460px] w-full px-6 py-6 flex items-center h-full justify-start">
        <div className="flex flex-col gap-8 h-full items-start">
          <p className="text-xl md:text-2xl font-semibold">
            Fremtidens brusehoved.
          </p>
          <h1 className="font-valueSansProBold text-4xl md:text-7xl leading-tight">
            Brusehovedet, der
            <br /> filtrerer dit vand.
          </h1>
          <Link
            href="/products/milo-brusehoved"
            className="bg-primary-text hover:bg-transparent px-8 md:px-12 py-2 text-lg md:text-xl transition-3s border-4 hover:border-white border-primary-text font-semibold rounded-lg"
          >
            Køb i dag
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
