# Boiler-Room-Week-6-8

Detta är en applikation som låter användaren spara kommande resemål i en lista för att göra det enklare att planera sin semester.
Applikationen består av tre sidor:
1. Första sidan visar alla sparade resor i en lista och låter användaren söka bland dem. 
   Varje resa har också knappar för att redigera, ta bort eller visa detaljer om resan.
2. Formuläret låter användaren lägga till nya resor. Det är även på denna sidan eventuella redigeringar görs.
3. Detalj sidan nås via att trycka på detaljknappen på en vald resa och visar mer information om den resa man valt.

För att installera och köra detta projekt krävs det att Git, Visual Studio Code och Node.js finns installerat lokalt på den maskin projektet skall köras ifrån. Projektet finns tillgängligt på Github via följande länk: https://github.com/filipwretner/Boiler-Room-Week-6 , och kräver därmed ett registrerat konto på Github. Nedan kommer två installationsvägar att visas, ena för att hämta direkt via Visual Studio Code och andra för att hämta via Github Desktop applikationen.

Hämta via Visual Studio Code:
1. Kopiera länken till Github repot ovan.
2. Kör kommandot Git: Clone. Antingen via Source Control i ett tomt VS Code eller genom att skriva in det i Command Pallette genom att trycka Ctrl+Shift+P.
3. Klistra in länken och kör 'Clone from URL'.
4. Välj en mapp att installera projektet i.

Hämta via Github desktop:
1. Följ länken till repot, tryck på 'Code' och sedan 'Open with Github Desktop'.
2. I prompten som kommer upp i Github Desktop, välj 'Clone'.
3. Tryck på 'Open with Visual Studio Code'.

Installera nödvändiga paket:
1. Öppna terminalen och skriv in cd TripManager
2. Kör npm install
3. Kör npm install react-router-dom
4. Kör npm install @reduxjs/toollkit
5. Kör npm install react-redux
6. Kör npm run dev för att köra applikationen i webbläsaren.


Projektetsstruktur:
```
TripManager/
├── src/
│   App.jsx
│   index.css
│   main.jsx
│
├───components
│   ├───Footer
│   │       footer.css
│   │       footer.jsx
│   │
│   ├───Form
│   │       FormInput.jsx
│   │       TripForm.jsx
│   │       TripInput.css
│   │
│   ├───Header
│   │       Header.css
│   │       Header.jsx
│   │
│   ├───Item
│   │       DeleteTrip.jsx
│   │       EditTrip.jsx
│   │       TripItem.css
│   │       TripItem.jsx
│   │
│   ├───List
│   │       TripList.css
│   │       TripList.jsx
│   │
│   └───Utilities
│           Filter.jsx
│           LocalStorageManager.jsx
│           TripManager.jsx
│
├───pages
│       Details.jsx
│       Fallback.jsx
│       Form.jsx
│       Home.jsx
│
├───redux
│       slice.js
│       store.js
│
└───routes
        Routes.jsx
```
