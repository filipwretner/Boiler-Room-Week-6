# Boiler-Room-Week-6-8

Detta är en applikation som låter användaren spara kommande resemål i en lista för att göra det enklare att planera sin semester.
Applikationen består av tre sidor:
1. Första sidan visar alla sparade resor i en lista och låter användaren söka bland dem. 
   Varje resa har också knappar för att redigera, ta bort eller visa detaljer om resan.
2. Formuläret låter användaren lägga till nya resor. Det är även på denna sidan eventuella redigeringar görs.
3. Detalj sidan nås via att trycka på detaljknappen på en vald resa och visar mer information om den resa man valt.

Projektetsstruktur:

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

