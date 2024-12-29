const StatisticsSection = () => {
  return (
    <section className="w-full px-6 py-24 flex m-auto items-center h-full justify-center text-white bg-primary-text">
      <div className="max-w-[1260px] flex flex-col justify-center text-center px-6 items-center gap-5">
        <h2 className="font-valueSansProBold text-9xl">98%</h2>
        <h3 className="font-valueSansProBold text-3xl">
          kommuner har pesticider i vandet
        </h3>
        <p>
          Fanø og Læsø er de eneste kommuner, hvor der ikke er blevet fundet
          pesticider i vandet de seneste 5 år.
        </p>
        <button className="text-white bg-transparent px-8 md:px-8 py-4  transition-3s border-2 border-white  font-semibold rounded-lg">
          Tjek vandkvalitet i din kommune
        </button>
      </div>
    </section>
  );
};

export default StatisticsSection;
