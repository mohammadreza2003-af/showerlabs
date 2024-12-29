import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="mt-24 flex justify-center flex-col py-20 items-center text-primary-text">
      <div className="max-w-[400px] flex-col flex items-center gap-4 text-center">
        <Image
          src="/images/pages/collab/logo.jpg"
          width={120}
          className="rounded-lg"
          height={120}
          alt="logo"
        />
        <p>Collab med Showerlabs</p>
        <p>
          Fra en idé om at forbedre måden vi går i bad på, er vi vokset til at
          blive et førende mærke på det ellers meget konservative marked for
          brusehoveder.
        </p>
        <Link
          href={
            "https://api.collabs.shopify.com/creator/signup/community_application/e81d22cc9559e2f5?origin=THEME_EXTENSION"
          }
          className="py-2 px-4 bg-primary-text rounded-lg text-white"
        >
          Ansøg nu
        </Link>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2  px-6 items-center gap-3 mt-8">
        {Array.from({ length: 4 }, (_, index) => (
          <Image
            key={index}
            width={200}
            height={200}
            alt="product-img"
            className="rounded-lg"
            src={`/images/pages/collab/${index + 1}.jpg`}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
