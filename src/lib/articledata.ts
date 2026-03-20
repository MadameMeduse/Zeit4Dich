export interface ArticleData {
  id: string;
  title: string;
  subtitle?: string; // Optional
  excerpt: string;
  content: string; // HTML string
  category: 'meditationen' | 'lifestyle' | 'blog';
  categoryLabel: string;
  date: string;
  thumbnail: string;
  heroImage: string;
}

export const ARTICLE_DB: Record<string, ArticleData> = {
  
  // --- MEDITATIONEN ---
  
  'm1': {
    id: 'm1',
    title: 'Lichtfeld-Aktivierung',
    subtitle: 'Diese Meditation ist eine Erinnerung an dein eigenes Licht, nicht etwas, das du herstellst.',
    excerpt: 'Diese Meditation ist eine Erinnerung an dein eigenes Licht – sie führt dich in dein eigenes Lichtfeld, in dem Körper, Bewusstsein und Lebensenergie miteinander schwingen.',
    category: 'meditationen',
    categoryLabel: 'Meditationen',
    date: '21. Dez 2025',
    thumbnail: 'images/innerlight.webp',
    heroImage: 'images/innerlight.webp',
    content: `
      <h2>Lichtfeld-Aktivierung</h2>
      <p>Diese Meditation ist eine Erinnerung an dein eigenes Licht, nicht etwas, das du herstellst.</p>
      <p>Sie führt dich in dein eigenes Lichtfeld – den feinstofflichen Raum, in dem Körper, Bewusstsein und Lebensenergie miteinander schwingen.</p>
      <p>Während du dich entspannst und dein Atem tiefer wird, öffnet sich dieses Feld und beginnt, sich zu erinnern: an seine ursprüngliche Ordnung, an die Klarheit deines Seins.</p>
      
      <h3>Die Aktivierung des Feldes</h3>
      <p>Die Aktivierung geschieht sanft, durch Wahrnehmung und Präsenz. Du lernst, das Licht nicht nur zu fühlen, sondern es zu führen – bis jede Zelle deines Körpers mitschwingt.</p>
      <p>Das Lichtfeld bleibt in dir aktiv, während du dich wieder bewegst, sprichst, lebst. Es arbeitet still weiter, integriert, harmonisiert, erinnert dich an das, was du bist: bewusstes Licht in menschlicher Form.</p>
      
      <section>
        <h3>Persönliche Einladung</h3>
        <p>Erlebe die Aktivierung deines Lichtfeldes noch intensiver in einer persönlichen Atemreise mit mir. Gemeinsam tauchen wir tiefer in deine Präsenz ein, lösen Blockaden und bringen deine energie auf Zellebene in Fluss. Spüre, wie Herz, Körper und Bewusstsein sich öffnen und neu verbinden. Lass uns gemeinsam diesen Raum für Heilung, Klarheit und lebendige Kraft erschaffen.</p>
      </section>
    `
  },

  'm2': {
    id: 'm2',
    title: 'Feld-Reset',
    subtitle: 'Schritt-für-Schritt-Meditation für einen regelmäßigen Feld-Reset.',
    excerpt: 'Fokus auf Atem, Schutz und bewusste Energieabgrenzung nach intensiven Begegnungen.',
    category: 'meditationen',
    categoryLabel: 'Meditationen',
    date: '18. Dez 2025',
    thumbnail: 'images/boundaries.webp',
    heroImage: 'images/boundaries.webp',
    content: `
      <h2>Feld-Reset</h2>
      <p>Hier ist eine klare Schritt-für-Schritt-Meditation für einen regelmäßigen Feld-Reset mit Fokus auf Atem, Schutz und bewusste Energieabgrenzung.</p>
      
      <h3>Zweck</h3>
      <p>Diese Meditation dient dazu, dein energetisches Feld zu klären, fremde Energien loszulassen und die eigene Präsenz bewusst zu stabilisieren. Sie unterstützt dich dabei, nichts zu tragen, was nicht dir gehört, und stellt sicher, dass du deine Kraft und Klarheit behältst – besonders nach intensiven Begegnungen oder emotional aufgeladenen Situationen.</p>
      
      <h3>Vorbereitung</h3>
      <ul>
        <li>Suche einen ruhigen, ungestörten Ort.</li>
        <li>Setze dich bequem hin oder lege dich entspannt hin.</li>
        <li>Schließe die Augen und atme ein paar Mal tief durch, um anzukommen.</li>
        <li>Lenke deine Aufmerksamkeit auf deinen Körper, spüre die Auflagepunkte (Sitz, Füße, Hände).</li>
      </ul>

      <section>
        <h3>Die Schritte der Meditation</h3>
        
        <h4>Schritt 1 – Zentrieren (1–2 Minuten)</h4>
        <p>Atme tief ein und aus. Spüre, wie dein Atem den Brustkorb, den Bauch und den Rücken bewegt. Stelle innerlich die Absicht ein: „Ich komme in meinen Raum, ich bin hier in meiner Präsenz. Alles, was nicht zu mir gehört, bleibt außerhalb.“</p>
        
        <h4>Schritt 2 – Wahrnehmen der Energie (2–3 Minuten)</h4>
        <p>Nimm wahr, wie dein Feld sich ausbreitet – das Energiefeld um deinen Körper herum. Ohne zu bewerten, spüre, welche Energien in dir sind. Du kannst fühlen: Druck, Schwere, Unruhe oder Fremdes, das du getragen hast.</p>
        
        <h4>Schritt 3 – Atemfokus: Einatmen (1 Minute)</h4>
        <p>Atme tief ein und stelle dir vor, wie reine, klare Energie deinen Körper füllt. Diese Energie dient ausschließlich dir. Spüre, wie dein Körper, Herzbereich und Kopf innerlich von Licht und Klarheit durchströmt werden.</p>
        
        <h4>Schritt 4 – Atemfokus: Ausatmen (2–3 Minuten)</h4>
        <p>Atme langsam und bewusst aus, stell dir vor, dass alles, was nicht zu mir gehört, deinen Körper verlässt. Visualisiere, wie diese fremde Energie in die Erde oder ins Licht zurückfließt, ohne dass sie dich berührt.</p>
        <p>Wiederhole den Vorgang: Einatmen = aufnehmen, was dir dient. Ausatmen = loslassen, was fremd ist.</p>
        
        <h4>Schritt 5 – Aktivierung von Schutz und Grenzen (1–2 Minuten)</h4>
        <p>Nach 3–5 Atemzyklen stelle dir dein Feld wie eine unsichtbare Kugel um dich herum vor. Sie ist flexibel, aber undurchlässig für fremde Energien. Sage innerlich: „Alles, was nicht zu mir gehört, kann nicht in mein Feld treten. Mein Raum bleibt klar, geschützt und stabil.“</p>
        
        <h4>Schritt 6 – Integration (1 Minute)</h4>
        <p>Atme noch einmal tief ein und aus, fühle die Ruhe und Klarheit in deinem Körper. Spüre, wie dein Feld jetzt stabil und energetisch sauber ist. Öffne langsam die Augen und nimm diese Präsenz bewusst mit in den Alltag.</p>
      </section>

      <section>
        <h3>Tipps zur Anwendung</h3>
        <p>Regelmäßig durchführen: z.B. einmal täglich oder nach jeder zu intensiven Erfahrung. Bei Bedarf auch als kurze 5-Minuten-Version möglich: 3 Atemzyklen mit bewusstem Loslassen und Schutz.</p>
      </section>

      <footer>
        <h4>Schlusswort</h4>
        <p>Nutze diese Meditation, um deinen energetischen Raum täglich zu klären und deine innere Stabilität zu stärken. Je regelmäßiger du sie praktizierst, desto leichter fällt es dir, bei Begegnungen zentriert, geschützt und kraftvoll zu bleiben. Sie hilft dir, bewusst deine Energie zu steuern, Belastendes loszulassen und mit Klarheit in deinen Alltag zurückzukehren.</p>
      </footer>
    `
  },

  'm3': {
    id: 'm3',
    title: 'Zurück in die Mitte',
    subtitle: 'Erinnerung an dein schöpferisches Selbst',
    excerpt: 'Eine kleine Praxis, um in die Stille zurückzukehren und dich zu erinnern, wer du bist.',
    category: 'meditationen',
    categoryLabel: 'Meditationen',
    date: '15. Dez 2025',
    thumbnail: 'images/creative2.webp',
    heroImage: 'images/creative2.webp',
    content: `
      <h2>Zurück in die Mitte</h2>
      <p>Manchmal verlieren wir uns in Gedanken, Erwartungen oder den Strömungen des Alltags. Doch es gibt einen Raum in dir, der nie verloren geht – egal, wie stürmisch das Außen wird. Diese kleine Praxis ist ein Weg dorthin: eine Rückkehr in die Stille, in der du dich erinnerst, wer du bist – Bewusstsein in Bewegung, ein schöpferisches Wesen im Wandel der Welt.</p>
      
      <section>
        <h3>1. Anhalten</h3>
        <p>Schließe für einen Moment die Augen. Nimm einen Atemzug – langsam und tief – so, als würdest du die Welt umarmen. Beim Ausatmen lass alles los: Druck, Erwartungen, Geschichten. Nur du und dein Atem bleibt.</p>
        
        <h3>2. Wahrnehmen</h3>
        <p>Spüre einfach, dass du bist. Nicht, wer du bist oder was du tun musst – nur dieses stille, lebendige Sein. Sag innerlich: „Ich bin hier. Ich bin Bewusstsein. Ich bin die, die wahrnimmt.“</p>
        
        <h3>3. Rückkehr in die Weite</h3>
        <p>Lenke deine Aufmerksamkeit vom Denken auf den Raum dahinter, in dem du deine Gedanken beobachtest. Dort, wo es still ist. Dort, wo du dich erinnerst: „Ich bin nicht mein Sturm. Ich bin der Himmel, in dem er zieht.“</p>
        
        <h3>4. Verbinde dich</h3>
        <p>Lege eine Hand auf dein Herz. Atme hinein, bis du Wärme spürst. Fühle, dass in dir eine lebendige Intelligenz wirkt – dieselbe, die Sterne bewegt, Meere atmen lässt, Blumen öffnen lässt. Diese Kraft ist nicht außerhalb von dir. Sie ist du.</p>
        
        <h3>5. Ankern</h3>
        <p>Öffne langsam die Augen. Schau dich um – such ein Objekt in deiner Nähe: ein Stein, eine Kerze, ein Blatt. Das wird dein Anker sein. Sag innerlich: „Du erinnerst mich: Ich bin verbunden. Ich bin Schöpferin.“ Jedes Mal, wenn du dich wieder erinnern willst, berühre deinen Anker, atme und lächle.</p>
      </section>

      <footer>
        <h4>Abschluss</h4>
        <p>Bleib noch für einen Moment still. Spüre, wie Weite, Ruhe und Vertrauen in dir schwingen. Dann geh in deinen Tag – nicht als jemand, der kämpft, sondern als jemand, der schöpft.</p>
      </footer>
    `
  },

  'd1': {
    id: 'd1',
    title: 'Wasser-Detox-Ritual',
    subtitle: 'Ein einfaches DIY-Ritual für zuhause',
    excerpt: 'Detox mit Wasser, Affirmationen und bewusster Intention.',
    category: 'lifestyle',
    categoryLabel: 'Lifestyle',
    date: '20. Dez 2025',
    thumbnail: 'images/wasserdetox.webp',
    heroImage: 'images/wasserdetox.webp',
    content: `
      <h2>Wasser-Detox-Ritual</h2>
      <p>Detox ist in aller Munde – und das aus gutem Grund. Es verjüngt, entlastet, wirkt oft heilend und schenkt dir neue Energie, Klarheit und Leichtigkeit im Alltag. Viele Detox-Programme sind jedoch kompliziert, zeitaufwendig oder teuer.</p>
      <p>Dabei liegt die Kraft zur Erneuerung direkt vor dir – in deinem Glas Wasser. Wasser ist der zentrale Bestandteil jeder Entgiftungskur, und wir trinken es jeden Tag. Genau hier beginnen wir: mit einem einfachen, kraftvollen Ritual zur Wasser-Programmierung – sanft, bewusst und absolut kostenlos.</p>
      
      <h3>Warum Wasser programmieren?</h3>
      <p>Wasser besitzt eine kristalline Struktur und ist fähig, Informationen aufzunehmen – wie eindrucksvoll durch die Arbeit des japanischen Forschers Masaru Emoto gezeigt wurde. Seine Wasserkristall-Fotografien belegen, wie stark Worte, Gedanken und Gefühle auf Wasser wirken.</p>
      <p>Da auch dein Körper zu etwa 70% aus Wasser besteht, kannst du durch die bewusste Programmierung deines Trinkwassers eine direkte Botschaft an jede deiner Zellen senden. Du brauchst keinen Schamanen, keine teure Technik – nur dich und deine klare Absicht.</p>
      
      <section>
        <h3>💧 So geht's – Dein tägliches Wasser-Ritual</h3>
        <ol>
          <li><strong>Nimm dir einen Moment Zeit.</strong> Halte dein Glas oder deine Karaffe Wasser in beiden Händen. Komm in die Ruhe. Entspanne deine Bauchmuskeln, damit du frei atmen kannst. Nimm ein paar ruhige, entspannende Atemzüge direkt in dein Herz. Sei ganz bei dir – präsent im Moment.</li>
          <li><strong>Blicke in das Wasser.</strong> Verbinde dich mit dem Wasser – atme jetzt bewusst in deine Hände hinein, die dein Glas oder deine Karaffe halten. Du hältst flüssige Wasserkristalle, offen für jede Schwingung und Energie! Spüre die Verbindung. Atme sanft und fokussiert.</li>
          <li><strong>Sprich deine Botschaft – laut oder leise.</strong> Wähle positive, klare, lebensbejahende Worte. Sprich sie mit Überzeugung und Herz. Wiederhole die Affirmation ein paar Mal – so lange, bis du ihre Kraft klar und deutlich in dir spürst. Es ist wichtig, deine Affirmation mit Bedacht und Bedeutung zu formulieren – so kann das Wasser die Botschaft wirklich aufnehmen und ihre Wirkung entfalten.</li>
          <li><strong>Trinke bewusst.</strong> Lass das Wasser in dir wirken – und die positive Botschaft jede Zelle deines Körpers erreichen. Spüre, wie sich die Information in dir ausbreitet, dich durchleuchtet und in Bewegung bringt. Freu dich jetzt schon auf die heilende Wirkung und sei dankbar dafür – schon jetzt und für das, was noch kommen wird.</li>
        </ol>
      </section>

      <section>
        <h3>🌸 Vorschläge für deine Wasser-Affirmationen</h3>
        <ul>
          <li>„Reinige meinen Körper von allem, was mir nicht mehr dient."</li>
          <li>„Ich empfange Gesundheit, Licht und neue Kraft."</li>
          <li>„Bringe mich in mein natürliches Gleichgewicht."</li>
          <li>„Ich vertraue dem Reinigungsprozess meines Körpers."</li>
          <li>„Lade jede Zelle mit Lebenskraft und Klarheit."</li>
          <li>„Schenke mir Ruhe, Leichtigkeit und inneren Frieden."</li>
          <li>„Ich bin offen für Heilung auf allen Ebenen."</li>
          <li>„Dieses Wasser nährt mich auf die beste Weise."</li>
          <li>„Ich bin in Harmonie mit mir selbst."</li>
          <li>„Danke für die Reinigung, die jetzt geschieht."</li>
        </ul>
        <p><em>💡 Tipp: Vermeide Begriffe wie „Schmerz" oder „Blockade". Statt „Ich will keine Schmerzen mehr", lieber: „Ich öffne mich für Heilung und Wohlgefühl." Je positiver geladen deine Wasser-Affirmation ist, desto wirksamer ist es!</em></p>
      </section>

      <section>
        <h3>Noch kraftvoller: Wasser segnen mit Symbolen und Kreativität</h3>
        <p>Schreibe deine Affirmation auf einen Zettel und lege ihn unter dein Glas oder deine Karaffe. Das Wasser nimmt die Botschaft auf. Während du deine Worte aufschreibst, richtest du deine volle Aufmerksamkeit und positive Absicht darauf. Durch diesen bewussten Fokus erzeugst du ein energetisches Feld, das das Wasser bereichert und harmonisiert.</p>
        <p>Stelle deinen Wasserkrug auf ein Mandala, z.B. die Blume des Lebens, ein kraftvolles, harmonisierendes Symbol. Es gibt auch spezielle Aufkleber mit Mandala-Motiven, wie der Blume des Lebens, die du auf Wasserflaschen oder -krüge kleben kannst, damit das Wasser energetisiert und harmonisiert wird. Solche Aufkleber findest du in Bioläden oder online.</p>
        
        <h4>Ideen zum googeln (in Google «Bilder») und ausdrucken:</h4>
        <ul>
          <li><strong>Sri Yantra Mandala</strong> – Ausrichtung, Fokussierung, innere Ordnung</li>
          <li><strong>Metatrons Würfel</strong> – Struktur, Stabilität, Schutz und Klarheit</li>
          <li><strong>Saat des Lebens</strong> – Die „kleine sanfte Schwester" der Blume des Lebens. Ruhe und Regeneration.</li>
          <li><strong>Lotus-Mandala</strong> – Reinheit, Herzöffnung und Wachstum</li>
          <li><strong>Om-Symbol</strong> – Urklang, Einheit und Präsenz</li>
          <li><strong>Triskelion (Dreifachspirale)</strong> – Bewegung, Wandel und Lebenskraft</li>
          <li><strong>Keltische Knotenmandalas</strong> – Erdung, Kontinuität und innere Stabilität</li>
          <li><strong>Blume des Lebens</strong> – Harmonie, Ordnung, Ganzheit</li>
        </ul>

        <h4>Male oder schreibe direkt auf die Flasche.</h4>
        <p>Nutze Permanentstifte, um deine Flasche mit liebevollen Worten, kraftvollen Affirmationen, Symbolen oder Zeichnungen zu gestalten. Das kann eine schöne, persönliche Gestaltung sein – allein oder gemeinsam mit deinen Kindern. So bringst du deine Absicht sichtbar zum Ausdruck und verbindest dich noch intensiver mit deinem Wasser-Ritual.</p>
        <p>Lass deiner Kreativität freien Lauf! Vielleicht möchtest du Motive wählen, die für dich Heilung, Schutz oder Freude symbolisieren. Jede einzelne Linie oder jedes Wort überträgt positive Energie auf das Wasser und macht dein Ritual zu etwas ganz Besonderem. So eine selbstgestaltete Flasche eignet sich wunderbar als persönliches Geschenk für deine liebsten Freunde.</p>
      </section>

      <footer>
        <h3>Mach es zu deinem eigenen Ritual</h3>
        <p>Mach dir keinen Druck. Es braucht keine Perfektion – nur deine echte Präsenz. Auch spontane, unzensierte Sätze wirken, solange sie aus dem Herzen kommen.</p>
        <p>🌿 Mach es einfach. Mach es regelmäßig. Mach es zu deinem Moment.</p>
      </footer>
    `
  },

  'd2': {
    id: 'd2',
    title: 'Gesprächs-Magnet',
    subtitle: 'Gelungene Gespräche Vor-Programmieren',
    excerpt: 'Nutze dein Energiefeld, um schwierige Gespräche positiv zu beeinflussen.',
    category: 'lifestyle',
    categoryLabel: 'Lifestyle',
    date: '17. Dez 2025',
    thumbnail: 'images/Gesprächs-Magnet.webp',
    heroImage: 'images/Gesprächs-Magnet.webp',
    content: `
      <h2>Gesprächs-Magnet</h2>
      <p>Du musst zum „Roten Teppich" – dein aufgeregter Chef will mit dir etwas klären? Du musst deinen Beziehungspartner in Konflikt konfrontieren, um Weiteres zu besprechen? Du solltest einen Vortrag vor dem ganzen Team halten?</p>
      <p>Es gibt einen Weg, wie du in jeglichen Situationen dein gewünschtes Outcome manifestieren kannst, wenn du dir davor etwas Zeit nimmst, das demnächst anstehende Gespräch vorzuprogrammieren. Das geschieht über dein eigenes Bewusstseins-Energiefeld.</p>
      
      <h3>Effekt</h3>
      <p>Deine Ruhe und Klarheit wirken automatisch auf andere, Konflikte verlieren Schwere. Diese Übung schenkt dir persönliche Gelassenheit und verstärkt dein inneres Vertrauen. Du wirst immer selbstsicherer und positiver auftreten, und mit den Ergebnissen immer mehr zufrieden sein.</p>
      <p><strong>Wann anwenden:</strong> Vor jedem Gespräch, das dir wichtig ist oder potenziell angespannt sein könnte.</p>
      
      <section>
        <h3>So machst Du es:</h3>
        <ol>
          <li><strong>1. Zentrum finden – Dein Ruhepol:</strong> Halte kurz inne, bevor du in das Gespräch gehst. Atme 5 – 7 tiefe, bewusste Atemzüge. Spüre deinen Körper, den Boden unter deinen Füßen, deine Wirbelsäule. Finde deinen inneren Ruhepunkt. Dies ist dein Ausgangspunkt – das Zentrum deines Energiefeldes. Vielleicht ist es dein Herzraum.</li>
          <li><strong>2. Intention klar setzen:</strong> Definiere innerlich, welche Energie du senden willst: Ruhe, Klarheit, Leichtigkeit, Respekt und wertschätzendes Miteinander. Formuliere es positiv: Nicht „Ich will, dass der andere sich ändert", sondern: „Ich halte meine Schwingung stabil und ruhig". Visualisiere die gewünschte Energie wie einen inneren Leuchtball, der dich umgibt.</li>
          <li><strong>3. Signal durch Präsenz senden:</strong> Deine Körperhaltung, Stimme, Blick und Atem tragen deine Schwingung. Je entspannter du bist, desto stärker wird dein Signal. Nutze zwischen deinen Sätzen bewusste Atemzüge, um deinen Fokus zu halten oder neu herzustellen. Spüre, wie deine innere Ruhe automatisch auf dein Umfeld wirkt.</li>
          <li><strong>4. Feld beobachten, nicht kontrollieren:</strong> Betrachte die Situation als Informationsfluss. Du führst nicht mit Druck, sondern durch klare Energie. Dein Gegenüber reagiert oft unerwartet offen, weil sein System/sein Feld die neue Frequenz deines Feldes übernimmt.</li>
          <li><strong>5. Korrektur in Echtzeit:</strong> Wenn sich Spannung aufbaut: Atme bewusst ein und aus. Wiederhole innerlich deine Intention: „Nur Information, klare Schwingung." Halte die innere Ruhe. Kein Kampf notwendig – deine innere Klarheit wirkt automatisch. Schaffe noch mehr Raum in deinem Herzen durch offene, ruhige Atemzüge und beobachte das Geschehen von deinem Ruhepunkt aus. So gewinnst du mehr Zeit, bewusst zu agieren, statt impulsiv zu reagieren.</li>
          <li><strong>6. Nachspüren & Stabilisieren:</strong> Nimm dir nach dem Gespräch noch einen Moment für dich, um dein Feld zu stabilisieren und zentrieren – zum Beispiel mit einer kurzen Atemübung oder der Feld-Reset Meditation.</li>
        </ol>
      </section>

      <h3>Warum es funktioniert</h3>
      <p>Dein eigenes Bewusstseins- und Energiefeld wirkt wie ein Magnet auf dein Umfeld – nicht manipulativ, sondern authentisch und kraftvoll. Deine Schwingung sendet unbewusste Signale aus, die auf anderen wirken. Wenn du bewusst eine stabile, klare und positive Schwingung aufbaust, beeinflusst dies automatisch die Atmosphäre und die Reaktionen anderer Menschen. Starke, fokussierte Schwingungen ziehen gewissermaßen das gewünschte Ergebnis magnetisch an, ohne dass du Druck ausüben musst.</p>
      
      <footer>
        <h4>Schlusswort</h4>
        <p>Diese kurze Übung kannst du im Privatleben in Konflikten und Unklarheiten zwischen Familienmitgliedern oder auch im beruflichen Atmosphäre jederzeit einsetzen. Wenn du das regularly übst, wird deine Ruhe und Präsenz zum Standard-Signal, das automatisch Einfluss nimmt – ohne dass du kämpfen musst. Konflikte verlieren an Schwere, Flüsse von Energie in dir werden sanft reguliert.</p>
      </footer>
    `
  },

  'd3': {
    id: 'd3',
    title: 'Realitätsgestaltung',
    subtitle: 'Die Realität aus der eigenen Mitte gestalten',
    excerpt: 'Verbindung von Atemarbeit und schöpferischer Manifestation.',
    category: 'lifestyle',
    categoryLabel: 'Lifestyle',
    date: '14. Dez 2025',
    thumbnail: 'images/reality.webp',
    heroImage: 'images/reality.webp',
    content: `
      <h2>Realitätsgestaltung</h2>
      <p>Das ist eine feine, ganzheitliche Verbindung von Atemarbeit, Bewusstseinslenkung und schöpferischer Manifestation — eine Praxis, die tief wirkt, weil sie Körper, Energie und Geist vereint.</p>
      
      <h3>Einführung - Warum das funktioniert</h3>
      <p>Unsere Realität ist kein starres Gebilde, sondern ein lebendiges Resonanzfeld. Alles, was wir denken, fühlen und erwarten, worauf wir unsere Aufmerksamkeit lenken, sendet Schwingungen aus – wie Klangwellen in einem großen, feinen Raum. Diese Wellen treffen auf das Feld um uns und formen unsere Erlebnisse.</p>
      <p>Wenn wir im Einklang mit uns selbst atmen, verbinden wir dieses Feld. Dann beginnt das, was wir innerlich tragen – unsere klarste Schwingung – sich nach außen zu spiegeln.</p>
      <p>Man kann sich das vorstellen wie einen Spiegel aus Licht: Was du innerlich ausstrahlst, wird im Außen reflektiert. Wenn du Liebe, Ruhe und Vertrauen atmest, siehst, riechst, hörst, schmeckst und im Körper spürst – wenn du sie atmest, siehst, riechst, hörst, schmeckst und im Körper spürst – beginnt sie, sich zu verdichten. Wie Tau, der aus Dampf entsteht.</p>
      
      <h3>Warum?</h3>
      <p>Weil diese Verkörperung eine Resonanz erschafft zwischen deinem inneren Schwingungsfeld und der äußeren Realität. Das Universum ist voller intelligenteter Energie. Deine Vision (Gefühl + Bild) wirkt wie ein starkes Signal, das diese Energie erreicht, mobilisiert und für dich programmiert. Je klarer und lebendiger deine Wasser-Affirmation ist, desto wirksamer ist es!</p>
      
      <section>
        <h3>II. Säule: Ins Handeln kommen</h3>
        <p>Schreibe deine Affirmation auf einen Zettel und lege ihn unter dein Glas oder deine Karaffe. Das Wasser nimmt die Botschaft auf. Während du deine Worte aufschreibst, richtest du deine volle Aufmerksamkeit und positive Absicht darauf. Durch diesen bewussten Fokus erzeugst du ein energetisches Feld, das das Wasser bereichert und harmonisiert.</p>
        <p>Stelle deinen Wasserkrug auf ein Mandala, z.B. die Blume des Lebens, ein kraftvolles, harmonisierendes Symbol. Es gibt auch spezielle Aufkleber mit Mandala-Motiven, wie der Blume des Lebens, die du auf Wasserflaschen oder -krüge kleben kannst, damit das Wasser energetisiert und harmonisiert wird. Solche Aufkleber findest du in Bioläden oder online.</p>
        
        <h4>Ideen zum googeln (in Google «Bilder») und ausdrucken:</h4>
        <ul>
          <li>Sri Yantra Mandala – Ausrichtung, Fokussierung, innere Ordnung</li>
          <li>Metatrons Würfel – Struktur, Stabilität, Schutz und Klarheit</li>
          <li>Saat des Lebens – Die „kleine sanfte Schwester" der Blume des Lebens. Ruhe und Regeneration.</li>
          <li>Lotus-Mandala – Reinheit, Herzöffnung und Wachstum</li>
          <li>Om-Symbol – Urklang, Einheit und Präsenz</li>
          <li>Triskelion (Dreifachspirale) – Bewegung, Wandel und Lebenskraft</li>
          <li>Keltische Knotenmandalas – Erdung, Kontinuität und innere Stabilität</li>
          <li>Blume des Lebens – Harmonie, Ordnung, Ganzheit</li>
        </ul>

        <h4>Male oder schreibe direkt auf die Flasche.</h4>
        <p>Nutze Permanentstifte, um deine Flasche mit liebevollen Worten, kraftvollen Affirmationen, Symbolen oder Zeichnungen zu gestalten. Das kann eine schöne, persönliche Gestaltung sein – allein oder gemeinsam mit deinen Kindern. So bringst du deine Absicht sichtbar zum Ausdruck und verbindest dich noch intensiver mit deinem Wasser-Ritual.</p>
        <p>Lass deiner Kreativität freien Lauf! Vielleicht möchtest du Motive wählen, die für dich Heilung, Schutz oder Freude symbolisieren. Jede einzelne Linie oder jedes Wort überträgt positive Energie auf das Wasser und macht dein Ritual zu etwas ganz Besonderem. So eine selbstgestaltete Flasche eignet sich wunderbar als persönliches Geschenk für deine liebsten Freunde.</p>
      </section>

      <footer>
        <h3>Mach es zu deinem eigenen Ritual</h3>
        <p>Mach dir keinen Druck. Es braucht keine Perfektion – nur deine echte Präsenz. Auch spontane, unzensierte Sätze wirken, solange sie aus dem Herzen kommen.</p>
        <p>🌿 Mach es einfach. Mach es regelmäßig. Mach es zu deinem Moment.</p>
      </footer>
    `
  },

  'b1': {
    id: 'b1',
    title: 'Die Kunst des Ankommens',
    excerpt: 'Tiefes, inneres Ankommen im gegenwärtigen Moment.',
    category: 'blog',
    categoryLabel: 'Blog',
    date: '19. Dez 2025',
    thumbnail: 'images/arrive.webp',
    heroImage: 'images/arrive.webp',
    content: `
    <h2>Liebe Seele, <h2/>
  
      <p>Heute möchte ich mit dir über etwas sprechen, das mir in letzter Zeit besonders am Herzen liegt: die Kunst des Ankommens. Nicht das physische Ankommen an einem Ort, sondern das tiefe, innere Ankommen im gegenwärtigen Moment.</p>
      
      <h3>Wo bist du gerade?</h3>
      <p>Ich meine damit nicht deinen geografischen Standort. Ich meine: Wo ist dein Geist gerade? Ist er hier, in diesem Moment, oder schweift er umher – in der Vergangenheit, die du nicht ändern kannst, oder in der Zukunft, die noch nicht existiert?</p>
      <p>Wir verbringen so viel Zeit damit, überall zu sein, nur nicht hier. Wir leben in unseren Gedanken, in unseren Sorgen, in unseren Plänen. Und dabei verpassen wir das Einzige, was wirklich existiert: diesen Moment, genau jetzt.</p>
      
      <h3>Das Geschenk der Präsenz</h3>
      <p>Wahres Ankommen bedeutet, mit allen Sinnen präsent zu sein. Es bedeutet, den Atem zu spüren, wie er ein- und ausströmt. Die Füße zu fühlen, wie sie den Boden berühren. Die Geräusche wahrzunehmen, ohne sie zu bewerten.</p>
      <p>Es bedeutet, bei dir selbst zu sein – mit allem, was gerade ist. Mit der Freude und mit dem Schmerz. Mit der Klarheit und mit der Verwirrung. Alles darf sein, wenn wir wirklich ankommen.</p>
      
      <h3>Die Reise nach Hause</h3>
      <p>Das Paradoxe ist: Wir sind bereits da. Wir müssen nirgendwo hingehen, um anzukommen. Wir müssen nur die Reise nach Hause antreten – nach Hause zu uns selbst, in unseren Körper, in diesen Moment. Und diese Reise beginnt mit einem einzigen, bewussten Atemzug.</p>
      
      <footer>
        <p>Mit Liebe,<br>Deine Zeit für Dich</p>
      </footer>
    `
  },

  'b2': {
    id: 'b2',
    title: 'Warum Selbstfürsorge kein Luxus ist',
    excerpt: 'Ein persönlicher Brief über die Notwendigkeit der Selbstliebe.',
    category: 'blog',
    categoryLabel: 'Blog',
    date: '16. Dez 2025',
    thumbnail: 'images/selfcare.webp',
    heroImage: 'images/selfcare.webp',
    content: `
      <h2>Warum Selbstfürsorge kein Luxus ist</h2>
      <p>Meine Liebe, ich weiß, dass du viel gibst. Du kümmerst dich um andere, du bist da, wenn man dich braucht, du stellst deine Bedürfnisse zurück. Das ist eine wundervolle Gabe – aber es kann auch zu einer Last werden.</p>
      
      <h3>Der Irrtum der Selbstlosigkeit</h3>
      <p>Wir wurden oft gelehrt, dass es egoistisch ist, an sich selbst zu denken. Dass wahre Liebe bedeutet, sich aufzuopfern. Aber das ist ein gefährlicher Irrtum.</p>
      <blockquote>Wahre Liebe beginnt bei dir selbst. Du kannst nicht aus einem leeren Becher gießen. Du kannst nicht Licht sein für andere, wenn deine eigene Flamme erloschen ist.</blockquote>
      
      <h3>Selbstfürsorge ist keine Verschwendung</h3>
      <p>Die Zeit, die du in dich selbst investierst – in deine Gesundheit, dein Wohlbefinden, deine Freude – ist keine verschwendete Zeit. Es ist die wichtigste Investition, die du machen kannst.</p>
      <p>Wenn du gut für dich sorgst, hast du mehr Energie, mehr Geduld, mehr Liebe zu geben. Du bist kein besserer Mensch, weil du dich vernachlässigst. Du bist ein besserer Mensch, weil du dich liebst.</p>
      
      <section>
        <h3>Kleine Schritte, große Wirkung</h3>
        <p>Selbstfürsorge muss nicht aufwendig sein. Es kann so einfach sein wie:</p>
        <ul>
          <li>Zehn Minuten in Ruhe Tee trinken</li>
          <li>Ein Spaziergang in der Natur</li>
          <li>Nein sagen, wenn dein Körper Ruhe braucht</li>
          <li>Dir selbst freundliche Worte zusprechen</li>
        </ul>
        <p>Es sind die kleinen, täglichen Akte der Selbstliebe, die das Größte bewirken.</p>
        <p>Du bist es wert. Du bist es so sehr wert.</p>
      </section>

      <footer>
        <p>In Liebe,<br />Deine Zeit für Dich</p>
      </footer>
    `
  },

  'b3': {
    id: 'b3',
    title: 'Der Atem als Anker',
    excerpt: 'Wenn die Welt zu schnell dreht, ist dein Atem dein sicherster Halt.',
    category: 'blog',
    categoryLabel: 'Blog',
    date: '13. Dez 2025',
    thumbnail: 'images/anchor.webp',
    heroImage: 'images/anchor.webp',
    content: `
      <h2>Der Atem als Anker</h2>
      <p>Meine Liebe, kennst du das Gefühl, wenn die Welt um dich herum zu schnell dreht? Wenn die Gedanken rasen, die Emotionenen überwältigen, und du nicht mehr weißst, wo oben und unten ist?</p>
      <p>In solchen Momenten gibt es einen Anker, der immer verfügbar ist, immer bei dir: dein Atem.</p>
      
      <h3>Die Weisheit des Atems</h3>
      <p>Der Atem ist die Brücke zwischen Körper und Geist, zwischen dem Bewussten und dem Unbewussten. Er ist das Einzige, was sowohl automatisch geschieht als auch bewusst gesteuert werden kann.</p>
      <p>Wenn du deinen Atem beobachtest, wirst du ruhiger. Wenn du deinen Atem verlangsamst, entspannt sich dein Nervensystem. Wenn du deinen Atem vertiefst, tankst du Energie.</p>
      
      <h3>Der Atem in schwierigen Momenten</h3>
      <p>Wenn Angst aufsteigt, wird der Atem flach und schnell. Wenn wir gestresst sind, halten wir oft unbewusst den Atem an. Unser Körper geht in den Kampf-oder-Flucht-Modus.</p>
      <p>In diesen Momenten kannst du bewusst eingreifen. Atme tief in deinen Bauch. Mache die Ausatmung länger als die Einatmung. Damit signalisierst du deinem Nervensystem: "Alles ist gut. Ich bin sicher."</p>
      
      <section>
        <h3>Eine einfache Praxis</h3>
        <p>Wann immer du dich überwältigt fühlst, kehre zu deinem Atem zurück. Schließe die Augen. Lege eine Hand auf deinen Bauch. Atme 4 Sekunden ein, atme 6 Sekunden aus. Wiederhole dies 5-10 Mal.</p>
        <p>Du wirst merken, wie sich etwas in dir beruhigt. Wie die Gedanken langsamer werden. Wie du wieder bei dir ankommst.</p>
      </section>

      <footer>
        <p>Dein Atem ist dein Anker. Immer verfügbar. Immer treu. Immer heilend.</p>
        <p>In Liebe,<br />Deine Zeit für Dich</p>
      </footer>
    `
  }
};