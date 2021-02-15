import React from 'react';
import shucoImage from '../styles/img/schueco-logo.jpg';
export default function Products() {
  return (
    <div id="products">
      <div className="grid-container-row">
        <div className="grid-container-col-md-4" />
        <div className="grid-container-col-md-4 center">
          <h1 className="x-large color-primary">Unsere Produkte</h1>
          <a href="https://www.schueco.com/web2/de/privatkunden/produkte/fenster"><img src={shucoImage} alt="Schueco" /></a>
          <p className="lead underline"><a href="https://www.schueco.com/web2/de/privatkunden/produkte/fenster">Erleben Sie die Qualität</a></p>
        </div>
        <div className="grid-container-col-md-4" />
      </div>
      <div className="grid-container-row">
        <div className="grid-container-col-md-12">
          <h1 className="x-large center color-primary">Eigenschaften – Das leisten unsere Produkte für Sie</h1>
        </div>
      </div>
      <div className="grid-container-row">
        <div className="grid-container-col-md-1" />
        <div className="grid-container-col-md-5">
          <h2>DAS SPARPOTENTIAL IST ENORM</h2>
          <p className="lead">
            Gehen Sie bei der Dämmung Ihres Hauses keine Kompromisse ein.
            Schüco Fenster garantieren Ihnen höchste Energieeffizienz.
            So sorgen Sie für deutlich weniger Heizkosten.
            Zusätzlich sparen können Sie durch gezieltes Lüften.
            Auch dafür hat Schüco die passende Lösung.
          </p>
        </div>
        <div className="grid-container-col-md-5">
          <h2>HÖCHSTE DÄMMWERTE</h2>
          <p className="lead">
            Mit Uf-Werten von 0,8 bis 1,6 W/(m2K) erreichen Schüco Fenster
            höchste Wärmedämmwerte. Ermöglicht werden diese Spitzenwerte z.B.
            im Bereich Metallbau durch eine erweiterte Dämmzone mit Schaumverbund-Isoliersteg,
            eine optimierte Mitteldichtung sowie ein neuartiges Prinzip
            der Wärme-dämmung im Glasfalz.
          </p>
        </div>
        <div className="grid-container-col-md-1" />
      </div>
      <div className="grid-container-row">
        <div className="grid-container-col-md-1" />
        <div className="grid-container-col-md-5">
          <h2>BEGINNT HEUTE SCHON AN DER TÜR</h2>
          <p className="lead">
            Die Wärme bleibt drinnen, die Kälte draußen. Haustüren von Schüco bieten Wärmedämmung,
            die heute schon sämtliche gesetzlichen Anforderungen von morgen erfüllen.
            Aus dem Zusammenspiel von Haustür, Fenstern, Schiebeelementen etc. lässt sich das
            Energiesparpotenzial optimal ausschöpfen. Das Ergebnis: niedrigere Energiekosten.
            Und ein Engagement für den Klimaschutz, das schon an der Haustür beginnt.
          </p>
        </div>
        <div className="grid-container-col-md-5">
          <h2>KONSTANTES WOHNKLIMA</h2>
          <p className="lead">
            Eine wärmegedämmte Haustür von Schüco sorgt permanent für ein behagliches
            Raumklima bei jeder Außentemperatur. In der kalten Jahreszeit bleibt die Wärme
            im Haus und im Sommer die Hitze draußen. So sparen Sie teure Energie für Ihre
            Heizung oder Klimaanlage - und leisten gleichzeitig einen Beitrag zum Klimaschutz.
            Schüco garantiert Ihnen höchste Dämmwerte bei jedem Wetter. Unsere Türschwellen
            bewahren Sie außerdem vor Komfortverlusten durch Schlagregen und Zugluft.
          </p>
        </div>
        <div className="grid-container-col-md-1" />
      </div>
    </div>
  );
}
