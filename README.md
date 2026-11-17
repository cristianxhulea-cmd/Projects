# ElectroPlan

Aplicație web pentru proiectarea instalațiilor electrice rezidențiale, gândită pentru tabletă cu pen.

## Ce face

- **Plan**: desenezi camerele trăgând pe grilă, apoi plasezi tabloul, prizele, luminile, întrerupătoarele și consumatorii (mașină de spălat, aer condiționat, plită, cuptor, boiler, feon, ventilator de aerisire). Elementele de perete se lipesc automat de cel mai apropiat perete.
- **Schiță rapidă**: cu „Schiță” desenezi cu penul tot planul, ca pe hârtie: conturul casei sau al camerelor și liniile pereților dintre ele. Cu „Radieră” (sau cu capătul radieră al penului, dacă îl are) ștergi doar porțiunea de linie peste care treci; trecută de-a lungul unui perete deja generat, îl marchează cu roșu pentru ștergere: la generare, un perete șters complet unește cele două camere, iar unul șters parțial devine un gol în perete. Liniile care se opresc puțin înainte de colț sau de alt perete (până la ~1 m) sunt prelungite automat; dacă tot rămâne un capăt liber, e marcat cu un cerc roșu pe plan. Liniile noi se leagă de pereții existenți și de capetele golurilor: ca să extinzi sau să închizi o cameră desenezi doar bucata care lipsește, nu tot conturul. „Generează planul” se poate folosi de mai multe ori: liniile noi se aplică peste planul existent (un perete tras printr-o cameră o împarte, un contur lipit de casă devine cameră nouă sau extinde camera vecină), iar elementele rămân în camerele lor. Prima generare transformă schița în camere: îndreaptă liniile, aliniază pereții apropiați, închide camerele formate de pereți (inclusiv în L sau U) și le lipește de camerele existente. Atingi cotele albastre ale camerei selectate și scrii lungimea măsurată în cm: camera se ajustează, iar cele de la dreapta sau de dedesubt se mută ca să rămână lipite. „+ Cameră alăturată” adaugă o cameră la dreapta, stânga, sus sau jos, din dimensiuni.
- **Niveluri**: parter, etaj, mansardă, fiecare cu planul lui; comuți din lista de jos. Conturul nivelului de dedesubt apare punctat și poate fi copiat. Un nivel fără tablou propriu e alimentat din tabloul principal printr-o trecere între niveluri (implicit chiar deasupra tabloului, sau unde pui elementul „Trecere nivel”); un nivel cu tablou propriu devine tablou secundar, alimentat printr-un circuit din tabloul principal, dimensionat după puterea etajului. Calculul, dozele și materialele adună toate nivelurile.
- **Nume scris de mână**: cu „Scris” scrii cu penul numele în chenarul camerei și apeși „Redenumește”; pe linkul Claude scrisul e citit de Claude, camera e redenumită (și tipul ales după nume: dormitor, baie, bucătărie…) iar scrisul dispare. În afara linkului Claude, sau atingând numele unei camere, se deschide un câmp de text peste nume, în care poți scrie cu tastatura sau cu scrisul de mână al tastaturii tabletei.
- **Cap scară, cruce și comenzi**: întrerupătoare cap scară (se montează câte două pe aceleași lumini) și cruce (între două cap scară). Fiecare întrerupător aprinde implicit luminile din camera lui; din Detalii → „Alege luminile pe plan” îl legi de orice corpuri, inclusiv din alte camere. Legăturile apar ca linii punctate (stratul „Comenzi”). Aplicația verifică perechile, iar la materiale coborârile la cap scară sunt în cablu cu 4 conductoare, la cruce cu 5, iar comenzile din altă cameră adaugă cablu 3×1,5.
- **Intră în cameră**: selectezi o cameră și apeși „Intră în cameră” (sau dublă atingere pe ea). Planul face zoom pe cameră, restul se estompează, elementele noi se pun doar în ea, iar panoul arată tot ce conține, perete cu perete, cu distanța de la colț și înălțimea editabile în cm. „Ieși din cameră” (sau dublă atingere în afara ei) revine la tot nivelul. Traseele se editează după ce alegi un circuit din lista de jos.
- **Plan rotibil**: rotești planul cu două degete, ca o hartă, sau cu butonul ↻ în pași de 90°. Se aliniază singur la 0°, 90°, 180° și 270°, iar „Îndreaptă” îl readuce la poziția inițială.
- **Recentrare**: butonul „Centrează” aduce elementul selectat în mijlocul ecranului; fără selecție încadrează tot planul. Dubla atingere pe plan face același lucru ca butonul fără selecție.
- **Editare**: cu „Selectează” atingi o cameră, o ușă sau un element. Bara de sus arată ce ai selectat, cu butoanele „Șterge” și „Închide”. Camerele se redimensionează trăgând de colțuri și de laturi, iar prizele și ușile de pe perete se mută odată cu el. Orice modificare se anulează cu ↶.
- **Goluri și camere unite**: cu „Gol perete” ștergi o porțiune de perete, trăgând de-a lungul ei. Din Detalii, „Unește cu…” face dintr-un dreptunghi continuarea camerei vecine, de exemplu un hol în formă de L: peretele dintre ele dispare, numele, tipul și suprafața devin comune, iar elementele aparțin aceleiași camere. „Separă” anulează unirea.
- **Uși**: le pui pe perete cu un tap, alegi lățimea, partea balamalelor și sensul de deschidere. Aplicația verifică regulile din I7 pentru zona de lângă uși:
  - niciun aparat în golul ușii sau la mai puțin de 10 cm de toc (zona verticală de instalare are 10–30 cm);
  - întrerupătorul stă pe partea clanței, nu în spatele ușii deschise; când îl pui lângă o ușă, se poziționează singur la 20 cm de toc;
  - fiecare cameră cu lumini are un întrerupător lângă o ușă, iar tabloul nu stă în spatele ușii.
- **Ferestre**: le pui pe perete cu un tap, alegi lățimea, parapetul și înălțimea golului sau le marchezi ca uși de balcon. Aparatele de sub parapet sunt permise. Cele aflate în dreptul golului sau la mai puțin de 10 cm de toc sunt marcate cu roșu.
- **Structură**: marchezi pereții de rezistență (trasezi de-a lungul peretelui) și grinzile (trasezi pe plan). Nu se taie și nu se găuresc fără acordul proiectantului de structură. Aplicația:
  - nu pune doze de derivație pe pereții de rezistență;
  - marchează aparatele de pe acești pereți și traseele care îi străpung sau merg în lungul lor;
  - marchează cu ✕ roșu fiecare loc în care un traseu de sub tavan traversează o grindă.
- **Doze**: dozele de derivație stau pe perete, în zona orizontală de sub tavan, ocolind golurile ușilor și ferestrelor și pereții de rezistență. Sunt numerotate D1, D2…; în „Circuite” găsești tabelul cu camera, peretele, distanța de la colț și înălțimea fiecăreia.
- **Trasee separate**: din lista de jos, din legenda circuitelor sau cu „Vezi traseul” alegi un circuit și vezi doar traseul lui, cu lungimea fiecărei porțiuni.
- **Trasee editabile**: atingi un traseu și tragi de oricare porțiune ca s-o muți; dozele de derivație le tragi pe alt perete al camerei. „Traseu automat” sau „Poziție automată” anulează modificarea.
- **Baia**: are circuite dedicate pentru iluminat, prize și consumatori, toate protejate cu diferențial de 30 mA. Traseele altor camere nu intră în baie și nu merg prin pereții ei. Ocolesc automat, iar dacă un traseu desenat manual trece prin baie, este marcat. Feonul are circuit dedicat cu priză IP44; ventilatorul de aerisire e pe circuitul de iluminat al camerei și pornește de la întrerupătorul luminii (se poate lega de alt întrerupător din „Alege luminile pe plan”).
- **Doze puse de tine**: mică (Ø80), medie (100×100) sau mare (160×100), pe orice perete, chiar înainte de tablou. Circuitele din cameră trec prin doza ta. Unde nu pui, aplicația alege singură poziția și mărimea după numărul de cabluri și te avertizează când o doză e prea mică.
- **Doze comune**: implicit, luminile și prizele din aceeași cameră folosesc aceeași doză de derivație, mărită după numărul de cabluri. Se poate dezactiva din „Proiect și circuite”.
- **Aparataj clasic sau modular**: din „Proiect și circuite” alegi sistemul. La modular, aplicația alege singură doza de aparataj după numărul de module (Ø68 de 2 module, 3M/503, 4M/504, 7M) și listează suporturile, ramele și mecanismele. Tipul de priză, Schuko sau slim, se alege pe proiect și se poate schimba pe fiecare priză; numărul de module pe priză e configurabil.
- **Priză multiplă**: 1–5 posturi în aceeași ramă, numărul se alege din Detalii. Fiecare post contează ca o priză la limita de prize pe circuit și primește doza lui de aparataj.
- **Priză TV**: priză dublă Schuko și priză TV/SAT în aceeași ramă. Cablul coaxial se socotește separat, în tub propriu, despărțit de cablurile de forță.
- **Trasee automate**: de la tablou la doza de derivație din fiecare cameră, apoi la fiecare element, pe orizontală și verticală. Implicit toate traseele orizontale trec prin pardoseală: dozele de derivație stau pe perete, la 30 cm de pardoseală, iar la iluminat cablul merge de la doză la întrerupător și de la întrerupător urcă pe perete și ajunge pe tavan la corpul de iluminat (aplicele de perete se alimentează tot pe jos). Din „Trasee orizontale” se poate alege și „Prize pe jos, lumini sus” sau „Toate sub tavan”. O doză nu poate fi pusă sau mutată în golul unei uși sau ferestre, unde peretele lipsește sau pe un perete de rezistență.
- **Circuite și tablou**: grupează circuitele (iluminat, prize, consumatori dedicați), alege siguranța, secțiunea cablului după curentul admisibil și căderea de tensiune (3 % la iluminat, 5 % în rest, I7-2011), diferențialele de 30 mA, disjunctorul general și dimensiunea tabloului.
- **Export PDF** (tab-ul „Circuite”): planul fiecărui nivel cu circuitele, schema monofilară a fiecărui tablou (disjunctor general, SPD, diferențiale, siguranțe, cu tabelul cablu / lungime / Pi / Ib / ΔU / destinație) și tabelul circuitelor, pe A3, cu cartuș pe fiecare pagină.
- **Materiale**: cablu pe secțiuni, cu rezervă, tub de protecție, doze, cleme, aparataj, corpuri de iluminat, echiparea tabloului și manopera. Introduci prețurile unitare și obții totalul. Tabelul se copiază direct în Excel.
- **Manoperă de șlițuire**: alegi materialul pereților (cărămidă, BCA, beton, gips-carton) pe proiect și pe fiecare cameră; pereții de rezistență contează ca beton. Aplicația calculează metrii de șliț și numărul de locașuri de doză pe fiecare material, iar din prețul tău pentru cărămidă și coeficienții de dificultate (beton ×2, BCA ×0,8, gips-carton ×0,5, toți modificabili) estimează valoarea manoperei.
- **Lucrări**: datele clientului, etape generate automat din proiect, cu ore estimate, panou De făcut / În lucru / Finalizat și progres.

Deschisă din linkul Claude, aplicația salvează proiectele în contul tău, iar ele apar pe orice dispozitiv pe care deschizi linkul. Indicatorul din colțul de sus arată starea: „Salvat în cont”. Deschisă ca fișier (`index.html`), aplicația salvează doar în browserul respectiv. Din „Salvare / import” copiezi oricând proiectul ca text JSON, pentru backup.

## Fișiere

- `electroplan.html`: sursa aplicației
- `index.html`: pagina completă, generată cu `./build.sh`
- `build.sh`: generează `index.html` din `electroplan.html`

## Ecran de pornire

La deschidere apare ecranul de pornire: continuă ultimul proiect, proiect nou, proiectele recente și conectarea. Îl redeschizi apăsând pe logo; se poate dezactiva cu „Nu mai afișa la pornire”.

## Cont și sincronizare

Pe site-ul publicat, ecranul de start cere autentificare cu e-mail și parolă („Creează cont nou” la prima utilizare, „Ai uitat parola?” pentru resetare). Fiecare utilizator vede doar proiectele lui: online prin Row Level Security (vezi `supabase/migrations`), iar local fiecare cont are propriul spațiu în browser. Proiectele se salvează online (Supabase) și apar pe orice dispozitiv conectat cu același cont; modificările făcute fără internet se urcă la revenirea conexiunii. „Ieși din cont” revine la ecranul de autentificare. Un cont e activ pe un singur dispozitiv: la logarea pe alt dispozitiv, cel vechi este deconectat în cel mult 20 de secunde, iar baza de date refuză citirea și scrierea din sesiunea veche (`supabase/migrations/0002_single_session.sql`). Modificările nesalvate rămân pe dispozitivul vechi și se urcă la următoarea logare de pe el. Pe linkul Claude, proiectele se salvează în contul Claude.

## Instalare ca aplicație

Pe site-ul publicat (Vercel), în Chrome pe tabletă sau telefon: butonul „Instalează aplicația” din antet sau meniul ⋮ → „Instalează aplicația” / „Adaugă pe ecranul de pornire”. Aplicația se deschide pe tot ecranul, fără bara browserului, și funcționează și fără internet după prima deschidere. Pe iPad/iPhone: Safari → Partajează → „Adaugă pe ecranul principal”.

## Rulare

Deschide `index.html` în browser sau activează GitHub Pages pe ramura principală.

> Rezultatele sunt orientative. Proiectul final se verifică și se semnează de un electrician autorizat ANRE.

## Actualizări

La fiecare publicare, `build.sh` scrie versiunea în `version.json` și în `index.html`. Aplicația deschisă verifică la 5 minute și la revenirea în ea dacă există o versiune nouă. Când există, afișează „Versiune nouă disponibilă”, iar „Actualizează” salvează proiectul și reîncarcă aplicația.

## Catalog de prețuri și ofertă

Prețurile unitare completate în Materiale intră în catalogul tău și se folosesc automat în toate proiectele. Catalogul și datele firmei se sincronizează în cont, la fel ca proiectele. Din Materiale poți exporta catalogul ca fișier CSV, îl editezi în Excel și îl imporți înapoi; rândurile se recunosc după cod sau după denumirea materialului.

Fila Ofertă adună materialele și manopera din plan cu prețurile din catalog și generează un PDF A4 cu datele firmei și logo-ul, beneficiarul, lista de materiale și manoperă, discount, TVA (21 % implicit, sau neplătitor), condițiile (valabilitate, avans, termen, garanție, cont bancar) și locurile de semnătură. Materialele pot fi incluse în ofertă sau trecute ca procurate de beneficiar. Numărul ofertei crește automat.

## Mod măsurare

Selectezi o cameră și apeși „Măsoară”. Aplicația evidențiază pe rând peretele de sus, cel din dreapta, apoi pe cei opuși, pentru verificare, înălțimea camerei și ușile și ferestrele camerei. Scrii valoarea în centimetri (362,5) sau în metri (3,625), apeși Enter sau Tab, iar planul se ajustează și trece la pasul următor; un telemetru cu „keyboard mode” poate scrie direct în câmp. Dacă peretele opus diferă cu peste 2 cm, poți alege media, păstra valoarea sau remăsura. La uși și ferestre măsori distanța de la colțul marcat și lățimea golului. Cotele măsurate apar cu verde. „+ Cameră alăturată” adaugă camera vecină și pornește direct măsurarea ei.

## Conturi, abonamente și Admin

Fiecare cont are o stare: probă (14 zile la înregistrare), activ sau suspendat, plus o dată de valabilitate (`supabase/migrations/0003_accounts_admin.sql`). Baza de date refuză proiectele conturilor suspendate sau expirate; aplicația verifică starea la pornire și la fiecare minut, deconectează contul și afișează motivul. La suspendare, datele locale ale contului sunt șterse de pe dispozitiv la următoarea verificare.

Fila Admin apare doar pentru rolul `admin` și permite: suspendare, activare, prelungire cu 30 de zile sau un an, deconectarea dispozitivului activ și ștergerea contului cu toate proiectele. Acțiunile se trec în jurnal. Rolul de admin se setează doar din baza de date: `update public.profiles set role='admin', status='active', valid_until='2100-01-01' where lower(email)=lower('adresa@ta');`


## Feedback de la testeri

Utilizatorii conectați au în antet butonul **Feedback**. Aleg tipul („Aș vrea să apară”, „Nu îmi place”, „Nu merge”), scriu mesajul și apasă „Trimite”. Odată cu mesajul se salvează unde erau (fila, elementul selectat, proiectul, dispozitivul și versiunea aplicației). Mesajele apar în fila Admin, la „Feedback de la testeri”, unde fiecare primește starea Nou, Văzut sau Rezolvat. Fiecare utilizator poate citi doar mesajele lui; doar adminul le vede pe toate și le schimbă starea (`supabase/migrations/0004_feedback.sql`, rulat o dată în Supabase → SQL Editor).
## Ergonomie

Bara de unelte arată „Selectează”, ultimele 4 unelte folosite și grupurile (Plan, Structură, Doze, Prize, Iluminat, Consumatori, Alimentare); se deschide câte un grup, iar alegerea rămâne memorată. Bara de jos păstrează zoom, centrare, nivel și trasee; restul (rotire, scară, straturi, ecran mare) e în „Afișare”. Pe ecranul de start, fiecare proiect are meniul ⋯ cu Redenumește, Duplică și Șterge, iar ștergerea se poate anula câteva secunde. Fila Documente adună proiectul tehnic PDF și oferta. Butonul „?” deschide ghidul în 4 pași, afișat automat la proiectele noi până îl oprești.

## Interfața nouă

Bara de sus arată proiectul (nume, adresă; atins deschide lista de proiecte), starea salvării, filele cu iconițe și contul. În stânga, o coloană cu categorii mari (Desen, Pereți, Prize, Lumini, Comenzi, Aparate, Doze, Tablou) deschide o paletă cu plăcuțe. Planul stă pe o foaie, cu indicatori de stare deasupra (circuite conforme I7, atenționări, putere, disjunctor, tablou, setări proiect). Bara de acțiuni apare lângă elementul selectat, iar jos rămâne o singură bară cu zoom, scară, nivel, trasee și straturi. Panoul unei camere are Rezumat (cifre, verificări I7 cu „Arată”, circuitele din cameră, Măsoară) și Detalii.

## Trasee pe la uși și editare manuală

Implicit, traseele automate trec dintre camere doar pe la uși sau prin goluri (peste toc), nu prin peretele dintre camere; dacă ocolul ar fi foarte mare, aplicația acceptă totuși trecerea prin perete. Setarea „Trecere între camere” din Proiect permite și varianta „Prin perete (cel mai scurt)”. Pentru un aparat selectat, „Editează traseul” afișează doar circuitul lui, iar porțiunile se trag cu degetul; „Traseu automat” revine la calcul.

## Desfășurata pereților și vederea 3D

„Pereți” (în bara camerei selectate) sau „Desfășurata pereților” (în Rezumat) arată fiecare perete din față: ușile și ferestrele, linia traseului sub tavan, coborârile pe perete cu lungimea lor, aparatele cu înălțimea de montaj și cotele de la colțul din stânga, în cm. Proiectul tehnic PDF are câte o pagină cu desfășuratele fiecărei camere. Butonul „3D” de deasupra planului deschide casa în 3D, cu pereți semitransparenți, traseele pe culoarea circuitului și coborârile pe pereți; se poate filtra pe circuit și ascunde pereții. Biblioteca 3D (Three.js) se încarcă doar la deschiderea vederii.

## Trasee mixte

Setarea „Trasee orizontale” are trei variante: „Prize pe jos, lumini sus” (implicit la proiectele noi), „Toate sub tavan” și „Toate în pardoseală”. În varianta mixtă, circuitele de prize și consumatorii montați jos merg prin pardoseală și urcă pe perete până la aparat; iluminatul și consumatorii montați sus (aer condiționat, boiler, peste 1,40 m) merg la 30 cm sub tavan. Lungimile de cablu, metrii de șliț, desfășurata și vederea 3D folosesc înălțimea fiecărui traseu.

## Cod privat (încărcat doar după logare)

- `electroplan.html` rămâne sursa completă. `./build.sh` (Python 3) generează:
  - `public/` — ce publică Vercel: pagina de logare (`tools/shell.html`), `sw.js`, `manifest.webmanifest`, `icons/`, `version.json`;
  - `private/app.js` și `private/version` — codul aplicației, care nu se publică pe Vercel.
- La fiecare push, GitHub Action `app-code.yml` urcă `private/app.js` în bucket-ul privat `app` din Supabase Storage, ca `<versiune>.js`. Are nevoie de secretul `SUPABASE_SECRET_KEY` setat în GitHub (Settings → Secrets and variables → Actions).
- `supabase/migrations/0005_app_code.sql` creează bucket-ul și regula prin care doar conturile cu licență valabilă pot descărca codul.
- Pagina de logare descarcă codul după autentificare și verificarea licenței, îl păstrează pe dispozitiv pentru lucru fără internet și îl șterge dacă licența expiră sau contul e suspendat.

## Plan de la arhitect (import PDF sau DXF)

- **Afișare → Plan arhitect → Alege fișierul**: PDF exportat din CAD (AutoCAD, ArchiCAD) sau o poză a planului. La PDF-urile cu mai multe pagini alegi pagina nivelului curent.
- **Scara** se calculează din cotele planului: textul numeric e potrivit cu linia de cotă de lângă el, inclusiv când linia e întreruptă de text. Dacă nu există cote, sau la poze, se calibrează manual: atingi capetele unei distanțe cunoscute și scrii valoarea în cm.
- **Pereții** se extrag din hașuri (linii paralele scurte, oblice), umpluturi (stâlpi, pereți plini) și linii groase. Liniile punctate și simbolurile mici sunt eliminate.
- **Atinge camera**: cu unealta Cameră, o atingere în interiorul unei camere din plan creează dreptunghiul cel mai mare care conține punctul, cu laturile sprijinite pe pereți. Camera se întinde până la axul pereților, se aliniază la camerele vecine și primește numele din textul planului, dacă există (Dormitor, Baie, Patio…).
- Planul se vede estompat sub desen. Din același meniu poți schimba vizibilitatea, muta planul, recalibra scara, înlocui sau șterge planul.
- Fișierul rămâne doar pe dispozitiv (IndexedDB) și nu se trimite nicăieri. În proiect se salvează doar poziția și scara.
- **DXF** (AutoCAD, ArchiCAD → Save as DXF): unitățile se iau din desen ($INSUNITS: mm, cm, m), deci nu e nevoie de scară. Se citesc linii, polilinii, arce, cercuri, hașuri, blocuri (inclusiv imbricate), SOLID și texte; straturile oprite sau înghețate și cele de cote, axe și cartuș sunt ignorate. Pereții se recunosc după numele stratului (PERETI, ZIDARIE, WALL, A-WALL…), după hașuri și după perechi de linii paralele la 5–60 cm. Dacă desenul conține mai multe planuri unul lângă altul, alegi planul nivelului curent.
- **Planul creat**: camerele (inclusiv forme compuse L/U/T, lipite din bucăți deschise una spre alta mai larg de 1,25 m), ușile (goluri de 0,55–1,35 m în pereți), ferestrele (cel puțin 3 linii paralele în grosimea peretelui) și golurile largi dintre spații. Zonele legate de exterior prin goluri mai late de 1,8 m (terase, curte) nu devin camere. Numele camerelor se iau din textele desenului.

## Colț teșit (perete oblic)

- Cameră → Detalii → **Colț teșit**: alegi colțul (stânga/dreapta, sus/jos) și cât se taie pe lățime și pe lungime, în cm. Opțional, **Ușă pe peretele oblic**, cu lățimea ei.
- Peretele oblic e perete adevărat: prizele și întrerupătoarele se lipesc pe el și se orientează spre cameră, traseele ocolesc colțul tăiat, iar suprafața și perimetrul se calculează corect. În 3D se vede peretele oblic cu golul ușii, iar în desfășurate apare fila „oblic”.
- La importul din PDF sau DXF, un perete oblic (două linii paralele înclinate, la 5–40 cm) care taie colțul unei camere devine automat colț teșit. Dacă peretele are un gol de 0,55–1,3 m, se pune și ușa.
- Triunghiul tăiat de peretele oblic se adaugă la camera vecină cu care comunică (fără perete între ele). Dacă triunghiul se deschide spre două camere, de exemplu un hol și un coridor, acestea devin o singură cameră compusă, iar peretele real dintre ele rămâne.
- Limite: un singur colț teșit pe cameră (sau pe fiecare bucată a unei camere compuse); fără ferestre pe peretele oblic.
