import Image from "next/image";
import Link from "next/link";

const MiloShowerInfo = () => {
  return (
    <section className="w-full px-6 py-20 flex items-center justify-center text-primary-text bg-primary-background">
      <div className="flex flex-col items-center max-w-[1200px] w-full">
        <h2 className="text-5xl mb-12 text-center">MILO BRUSEHOVED</h2>
        <div className="md:grid flex flex-col grid-cols-2 gap-12 w-full">
          <div>
            <div className="flex items-center flex-col md:flex-row gap-4 mb-4">
              <h2 className="text-2xl">Kan installeres på under 60 sekunder</h2>
              <p>
                Du behøver ikke at være handy eller bruge værktøj for at
                installere brusehovedet. Det passer til alle danske
                badeværelser.
              </p>
            </div>
            <div>
              <Image
                src="/images/products/install.gif"
                alt=""
                width={600}
                className="rounded-lg"
                height={600}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <Image
                src="/images/products/buy-gift.jpg"
                alt=""
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <h2 className="font-valueSansProBold text-lg">
                Prøv risikofrit i 30 dage
              </h2>
              <p>
                Er du i tvivl? Du kan prøve MILO risikofrit i 30 dage. Hvis du
                ikke er tilfreds, så er du kun 2 klik fra at få alle pengene
                tilbage.
              </p>
              <Link
                href="/products/milo-brusehoved"
                className="bg-primary-text text-center py-3 text-white hover:text-primary-text  hover:bg-transparent px-8 md:px-12  text-lg md:text-xl transition-3s border-2 hover:border-primary-text border-primary-text font-semibold rounded-lg"
              >
                Køb nu
              </Link>
            </div>
          </div>
        </div>
        <div className="md:grid lg:grid-cols-[0.8fr_1.5fr] grid-cols-[1fr_1fr] flex flex-col-reverse gap-8 items-center w-full mt-24">
          <div className="flex flex-col gap-6 items-start">
            <h2 className="font-valueSansProBold text-5xl">
              Tjek vandkvaliteten i din kommune
            </h2>
            <p>
              Den danske vandforsyning indeholder flere urenheder, end man måske
              forestiller sig. Grundvandet er nemlig udsat for påvirkninger fra
              landbrug, industri og husholdninger
            </p>
            <Link
              href="/pages/vandkvalitet"
              className="bg-primary-text text-white hover:text-primary-text  hover:bg-transparent px-8 md:px-12 py-2 text-lg md:text-xl transition-3s border-2 hover:border-primary-text border-primary-text font-semibold rounded-lg"
            >
              Tjek din vandkvalitet
            </Link>
          </div>
          <div className="flex justify-end overflow-hidden">
            <Image
              src="/images/products/map.png"
              width={580}
              height={580}
              alt=""
              className="rounded-lg md:w-[350px] w-full lg:w-[580px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiloShowerInfo;
