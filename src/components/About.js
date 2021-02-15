import React from 'react';
import aboutUsImage from '../styles/img/about-us.jpg';

export default function About() {
  return (
    <div id="about" className="bg-light">
      <div className="grid-container">
        <div className="grid-container-col-md-6">
            <img src={aboutUsImage} alt="about us" />
        </div>
        <div className="grid-container-row">
          <div className="grid-container-col-md-4">
            <h1 className="x-large">Wer sind wir?</h1>
            <p className="lead">
              Wir sind seit 10 Jahren für unseren Kunden transparent und zuverlässig da,
              mit Bosnischen Preisen und Deutschen Qualität.
              Wir als Unternehmen suchen die Transparenz zu unseren Kunden,
              verbunden mit einem kompetenten Kundenservice.
              Ehrlichkeit und Liebe zum Detail bei unseren
              Produkten gehören bei uns zur Selbstverständlichkeit,
              wenn es um die Ansprüche unserer Kundschaft geht.
            </p>
          </div>
            <div className="grid-container-col-md-4">
              <h1 className="x-large">Unser Team</h1>
              <p className="lead">
              Ein junges Team von engagierten und motivierten Mitarbeitern setzt zielsicher
              Akzente in der Fensterbranche und sorgt auch für eine optimale
              Umsetzung der von uns angebotenen Elemente.
              Auch wir sind auf verschiedene Hersteller angewiesen und wissen aus eigener Erfahrung,
              dass es nicht leicht ist,
              bei einem derart großen Angebot eine sorgfältige Auswahl im Bereich der Qualität,
              Perfektion und Langlebigkeit unserer Elemente zu finden.
              </p>
            </div>
            <div className="grid-container-col-md-4">
              <h1 className="x-large">Fachwissen</h1>
              <p className="lead">
              Unser Fachwissen macht es möglich, dass wir nicht nur Qualität
              und ein ausgewogenes Preis-Leistungs-Verhältnis bieten können,
              sondern auch in jeder noch so schwierigen Lage ein verlässlicher
              und treuer Partner für unsere Kundschaft sind.
              Dabei spielt es keine Rolle, ob es sich um eine Maßanfertigung der Fenster oder Türen,
              oder um eine Sonderform handelt. Auch die ausgewogene Beratung unserer
              Mitarbeiter im Bereichder besonderen Kundenwünsche und Geschmack geben dem Kunden
              ein sicheres Gefühl bei der Bestellung seiner Fenster, Türen, od. Sonnenschutz.
              Mit einem gewissen Stolz, sowie einer ausgewogenen Beratung können wir
              daher unseren Kunden, Partnern und Freunden eine Produktpalette anbieten,
              welche keine Wünsche offen lässt.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
