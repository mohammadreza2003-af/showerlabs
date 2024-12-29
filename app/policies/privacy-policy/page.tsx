import React from "react";

const page = () => {
  return (
    <div className="mt-20 flex flex-col text-primary-text py-20">
      <div className="max-w-[1440px] w-full m-auto px-6">
        <div className="flex flex-col items-start justify-center max-w-[1000px] w-full m-auto">
          <div className="space-y-8">
            {/* Politik om beskyttelse af persondata */}
            <div>
              <h2 className="text-center mb-12 font-valueSansProBold md:text-6xl text-3xl">
                Politik om beskyttelse af persondata
              </h2>
              <p className="mb-2">
                Vi indhenter kun persondata i de tilfælde, hvor dette skulle
                være relevant for os, og vi vil kun indhente persondata, hvis
                det er relevant for din aktivitet hos Showerlabs. Ved
                indsamling, behandling og anvendelse af dine persondata
                overholder vi altid alle relevante lovbestemmelser.
              </p>
              <p className="mb-2">
                Vi vil kun opbevare dine persondata, så længe vi enten er pålagt
                en juridisk forpligtelse hertil, eller så længe det er relevant
                for den hensigt, hvormed de blev indsamlet.
              </p>
            </div>

            {/* Oplysninger, vi indsamler */}
            <div>
              <h2 className="mb-3 text-3xl">Oplysninger, vi indsamler</h2>
              <p className="mb-2">
                Hvis du ønsker at købe og modtage et produkt fra os, har vi brug
                for at indsamle visse persondata for at kunne gennemføre
                handlen. Vi kan bruge cookies til at holde styr på indholdet i
                din indkøbskurv, mens du bruger vores webshop.
              </p>
              <p className="mb-2">
                Vi kan indhente oplysninger som f.eks. navn, e-mailadresse,
                postadresse, leveringsadresse (hvis den varierer fra
                postadresse), telefonnummer og betalingsoplysninger.
              </p>
              <p className="mb-2">
                Showerlabs indsamler og behandler dine persondata, når du
                foretager dig følgende:
              </p>
              <ul className="mb-2 list-disc pl-5">
                <li>Besøger vores hjemmeside</li>
                <li>Gennemfører et køb af vores produkter</li>
                <li>Tilmelder dig vores nyhedsbrev</li>
                <li>Sender os spørgsmål, reklamationer eller feedback</li>
              </ul>
            </div>

            {/* Den dataansvarlige */}
            <div>
              <h2 className="mb-3 text-3xl">Den dataansvarlige</h2>
              <p className="mb-2">
                Den dataansvarlige for indsamling, behandling og anvendelse af
                dine personoplysninger på showerlabs.dk er Showerlabs ApS,
                CVR-nr. 44646331.
              </p>
            </div>

            {/* Behandlingsgrundlag og formål */}
            <div>
              <h2 className="mb-3 text-3xl">Behandlingsgrundlag og formål</h2>
              <p className="mb-2">
                Dine almindelige kontaktoplysninger som navn og adresse
                indhenter vi for at kunne levere det produkt eller den ydelse,
                som du har købt hos os. Din e-mailadresse indhenter vi for at
                kunne sende dig en ordrebekræftelse samt en
                leveringsbekræftelse.
              </p>
              <p className="mb-2">
                Når du betaler for dit produkt eller din ydelse indsamler vi dit
                navn, dine kortdata og IP-adresse. De oplysninger, der indsamles
                i forbindelse med betalingstransaktionen, anvendes og gemmes kun
                til betalingsafvikling og opfyldelse af den indgåede aftale.
              </p>
              <p className="mb-2">
                Hvis du under registreringsprocessen eller på vores hjemmeside
                har givet os dit samtykke hertil, bruger vi din e-mailadresse
                til udsendelse af et nyhedsbrev. Du kan til enhver tid til- og
                afmelde dig nyhedsbrevet.
              </p>
            </div>

            {/* Andre modtagere af personoplysninger */}
            <div>
              <h2 className="mb-3 text-3xl">
                Andre modtagere af personoplysninger
              </h2>
              <p className="mb-2">
                Vi sælger ikke dine persondata til tredjemand, og vi overfører
                ikke dine persondata til tredjelande.
              </p>
              <p className="mb-2">
                Vi har vores hjemmeside hos Shopify og betalingssystem gennem
                Shopify Payments, som fungerer som vores databehandler.
              </p>
            </div>

            {/* Dine rettigheder */}
            <div>
              <h2 className="mb-3 text-3xl">Dine rettigheder</h2>
              <p className="mb-2">
                Som den registrerede har du en række rettigheder, som vi til
                enhver tid skal sikre opfyldelse af. Du har ret til at anmode os
                om følgende:
              </p>
              <ul className="mb-2 list-disc pl-5">
                <li>At få adgang til og få rettet/ændret dine persondata</li>
                <li>At få slettet persondata</li>
              </ul>
              <p className="mb-2">
                Ønsker du ikke længere, at vi skal behandle dine
                personoplysninger, eller at vi skal begrænse behandlingen af
                dine personoplysninger, kan du sende os en anmodning herom til
                vores e-mailadresse:{" "}
                <a href="mailto:info@showerlabs.dk" className="text-blue-500">
                  info@showerlabs.dk
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
