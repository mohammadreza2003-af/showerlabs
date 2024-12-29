import React from "react";

const page = () => {
  return (
    <div className="mt-20 flex flex-col text-primary-text py-20">
      <div className="max-w-[1440px] w-full m-auto px-6">
        <div className="flex flex-col items-start justify-center max-w-[1000px] w-full m-auto">
          <h2 className="text-center mb-12 font-valueSansProBold md:text-6xl text-3xl">
            Handelsbetingelser
          </h2>
          <span className="font-valueSansProBold text-xl mb-2">
            Showerlabs ApS
          </span>
          <p>CVR: 44646331</p>
          <p className="text-3xl">Betaling</p>
          <p className="mb-3">
            Showerlabs ApS modtager online betalinger med Dankort, Visa/Dankort,
            Mastercard, Mobilepay Online, Anyday.
          </p>
          <p className="mb-3">
            Betaling vil først blive trukket på din konto, når den fysiske vare
            afsendes eller det virtuelle produkt er oprettet med mindre andet er
            aftalt eller fremgår af din ordre.
          </p>
          <p className="mb-3">
            Anyday betalingsmuligheden er tilgængelig for køb på 300,- DKK eller
            mere. Når du vælger at betale med Anyday, trækker vi den første
            betaling, når din vare afsendes. Efterfølgende vil du betale en
            månedlig ydelse den sidste hverdag i hver måned. Antallet af
            månedlige ydelser starter fra fire måneder og kan variere afhængigt
            af din valgte betalingsplan. Størrelsen på hver ydelse bestemmes af
            din ordres samlede beløb, din valgte flexydelse og den specifikke
            betalingsplan, du har valgt. Husk, at hvis du betaler alle rater til
            tiden, påløber der ingen renter eller gebyrer. Skulle du returnere
            dit køb, vil din aftale med Anyday automatisk blive annulleret.
            Yderligere detaljer og vilkår for brug af Anyday kan findes her:
            https://da.anyday.io/terms-conditions/shopper
          </p>
          <span className="font-valueSansProBold text-xl mb-2">
            Showerlabs ApS
          </span>
          <p className="mb-3">
            Ved anvendelse af betalingskort, debit såvel som kredit, sker en
            reservation af det beløb der handles for. Dette beløb er reserveret
            indtil webshoppen, har behandlet og afsendt din ordre. Når ordren er
            afsendt, hæves pengene på kontoen. Reservationstiden afhænger af
            produktet/ydelsen.
          </p>
          <span className="font-valueSansProBold text-xl mb-2">
            Autorisering på debitkort
          </span>
          <p className="mb-3">
            Ved debit kort, vil du kunne se at pengene er reserveret på din
            konto og at dit rådighedsbeløb vil her stå som værende mindre.
            Annullerer du eller webshoppen efterfølgende din ordre, så kan
            webshoppen ikke hæve pengene, men reservationen vil fortsat gælde i
            en periode. Bemærk at kun din bank (eller kortudsteder) vil kunne
            ophæve reservationen.
          </p>
          <span className="font-valueSansProBold text-xl mb-2">
            Autorisering på kreditkort
          </span>
          <p className="mb-3">
            Pengene vil først hæves fra din konto og fremgå af dit overblik når
            webshoppen behandler og hæver betalingen for din ordre
          </p>
          <p>Alle beløb på hjemmesiden er inklusiv moms.</p>
          <p>Hjemmesiden bruger følgende valutaer til prissætning:</p>
          <p className="mb-3">Denmark - Kroner (DKK) </p>
          <p className="mb-3">
            Showerlabs ApS benytter en sikker betalingsserver, der krypterer
            alle oplysninger med SSL protokol hvilket betyder din data er sikker
            og ikke kan læses af andre udefrakommende.
          </p>
          <p className="mb-3">
            Showerlabs ApS&#39;s egen hjemmeside bruger ligeledes kryptering med
            SSL protokol.
          </p>
          <p className="text-3xl mb-3">Levering</p>
          <p className="mb-3">
            Leveringstiden for din ordre er typisk 1-3 hverdage.
          </p>
          <p className="mb-3">
            Showerlabs ApS afsender varer med følgende: DAO - Direkte, DAO -
            Pakkeshop
          </p>
          <p className="mb-3">Fragten bliver beregnet ud fra vægt.</p>
          <p className="mb-3">
            Du vil kunne vælge i mellem at få pakken sendt &#34;uden
            omdeling&#34; eller &#34;med omdeling&#34;
          </p>
          <p className="mb-3">
            Du vil altid modtage et track and trace nr. så du kan følge din
            pakke, fra vores lager og hjem til dig.
          </p>
          <p className="text-3xl mb-3">Fortrydelsesret</p>
          <p className="mb-3">
            Der gives 30 dages fuld returret på varer købt på hjemmesiden med
            mindre andet er aftalt eller fremgår af din ordre.
          </p>
          <p className="mb-3">
            Den 30 dags periode starter den dag hvor ordren er leveret.
          </p>
          <p className="mb-3">
            Eventuelle returneringsomkostninger afholder du selv.
          </p>
          <p className="mb-3">
            Ønske om fortrydelse skal meddeles os senest 30 efter leveringen og
            være os i hænde seneste 30 dage efter vi er informeret om dit brug
            af fortrydelsesretten.
          </p>
          <p className="mb-3">
            Ønske om brug af fortrydelsesret skal gives sendes på mail
            info@showerlabs.dk. I meddelelsen skal der gøres tydeligt opmærksom
            på dit ønske om brugen af fortrydelsesret.
          </p>
          <p className="text-6xl mb-4">Abonnement hos Showerlabs</p>
          <p className="text-3xl mb-3">Om køb af produkter på abonnement</p>
          <p className="mb-3">
            Du har mulighed for at få et udvalg af produkter leveret løbende og
            automatisk på abonnement. Det er helt gratis at oprette et
            abonnement. Du får desuden fast 20% rabat på dine
            abonnementsprodukter. Køb af produkter på abonnement er altid
            valgfrit, og det er ikke noget, du bliver tilmeldt, uden du selv
            tilvælger dette. Som standard bliver alle produkter foretaget som
            engangskøb. Abonnementet er derfor en ekstra tillægsservice, vi
            tilbyder. Man kan også godt kombinere et køb med både
            abonnementsprodukter og produkter, der ikke er på abonnement.
          </p>
          <div className="space-y-8">
            {/* Fordele ved et abonnement */}
            <div>
              <h2 className="mb-3 text-3xl">Fordele ved et abonnement</h2>
              <p className="mb-2">
                Altid 20% rabat på de produkter, du køber på abonnement
              </p>
              <p className="mb-2">
                Automatisk og løbende levering af dine abonnementsprodukter, så
                du aldrig løber tør
              </p>
              <p className="mb-2">
                Ingen bindingsperiode, så du kan altid opsige abonnementet
              </p>
              <p className="mb-2">Ingen uforudsete opkrævninger</p>
              <p className="mb-2">
                Let selvbetjening hvis du vil foretage ændringer i dit
                abonnement
              </p>
            </div>

            {/* Sådan foregår abonnementet */}
            <div>
              <h2 className="mb-3 text-3xl">Sådan foregår abonnementet</h2>
              <p className="mb-2">
                Find de produkter, du ønsker at abonnere på (det vil fremgå af
                hjemmesiden hvilke produkter, der kan abonneres på)
              </p>
              <p className="mb-2">
                Vælg hvor ofte du ønsker produkterne leveret
              </p>
              <p className="mb-2">
                Læg produkterne i kurven og betal for dit køb som normalt
              </p>
            </div>

            {/* Abonnementsforholdet */}
            <div>
              <h2 className="mb-3 text-3xl">Abonnementsforholdet</h2>
              <p className="mb-2">
                Når produkter sættes i abonnement, vælger du selv, hvor ofte du
                vil have produktet/produkterne tilsendt ud fra de givne
                intervaller. Showerlabs vil løbende sende produkterne til dig
                baseret på, hvad du har valgt, med den valgte leveringsform samt
                til din valgte leveringsadresse. Dette gælder, indtil du enten
                opsiger eller ændrer dit abonnement for det enkelte produkt.
              </p>
            </div>

            {/* At være abonnent */}
            <div>
              <h2 className="mb-3 text-3xl">At være abonnent</h2>
              <p className="mb-2">
                Når du første gang opretter et abonnement ved at tilvælge at
                abonnere på produkter, du køber via vores webshop, vil du blive
                registreret som abonnent hos Showerlabs. Dette betyder, at vi
                gemmer din foretrukne leveringsform, samt dine
                betalingsoplysninger under din profil. Har du flere produkter på
                abonnement benyttes samme betalingskort, samt leveringsadresse
                til dem alle. Du kan til enhver tid ændre betalingskort samt
                leveringsadresse under din brugerprofil.
              </p>
            </div>

            {/* Opsigelse og ændringer */}
            <div>
              <h2 className="mb-3 text-3xl">Opsigelse og ændringer</h2>
              <p className="mb-2">
                Du kan selv foretage ændringer, eller opsige dit abonnement, på
                et eller flere af dine abonnementsprodukter. Dit abonnement kan
                opsiges eller ændres helt frem til 48 timer før din næste
                levering. Der er ingen bindingsperiode på abonnementet. Du er
                således ikke bundet for en bestemt periode, og kan opsige dit
                abonnement når som helst.
              </p>
              <p className="mb-2">
                Du kan ændre og opsige under abonnement på din profil eller ved
                at kontakte os i kundesupport. Beregn op til 2 hverdages
                behandlingstid på din e-mail til kundesupport.
              </p>
            </div>

            {/* Remaining Sections */}
            <div>
              <h2 className="mb-3 text-3xl">
                Abonnementsrabat, prissætning og rabatkoder
              </h2>
              <p className="mb-2">
                Du får fast 20% rabat på normalprisen på de produkter du vælger
                at sætte i abonnement. Den præcise rabat vil vises på produktet.
                Når du opretter et produkt på abonnement, kan du opleve, at der
                på samme tid er en rabatkode eller anden tilbudskampagne på det
                produkt, du ønsker at oprette abonnement på. Rabatkoder gælder
                ikke på abonnementsprodukter.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-3xl">
                Automatisk betaling ved abonnement
              </h2>
              <p className="mb-2">
                Når du opretter dig som abonnent hos Showerlabs, giver du
                samtykke til, at vi automatisk trækker betaling fra dit
                betalingskort for de produkter, du har valgt at abonnere på.
              </p>
              <p className="mb-2">
                Efter dit første køb, hvor du tilvælger at abonnere på de
                produkter, du ønsker, forløber det helt automatisk, hver gang du
                skal betale for din leverance. Vi trækker først pengene på dit
                kort, når dine produkter afsendes. Du vil modtage en e-mail med
                information forud for hver levering.
              </p>
              <div>
                <h2 className="mb-3 text-3xl">
                  Det koster ikke ekstra at være abonnent
                </h2>
                <p className="mb-2">
                  Der vil ikke forekomme yderligere opkrævninger eller ekstra
                  gebyrer, du betaler kun for det, du får. Du får desuden fast
                  20% rabat på køb af abonnementsprodukter foretaget via vores
                  webshop. Vi glæder os til at gøre din hverdag nemmere.
                </p>
                <p className="mb-2">
                  Bemærk dog, at du ikke kan bruge rabatkoder ved køb af
                  abonnementsprodukter.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              {/* Levering af abonnementsordrer */}
              <div>
                <h2 className="mb-3 text-3xl">Levering af abonnementsordrer</h2>
                <p className="mb-2">
                  Hvis du tilvælger at få leveret dine varer som abonnement, så
                  bliver de løbende leveringer leveret med den leveringsmetode,
                  som der blev angivet, da du oprettede dit abonnement. Det vil
                  typisk være den nærmeste pakkeshop i vores system med den
                  valgte fragtleverandør.
                </p>
              </div>

              {/* Varens stand ved returnering */}
              <div>
                <h2 className="mb-3 text-3xl">Varens stand ved returnering</h2>
                <p className="mb-2">
                  Du hæfter for den forringelse af varens værdi, som skyldes
                  anden håndtering, end hvad der er nødvendigt for at fastslå
                  varens art, egenskaber og funktion. Dette betyder at du må
                  prøve varen på samme måde som hvis du handlede i en fysisk
                  butik.
                </p>
                <p className="mb-2">
                  Hvis varen er prøvet udover, hvad der er beskrevet ovenfor,
                  betragtes den som brugt og af forringet værdi. Dette betyder,
                  at du ved fortrydelse af købet får en mindre del eller intet
                  af købsbeløbet retur. Det er op til Showerlabs ApS at vurdere
                  varens stand.
                </p>
              </div>

              {/* Reklamationsret */}
              <div>
                <h2 className="mb-3 text-3xl">Reklamationsret</h2>
                <p className="mb-2">
                  Der gives 2 års reklamationsret på produkter i henhold til den
                  danske købelov. Reklamationsretten gælder for alle fejl i
                  software, materiale og fabrikation.
                </p>
                <p className="mb-2">
                  Reklamation vedr. fejl og mangler skal meddeles til Showerlabs
                  ApS i rimelig tid efter varens modtagelse. Her anses max. to
                  måneder som rimelig tid, med mindre andet er aftalt. Vi
                  refunderer rimelige fragtomkostninger.
                </p>
                <p className="mb-2">
                  Reklamationen frafalder ved forkert eller ualmindelig
                  betjening af produktet.
                </p>
                <p className="mb-2">
                  Showerlabs ApS dækker returneringsomkostningerne i rimeligt
                  omfang.
                </p>
                <p className="mb-2">
                  Ved returnering kontaktes virksomheden:
                  <br />
                  Email:{" "}
                  <a href="mailto:info@showerlabs.dk" className="text-blue-500">
                    info@showerlabs.dk
                  </a>
                </p>
                <p className="mb-2">
                  Reklamationer modtages ikke hvis disse er sendt på efterkrav.
                </p>
              </div>

              {/* Kunde- & Privatlivspolitik */}
              <div>
                <h2 className="mb-3 text-3xl">Kunde- & Privatlivspolitik</h2>
                <p className="mb-2">
                  Vi videresælger ikke personlige oplysninger og videregiver
                  ikke dine personlige oplysninger til andre, de er kun
                  registreret i vores kundekartotek. Du kan til enhver tid få
                  slettet dine oplysninger.
                </p>
                <p className="mb-2">
                  For at du kan indgå aftale med Showerlabs ApS, har vi brug for
                  følgende oplysninger:
                </p>
                <ul className="mb-2 list-disc pl-5">
                  <li>Navn</li>
                  <li>Adresse</li>
                  <li>Telefonnummer</li>
                  <li>E-mail adresse</li>
                </ul>
                <p className="mb-2">
                  Vi foretager registreringen af dine personoplysninger med det
                  formål, at kunne levere varen til dig.
                </p>
                <p className="mb-2">
                  Personoplysningerne registreres hos Showerlabs ApS og
                  opbevares i op til fem år, hvorefter oplysningerne slettes.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="mb-3 text-3xl">Cookies</h2>
                <p className="mb-2">
                  På showerlabs.dk anvendes cookies med det formål at optimere
                  hjemmesiden og dets funktionalitet, og dermed gøre besøget så
                  nemt som muligt for dig.
                </p>
                <p className="mb-2">
                  Du kan til enhver tid slette cookies fra din computer, se
                  vejledningen på Webshop Cookies og Privatlivspolitik.
                </p>
              </div>

              {/* Log-statistik */}
              <div>
                <h2 className="mb-3 text-3xl">Log-statistik</h2>
                <p className="mb-2">
                  Vi bruger en log-statistik på showerlabs.dk, hvilket betyder,
                  at et statistik-system opsamler information, som kan give et
                  statistisk billede af, hvor mange besøgende vi har, hvor de
                  kommer fra og hvor på websitet det forlades mv.
                </p>
                <p className="mb-2">
                  Logstatistikken anvendes kun med det formål, at optimere
                  Showerlabs ApS&#39;s hjemmeside.
                </p>
              </div>

              {/* Klagemuligheder */}
              <div>
                <h2 className="mb-3 text-3xl">Klagemuligheder</h2>
                <p className="mb-2">
                  En klage over en vare eller tjenesteydelse kan indgives til
                  Nævnenes Hus, Mæglingsteamet for Forbrugerklager, Toldboden 2,
                  8800 Viborg via Klageportalen for Nævnenes Hus.
                </p>
                <p className="mb-2">
                  Mæglingsteamet vil forsøge at løse tvisten ved mediation, og
                  hvis det ikke lykkes at finde en løsning, kan du indbringe
                  klagen for Forbrugerklagenævnet.
                </p>
                <p className="mb-2">
                  Ved indgivelse af en klage skal du angive vores e-mail
                  adresse:
                  <a href="mailto:info@showerlabs.dk" className="text-blue-500">
                    {" "}
                    info@showerlabs.dk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
