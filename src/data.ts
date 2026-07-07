import { Plan, DeviceGuide, FAQItem, Testimonial, Film } from './types';

export const PLANS_DATA: Plan[] = [
  {
    id: 'plan-3m',
    name: 'Zilver',
    price: 49.99,
    originalPrice: 79.99,
    durationMonths: 12,
    screens: 1,
    description: 'Populaire keuze voor een heel jaar met scherpe korting.',
    features: [
      '20.000+ Wereldwijde Kanalen & VOD\'s',
      '170.000+ Films & Series (op aanvraag)',
      'Basis Sportzenders (Eredivisie & Champions League)',
      '4K, FHD & HD Kwaliteit',
      'Geavanceerde Anti-Buffer v3.2',
      'Geschikt voor alle apparaten',
      '24/7 Premium Klantenservice',
      'Directe activatie na betaling',
      'Gratis updates van zenderlijst',
      'EPG Electronische Gids inclusief'
    ],
    isPopular: false
  },
  {
    id: 'plan-12m',
    name: 'Goud Premium',
    price: 69.99,
    originalPrice: 139.98,
    durationMonths: 12,
    screens: 2,
    description: 'De ultieme entertainment-deal. Bespaar meer dan 50% met ons meest gekozen pakket, inclusief 2 schermen.',
    features: [
      '45.000+ Wereldwijde Kanalen & VOD\'s',
      '170.000+ Films & Series (op aanvraag)',
      '2 Gelijktijdige Schermen Inbegrepen',
      'Netflix, Disney+ & HBO Content',
      'Ziggo Sport Basis',
      'Catch-up TV (Terugkijken)',
      '4K, FHD & HD Kwaliteit',
      'Geavanceerde Anti-Buffer v3.2',
      'Geschikt voor alle apparaten',
      '24/7 VIP Prioriteitsondersteuning',
      'Directe activatie na betaling',
      'Volledige EPG & Live Sport-agenda',
      'Zonder automatische verlenging'
    ]
  },
  {
    id: 'plan-24m',
    name: 'Platina VIP',
    price: 59.99,
    originalPrice: 119.98,
    durationMonths: 18,
    screens: 1,
    description: 'Zorgeloos genieten voor de absolute laagste prijs per maand.',
    features: [
      '69.000+ Wereldwijde Kanalen & VOD\'s',
      '170.000+ Films & Series (op aanvraag)',
      'Netflix, Disney+, HBO, Prime Video, Videoland & Discovery+',
      'Ziggo Sport & Viaplay incl. Formule 1',
      'ESPN Nederland (Eredivisie Live)',
      '4K, FHD & HD Kwaliteit',
      'Geavanceerde Anti-Buffer v3.2',
      'Geschikt voor alle apparaten',
      '24/7 VIP Prioriteitsondersteuning',
      'Directe activatie na betaling',
      'Terugkijken TV & Volledige EPG',
      'Optionele Volwassenenkanalen (18+)',
      '14 Dagen Geld-Terug-Garantie',
      'Geen verborgen kosten'
    ],
    badge: 'BESTE DEAL (50% KORTING)',
    isPopular: true
  }
];

export const DEVICES_GUIDES: DeviceGuide[] = [
  {
    id: 'firestick',
    name: 'Firestick & Android',
    iconName: 'Tv',
    description: 'Installatie via de Downloader-app voor Amazon Fire TV Stick en Android Boxen.',
    steps: [
      {
        title: 'Installeer Downloader',
        description: 'Ga naar de Amazon App Store of Google Play Store op uw apparaat. Zoek naar "Downloader" en installeer de applicatie met het oranje icoon.'
      },
      {
        title: 'Schakel Onbekende Bronnen in',
        description: 'Ga naar Instellingen > Mijn Fire TV > Ontwikkelaarsopties. Schakel "Apps van onbekende bronnen" in voor de Downloader-app. (Als dit menu verborgen is, klik dan 7 keer op "Info" in het menu).'
      },
      {
        title: 'Download IPTV Smarters of TiviMate',
        description: 'Open Downloader, typ de snelcode "815072" (of voer de URL in van IPTV Smarters Pro) en druk op Go om de app direct te downloaden en installeren.'
      },
      {
        title: 'Voer uw AneeTV Gegevens in',
        description: 'Open de geïnstalleerde app en kies "Inloggen met Xtream Codes API". Voer de server-URL, uw gebruikersnaam en wachtwoord in die u direct na betaling via e-mail hebt ontvangen.'
      }
    ]
  },
  {
    id: 'smart-tv',
    name: 'Smart TV (Samsung/LG)',
    iconName: 'Monitor',
    description: 'Directe installatie op uw Samsung of LG Smart TV via gespecialiseerde IPTV-apps.',
    steps: [
      {
        title: 'Kies en installeer een IPTV app',
        description: 'Open de App Store van uw Samsung of LG TV. Zoek naar apps zoals "IBO Player", "Smart IPTV", "SET IPTV" of "Flix IPTV" en installeer deze.'
      },
      {
        title: 'Noteer uw MAC Adres',
        description: 'Open de geïnstalleerde app op uw TV. Op het startscherm ziet u een "MAC-adres" staan (bijv. aa:bb:cc:11:22:33) en soms een apparaat-sleutel.'
      },
      {
        title: 'Upload uw M3U Afspeellijst',
        description: 'Ga naar de website van de app (bijv. iboplayer.com of siptv.app). Voer het MAC-adres van uw TV in en plak de M3U-afspeellijst URL die u van AneeTV heeft ontvangen.'
      },
      {
        title: 'Herstart de app op uw TV',
        description: 'Herstart de app op uw Smart TV. Alle kanalen, films en series worden nu automatisch geladen en ingedeeld in categorieën.'
      }
    ]
  },
  {
    id: 'apple-ios',
    name: 'Apple iOS & Apple TV',
    iconName: 'Smartphone',
    description: 'Geniet van IPTV op uw iPhone, iPad of Apple TV met premium players.',
    steps: [
      {
        title: 'Installeer Smarters Player Lite',
        description: 'Open de Apple App Store op uw iPhone, iPad of Apple TV. Zoek naar "Smarters Player Lite" of "IPTVX" en download de app.'
      },
      {
        title: 'Voeg Nieuwe Gebruiker toe',
        description: 'Open de app en klik op "Gebruiker Toevoegen" of "+". Kies vervolgens de optie "Inloggen met Xtream Codes API" voor de meest stabiele verbinding.'
      },
      {
        title: 'Voer uw inloggegevens in',
        description: 'Vul een willekeurige naam in (bijv. "AneeTV"), gevolgd door de server-URL, uw gebruikersnaam en wachtwoord uit uw e-mail.'
      },
      {
        title: 'Laad kanalen en geniet',
        description: 'Klik op "Gebruiker Toevoegen" om de database te importeren. Selecteer Live TV, Films of Series om direct te beginnen met streamen in haarscherpe kwaliteit.'
      }
    ]
  },
  {
    id: 'mag-box',
    name: 'MAG / Enigma 2',
    iconName: 'Cpu',
    description: 'Configuratie voor traditionele MAG set-top boxen en Linux ontvangers.',
    steps: [
      {
        title: 'Geef uw MAC adres door',
        description: 'Voor MAG boxen hebben we uw MAC-adres nodig dat begint met "00:1A:79:...". Voer dit in tijdens uw bestelling of stuur het naar onze klantenservice.'
      },
      {
        title: 'Ga naar Systeeminstellingen',
        description: 'Start uw MAG-box op zonder internetkabel of druk op "Setup" op de afstandsbediening. Ga naar "Systeeminstellingen" en vervolgens naar "Portals".'
      },
      {
        title: 'Stel Portal URL in',
        description: 'Voer bij Portal 1 Naam "AneeTV" in. Voer bij Portal 1 URL het portaal-adres in dat u in onze e-mail hebt ontvangen. Sla de instellingen op.'
      },
      {
        title: 'Herstart de MAG box',
        description: 'Sluit de internetkabel weer aan (voor de beste stabiliteit raden we bekabeld internet aan) en herstart uw MAG-apparaat. De portal zal nu direct laden.'
      }
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'general',
    question: 'Wat is AneeTV IPTV en hoe werkt het?',
    answer: 'AneeTV is een premium IPTV-service waarmee u via uw internetverbinding live televisiezenders, films en series kunt bekijken op elk gewenst apparaat, zonder dat u een traditionele kabel- of schotelantenne nodig heeft.'
  },
  {
    category: 'general',
    question: 'Welke betaalmethoden accepteren jullie?',
    answer: 'Wij ondersteunen een breed scala aan veilige betalingsmethoden, waaronder Bancontact, Creditcard (Visa/Mastercard), PayPal en Cryptovaluta (Bitcoin enz.). De transacties worden beveiligd verwerkt.'
  },
  {
    category: 'billing',
    question: 'Zit ik vast aan een stilzwijgende verlenging?',
    answer: 'Nee, absoluut niet! Al onze abonnementen zijn prepaid en eenmalig. Wanneer de gekozen periode (bijvoorbeeld 1 of 12 maanden) afloopt, stopt de service automatisch. U beslist zelf wanneer u wilt verlengen.'
  },
  {
    category: 'technical',
    question: 'Welke internetsnelheid heb ik nodig voor 4K/UHD?',
    answer: 'Voor stabiele HD-streaming is een verbinding van minimaal 15 Mbps vereist. Voor Full HD raden we 25 Mbps aan, en voor onze premium 4K Ultra HD zenders is een stabiele verbinding van minimaal 50 Mbps optimaal. Gebruik bij voorkeur een LAN-kabel in plaats van Wi-Fi.'
  },
  {
    category: 'technical',
    question: 'Kan ik AneeTV op meerdere apparaten tegelijk gebruiken?',
    answer: 'Standaard ondersteunt één abonnement één actieve stream tegelijk. Bij elk pakket (Zilver, Goud Premium of Platina VIP) kunt u zelf het gewenste aantal gelijktijdige schermen (1 t/m 4) selecteren, met een gunstige korting per extra scherm.'
  },
  {
    category: 'technical',
    question: 'Heb ik een VPN nodig om AneeTV te gebruiken?',
    answer: 'Nee, een VPN is over het algemeen niet nodig. Onze servers zijn geoptimaliseerd om geoblockings te omzeilen. Echter, als uw internetprovider (ISP) IPTV-verkeer afknijpt of blokkeert, kan een VPN de verbindingssnelheid en stabiliteit aanzienlijk verbeteren.'
  },
  {
    category: 'general',
    question: 'Hoe lang duurt de activatie na betaling?',
    answer: 'Ons activatiesysteem is volledig geautomatiseerd. Zodra uw betaling is afgerond, ontvangt u binnen 5 tot 15 minuten een e-mail met uw inloggegevens, M3U-afspeellijst link en een gedetailleerde installatiegids.'
  },
  {
    category: 'billing',
    question: 'Bieden jullie een niet-goed-geld-terug garantie?',
    answer: 'Ja, wij geloven in de kwaliteit van onze service. Wij bieden een 7-dagen niet-goed-geld-terug garantie aan (14 dagen bij Platina VIP) als u technische problemen ondervindt die we niet binnen 24 uur kunnen oplossen.'
  },
  {
    category: 'technical',
    question: 'Kan ik AneeTV gebruiken tijdens vakantie of in het buitenland?',
    answer: 'Ja, zolang u een stabiele internetverbinding heeft werkt AneeTV overal ter wereld. Sommige landen of netwerken blokkeren IPTV-verkeer actiever dan andere; in dat geval raden we de Premium VPN add-on aan voor een stabielere verbinding.'
  },
  {
    category: 'billing',
    question: 'Kan ik later upgraden naar een langere looptijd of meer schermen?',
    answer: 'Zeker. U kunt op elk moment upgraden naar een langer pakket of extra gelijktijdige schermen toevoegen. Neem contact op via WhatsApp of e-mail en we regelen de overstap direct voor u.'
  },
  {
    category: 'technical',
    question: 'Wat moet ik doen als een kanaal of stream niet werkt?',
    answer: 'Onze servers worden continu gemonitord op kwaliteit en uptime. Mocht een kanaal toch uitvallen, meld dit dan via WhatsApp — ons technisch team lost de meeste storingen binnen 30 minuten op.'
  },
  {
    category: 'billing',
    question: 'Wat gebeurt er automatisch als mijn abonnement afloopt?',
    answer: 'U ontvangt enkele dagen van tevoren een herinnering per e-mail. Verlengt u niet, dan stopt de toegang automatisch op de afloopdatum — er wordt nooit ongevraagd een nieuw bedrag afgeschreven.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Mark de Vries',
    location: 'Rotterdam, NL',
    rating: 5,
    quote: 'Sinds ik ben overgestapt op AneeTV heb ik geen last meer van buffering, zelfs niet tijdens live voetbal in 4K. Installatie op mijn Firestick duurde nog geen 10 minuten.',
    plan: 'Goud Premium',
  },
  {
    name: 'Sophie Willems',
    location: 'Antwerpen, BE',
    rating: 5,
    quote: 'De klantenservice via WhatsApp is echt top — ik had binnen 5 minuten antwoord op mijn vraag over de MAG-box instellingen. Zeer professioneel.',
    plan: 'Platina VIP',
  },
  {
    name: 'Tom Verhoeven',
    location: 'Utrecht, NL',
    rating: 5,
    quote: 'Ik gebruik het Zilver pakket al 3 maanden en de prijs-kwaliteitverhouding is ongeslagen. Alle internationale zenders die ik nodig heb, gewoon in HD.',
    plan: 'Zilver',
  },
  {
    name: 'Lotte Peeters',
    location: 'Gent, BE',
    rating: 4,
    quote: 'Goede stabiele verbinding en de EPG-gids werkt perfect om series te plannen. Activatie duurde iets langer dan verwacht maar support loste het snel op.',
    plan: 'Goud Premium',
  },
  {
    name: 'Daan Bakker',
    location: 'Eindhoven, NL',
    rating: 5,
    quote: 'Met 3 schermen tegelijk kan het hele gezin tegelijk kijken zonder onderbrekingen. De korting op extra verbindingen maakte het een makkelijke keuze.',
    plan: 'Platina VIP',
  },
  {
    name: 'Femke Dekker',
    location: 'Brussel, BE',
    rating: 5,
    quote: 'Duidelijke installatiegids en direct een werkende lijn na betaling. Precies wat ze beloofden, geen verrassingen achteraf.',
    plan: 'Zilver',
  },
];

// Sourced from IMDb's "Dutch Film Top 50" list (https://www.imdb.com/list/ls022686637/).
// Poster images are hotlinked directly from IMDb/Amazon's media CDN — convenient for a
// demo, but not a licensed use of this promotional artwork. Swap in a licensed source
// (e.g. a TMDB API key) before relying on this for a real production deployment.
export const TRENDING_NL: Film[] = [
  { title: 'Zwartboek', year: 2006, genre: 'Drama', rating: 7.7, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTIzMjc2ODQ2NV5BMl5BanBnXkFtZTYwODkzNTA3._V1_.jpg' },
  { title: 'Soldaat van Oranje', year: 1977, genre: 'Drama', rating: 7.6, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BODE2MDc0NDEtNzAwZi00MGYyLThlMDUtZDIwYjA0YWM5YWVhXkEyXkFqcGc@._V1_.jpg' },
  { title: 'Turks fruit', year: 1973, genre: 'Drama', rating: 7.1, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDRlZTM2ZTItOGZjOC00YTA3LTkzNmUtYjg3NTg5ZDBkMDE0XkEyXkFqcGc@._V1_.jpg' },
  { title: 'Karakter', year: 1997, genre: 'Drama', rating: 7.6, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BYTkwZTVhZmItZDllNy00NzdkLThjMDktN2U2ZTUwYmY1NWU3XkEyXkFqcGc@._V1_.jpg' },
  { title: 'De tweeling', year: 2002, genre: 'Drama', rating: 7.4, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTgyNjcwODg5OV5BMl5BanBnXkFtZTcwMzE1MzMzMQ@@._V1_.jpg' },
  { title: 'Antonia', year: 1995, genre: 'Drama', rating: 7.4, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzAxYmM1YzQtNDhmOS00N2UxLTljNTctOGE0ZDI3NWIxMTYwXkEyXkFqcGc@._V1_.jpg' },
  { title: 'Minoes', year: 2001, genre: 'Komedie', rating: 6.9, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTgzNDc1NjA0M15BMl5BanBnXkFtZTcwMDc0MDQxNw@@._V1_.jpg' },
  { title: 'Flodder', year: 1986, genre: 'Komedie', rating: 6.7, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BYWYyZGU4NTgtMjllMC00ZDYwLWIzYjEtNzljZjdkNDM4OTYwXkEyXkFqcGc@._V1_.jpg' },
  { title: 'Amsterdamned', year: 1988, genre: 'Misdaad', rating: 6.6, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BNmU0M2ZmYmYtMDViYi00YjhiLWJkNmEtMzRjYmZiN2ZjM2VhXkEyXkFqcGc@._V1_.jpg' },
  { title: 'Spoorloos', year: 1988, genre: 'Thriller', rating: 7.6, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BZTdlMmViNGMtMzJmZC00YTJlLTg3MDMtYTFmNWI1MTlkNzU1XkEyXkFqcGc@._V1_.jpg' },
  { title: 'De vierde man', year: 1983, genre: 'Thriller', rating: 7.1, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BYjk2ZTkyYzAtMDcxZS00NTdjLTkyNzgtYTJiZWQyM2MyYzE5XkEyXkFqcGc@._V1_.jpg' },
  { title: 'Ciske de Rat', year: 1984, genre: 'Drama', rating: 7.0, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjkwOGQ1YWYtYmMyYS00NmEzLWI2MmUtNGI4MzRiOTY4NTRjXkEyXkFqcGc@._V1_.jpg' },
  { title: 'Alles is liefde', year: 2007, genre: 'Komedie', rating: 7.0, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjA5ZGM0ZTktOTcyNC00NTEyLWI3YjAtOTNhYmVlY2I3N2I5XkEyXkFqcGc@._V1_.jpg' },
  { title: 'Van God Los', year: 2003, genre: 'Misdaad', rating: 7.1, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMzE3NjU0MjgtZjAxZC00NWJmLWI3M2ItZDY1Yzc5NTMxYzBlXkEyXkFqcGc@._V1_.jpg' },
  { title: 'De aanslag', year: 1986, genre: 'Drama', rating: 7.2, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BOGU1OGQxYzctMDllNi00ODQwLTg2MzktZmI1NzQ4ZWExNzBhXkEyXkFqcGc@._V1_.jpg' },
  { title: 'Simon', year: 2004, genre: 'Drama', rating: 7.8, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTQwODU3MTMxMl5BMl5BanBnXkFtZTcwMTA3OTYyMQ@@._V1_.jpg' },
  { title: 'All Stars', year: 1997, genre: 'Komedie', rating: 7.1, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzkyNDk0ZDctNmY2Ni00OGY2LWFlMzAtNDJiMjRjNThiN2UzXkEyXkFqcGc@._V1_.jpg' },
  { title: 'Zusje', year: 1995, genre: 'Drama', rating: 6.8, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BNmZiYWM5ODgtNWFhYi00MzEwLWFlYmYtZGU5MjdmZjMyYjZhXkEyXkFqcGc@._V1_.jpg' },
  { title: 'Left Luggage', year: 1998, genre: 'Drama', rating: 7.3, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjA1OTc5OTYyOF5BMl5BanBnXkFtZTcwMDM0NDcxMQ@@._V1_.jpg' },
  { title: 'Ober', year: 2006, genre: 'Komedie', rating: 6.9, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMzE3Nzg2NDgyMl5BMl5BanBnXkFtZTgwODg3NjQ2NjE@._V1_.jpg' },
  { title: 'Paradise Now', year: 2005, genre: 'Drama', rating: 7.4, type: 'Film', posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTIyNTg4MjE4Ml5BMl5BanBnXkFtZTYwNzk0Mzc2._V1_.jpg' },
  { title: 'Schatjes!', year: 1984, genre: 'Komedie', rating: 6.4, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BYWRhYWFkYjctODk3Ny00YjlkLTkzMTMtNDNiZGVmNjBiMmE5XkEyXkFqcGc@._V1_.jpg' },
  { title: 'Ja zuster, nee zuster', year: 2002, genre: 'Musical', rating: 6.8, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTAwNTkyNjYwNzleQTJeQWpwZ15BbWU3MDE3MjY4MjE@._V1_.jpg' },
  { title: 'Nynke', year: 2001, genre: 'Drama', rating: 7.0, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzMwMDQzODc3Nl5BMl5BanBnXkFtZTcwOTAzNzUyMQ@@._V1_.jpg' },
  { title: 'Phileine zegt sorry', year: 2003, genre: 'Komedie', rating: 6.0, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjAyNzkyNDMzNV5BMl5BanBnXkFtZTcwOTA4MzAwMQ@@._V1_.jpg' },
  { title: 'Interview', year: 2003, genre: 'Drama', rating: 6.9, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BNjFlYmJmNWItYzc5MS00ZmVmLWE0ZGItZWM4Zjk0ZDQ3NjMzXkEyXkFqcGc@._V1_.jpg' },
  { title: 'Als twee druppels water', year: 1963, genre: 'Thriller', rating: 6.9, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjUyNGNhZWMtYTgwNy00NjAzLTljYTUtMGM1NDQ0MGRhNmZmXkEyXkFqcGc@._V1_.jpg' },
  { title: 'De lift', year: 1983, genre: 'Horror-Komedie', rating: 6.1, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMGJhZTliNzktYzFhOC00NGEzLWI3Y2MtZWFjMzk4YzY0YzIzXkEyXkFqcGc@._V1_.jpg' },
  { title: 'Het paard van Sinterklaas', year: 2005, genre: 'Komedie', rating: 7.0, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzhkMmVkZWQtMTJmYS00YTNjLTlmM2EtZmMwNDAyOWMxYmRhXkEyXkFqcGc@._V1_.jpg' },
  { title: 'De Poolse bruid', year: 1998, genre: 'Drama', rating: 7.1, type: 'Film', isDutch: true, posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTY4NDAwNTIzM15BMl5BanBnXkFtZTcwMDU3NjAwMQ@@._V1_.jpg' },
];
