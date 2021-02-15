import React from 'react';
import installerImage from '../styles/img/vienna-fenster-installer.svg';
import visionImage from '../styles/img/vienna-fenster-vision.svg';

export default function About() {
  return (
    <div id="about" className="bg-light">
      <div className="grid-container">
      <br /><br />
        <div className="grid-container-row">
          <div className="grid-container-col-md-6">
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
            
            <div className="grid-container-col-md-6">
              <div>
                <img src={installerImage} alt="about us" />
              </div>
            </div>
        </div>
        <br /><br />
        <br /><br />
        <div className="grid-container-row">
          <div className="grid-container-col-md-6">
            <img src={visionImage} alt="vision" />
          </div>
          <div className="grid-container-col-md-6">
              <h1 className="x-large">Unser Team</h1>
              <p className="lead">
                Ein junges Team von engagierten und motivierten Mitarbeitern setzt zielsicher
                Akzente in der Fensterbranche und sorgt auch für eine optimale
                Umsetzung der von uns angebotenen Elemente. <br /><br />
                Auch wir sind auf verschiedene Hersteller angewiesen und wissen aus eigener Erfahrung,
                dass es nicht leicht ist,
                bei einem derart großen Angebot eine sorgfältige Auswahl im Bereich der Qualität,
                Perfektion und Langlebigkeit unserer Elemente zu finden.
              </p><br />
              <h2>Unsere Mission</h2>
              <p className="lead">
                Unsere Mission ist es, unseren Partnern Qualitätsfenster zur Verfügung zu stellen, indem wir Fenster von höchster Qualität liefern und die Kundenzufriedenheit durch unsere effizienten Bemühungen sicherstellen.
              </p>
              <p className="lead">Unser Ziel ist es, der Fensterhersteller Nummer eins in ganz Österreich zu sein</p>
            </div>
        </div>
      </div>
    </div>
  );
}
