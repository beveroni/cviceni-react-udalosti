import React from 'react';

// Zadání 1: Dopiš komponentu `NakupniPolozka`, aby v divu byl vypsaný název položky a tlačítko s textem „koupit“.
// Zadání 2: Po kliknutí na tlačítko vypiš do konzole „Uživatel chce koupit DOPLŇ_NÁZEV_POLOŽKY“.

export const NakupniPolozka = ({ nazev }) => {
  const handleKoupit = () => {
    console.log(`Uživatel chce koupit ${nazev}`);
  };
  return (
    <div>
      <p>{nazev}</p>
      <button onClick={handleKoupit}>Koupit</button>
    </div>
  );
};

// Zadání 3: Pomocí `polozky.map` vypiš všechny názvy jako nákupní položky.

// Bonus: Nastav jednotlivým položkám ve výpisu `key`, aby vývojářské nástroje v prohlížeči nezobrazovaly varování. Nápověda: Key musí být v seznamu unikátní. Použij název položky.

export const Uloha5 = () => {
  const polozky = ['hrušky', 'jablka', 'třešně', 'jahody'];

  return (
    <>
      {polozky.map((polozka, index) => (
        <NakupniPolozka key={`${polozka}_${index}`} nazev={polozka} />
      ))}
    </>
  );
};
