/* digicom)) Account-Recherche – Eingabemaske Schritt 0. Enthält keine Kundendaten und sendet nichts ins Internet. */
(function () {
  var F = [{"n": "unternehmen", "q": "Welches Unternehmen soll ich recherchieren?", "typ": "text", "rows": 2, "ph": "Firmierung und Website, ggf. Gruppe oder frühere Firmierung – z. B. HST Systemtechnik GmbH & Co. KG, hst.de", "l": "Unternehmen"}, {"n": "kundenstatus", "q": "Welchen Kundenstatus hat der Account?", "typ": "pill", "o": [{"v": "Bestandskunde mit laufendem Kontakt", "i": "ti-users", "t": "Bestandskunde", "s": "mit laufendem Kontakt", "info": ["Bestandskunde mit laufendem Kontakt:", "Veränderungen der letzten 24 Monate. Schwerpunkt auf Neuem und Widersprüchen zum internen Stand, bekannte Kontakte werden gezielt geprüft. Folien: Abgleich intern ↔ öffentlich."]}, {"v": "Bestandskunde ohne laufenden Kontakt", "i": "ti-user-pause", "t": "Bestandskunde", "s": "ohne laufenden Kontakt", "info": ["Bestandskunde ohne laufenden Kontakt:", "mindestens 24 Monate, bei älterem letztem Kontakt ab diesem Datum. Schwerpunkt auf Personal- und Organwechseln, früheren Ansprechpartnern, Alter der Installed Base und Laufzeiten. Folien: Abgleich mit „Stand beim letzten Kontakt“. Datum des letzten Kontakts nötig."]}, {"v": "Ehemaliger Kunde", "i": "ti-user-minus", "t": "Ehemaliger Kunde", "s": "Abgang mit Datum", "info": ["Ehemaliger Kunde:", "Veränderungen seit dem Abgang und Hinweise auf den heutigen Anbieter. Gründe für den Abgang bleiben intern und werden nicht recherchiert. Folien: Abgleich „Stand beim Abgang“ ↔ „heute“. Datum des Abgangs nötig."]}, {"v": "Interessent", "i": "ti-user-search", "t": "Interessent", "s": "bereits im Gespräch", "info": ["Interessent:", "volle Recherche der letzten 24 Monate, dazu Einordnung von Bereich und Rolle der anfragenden Person. Folien: Kasten „Ausgangslage (intern)“ und offene Fragen zum Lead, kein Abgleich."]}, {"v": "Neukunde", "i": "ti-user-plus", "t": "Neukunde", "s": "noch keine Beziehung", "info": ["Neukunde:", "volle Recherche der letzten 24 Monate mit Schwerpunkt auf Entscheiderstruktur und aktuellen Veränderungen. Folien: höchstens ein kleiner Kasten zum Anlass, kein Abgleich. Tiefe Recherche empfohlen."]}], "min": 170, "l": "Kundenstatus", "hint": "Wähle einen Status – darunter siehst du, was sich dadurch in der Recherche ändert."}, {"n": "branche", "q": "Welche Branche hat der Kunde?", "typ": "pill", "o": [{"v": "Industrie", "i": "ti-building-factory-2", "t": "Industrie", "s": ""}, {"v": "Retail", "i": "ti-building-store", "t": "Retail", "s": ""}, {"v": "Healthcare", "i": "ti-heart-rate-monitor", "t": "Healthcare", "s": ""}], "min": 150, "l": "Branche", "col": 1}, {"n": "letzter_kontakt", "q": "Wann war der letzte Kontakt bzw. der Abgang?", "typ": "month", "hint": "Leer lassen bei Neukunde", "l": "Letzter Kontakt"}, {"n": "anlass", "q": "Was ist der Anlass der Recherche?", "typ": "pill", "o": [{"v": "SAE-Sitzung", "i": "ti-presentation", "t": "SAE-Sitzung", "s": "", "info": ["SAE-Sitzung:", "breites Unternehmens- und Strukturverständnis als gemeinsame Grundlage, um danach Handlungsfelder zu entwickeln. Alle Themen gleichmäßig, Struktur und Organisation ausführlich. Tiefe Recherche empfohlen."]}, {"v": "Kundentermin", "i": "ti-calendar-event", "t": "Kundentermin", "s": "", "info": ["Kundentermin:", "Vorbereitung auf das Gespräch – Schwerpunkt auf aktuellen Veränderungen und den Personen, die du triffst. Bei wichtigen Terminen tiefe Recherche empfohlen."]}, {"v": "Opportunity", "i": "ti-target-arrow", "t": "Opportunity", "s": "", "info": ["Opportunity:", "nur der Unternehmenskontext und die Fakten, die zum Verständnis der konkreten Opportunity nötig sind. Thema bitte im internen Stand nennen – es bleibt intern und geht nicht an die Recherche."]}, {"v": "Kollegenbriefing", "i": "ti-messages", "t": "Kollegenbriefing", "s": "", "info": ["Kollegenbriefing:", "schnell verständliches Accountbild ohne vorausgesetztes Spezialwissen – kompakt, Fachbegriffe erklärt."]}, {"v": "Anderer", "i": "ti-dots", "t": "Anderer", "s": "", "info": ["Anderer Anlass:", "Beschreibe kurz, worum es geht und was im Vordergrund stehen soll – die Themen werden danach gewichtet."]}], "min": 130, "l": "Anlass", "col": 1, "other": "Anderer", "otherph": "Welcher Anlass? Was soll im Vordergrund stehen?", "hint": "Wähle einen Anlass – darunter siehst du, was diesen Lauf prägt."}, {"n": "gespraechseinstiege", "q": "Sollen Gesprächseinstiege für den Termin erstellt werden?", "typ": "pill", "o": [{"v": "ja", "i": "ti-message-question", "t": "Ja", "s": "6–8 offene Fragen, nur intern"}, {"v": "nein", "i": "ti-x", "t": "Nein", "s": "ohne Angabe: ja nur beim Kundentermin"}], "min": 240, "l": "Gesprächseinstiege"}, {"n": "recherchevariante", "q": "Welche Recherchevariante?", "typ": "pill", "o": [{"v": "Perplexity Tief", "i": "ti-zoom-in", "t": "Perplexity Tief", "s": "Eigenes Konto nötig"}, {"v": "Perplexity Standard", "i": "ti-file-search", "t": "Perplexity Standard", "s": "Eigenes Konto nötig"}, {"v": "Nur Claude-Websuche", "i": "ti-world-search", "t": "Nur Claude-Websuche", "s": ""}], "min": 220, "l": "Recherchevariante"}, {"n": "eigene_websuche", "q": "Darf ich zur Gegenprüfung zusätzlich selbst im Web suchen? (nur bei Perplexity)", "typ": "pill", "o": [{"v": "nein", "i": "ti-shield-check", "t": "Nein", "s": "nur Perplexity und Register"}, {"v": "ja", "i": "ti-world-search", "t": "Ja", "s": "zusätzliche Gegenprüfung bei Widersprüchen"}], "min": 240, "l": "Eigene Websuche"}, {"n": "interner_stand", "q": "Was ist intern bekannt?", "typ": "text", "rows": 3, "ph": "Strategie, Opportunities, letzte Aktivitäten, Ansprechpartner bei digicom)) – z. B. Lead über den Online-Shop, Lead in Salesforce", "l": "Interner Stand"}, {"n": "kontakte", "q": "Welche Kontakte beim Kunden kennen wir schon?", "typ": "text", "rows": 2, "ph": "Je Zeile: Name – Rolle – bestätigt am / durch", "l": "Kontakte"}, {"n": "wrike_kuerzel", "q": "Unter welchem Firmenkürzel steht der Account in Wrike?", "typ": "line", "ph": "falls bekannt, z. B. HST", "l": "Wrike-Kürzel"}, {"n": "zusaetzliche_anweisungen", "q": "Zusätzliche Anweisungen für diesen Lauf", "typ": "text", "rows": 3, "ph": "Gilt nur für diesen Lauf – z. B. Muttergesellschaften nicht relevant · nur Folie 1 und 2 · Schwerpunkt Rufsysteme in den Seniorenheimen · Werk X weglassen", "l": "Zusätzliche Anweisungen"}];
  var VERSION = "v1";
  var ziel = document.getElementById("digicom-maske");
  if (!ziel) { ziel = document.createElement("div"); document.body.appendChild(ziel); }
  var vor = {};
  try { vor = JSON.parse(ziel.getAttribute("data-vorbelegung") || "{}"); } catch (e) { vor = {}; }

  var css = ".mk{font-family:var(--font-sans);border:1px solid var(--border);border-radius:12px;background:var(--surface-2);box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}" +
    ".mk-h{display:flex;gap:8px;align-items:center;padding:12px 16px;border-bottom:1px solid var(--border);font-size:14px;font-weight:500;color:var(--text-primary)}" +
    ".mk-b{padding:6px 16px 4px}.mk-g{padding:12px 0;border-bottom:1px solid var(--border)}.mk-g:last-child{border-bottom:0}" +
    ".mk-q{display:block;font-size:14px;font-weight:500;color:var(--text-primary);margin-bottom:8px}" +
    ".mk-ps{display:grid;gap:10px}" +
    ".mk-p{border:1px solid var(--border);border-radius:12px;background:var(--surface-2);color:var(--text-primary);padding:12px 14px;display:flex;gap:10px;align-items:flex-start;text-align:left;cursor:pointer;font:inherit;box-shadow:0 1px 2px rgba(0,0,0,.04)}" +
    ".mk-p.c{flex-direction:column;align-items:center;text-align:center;gap:6px}" +
    ".mk-p:hover{border-color:var(--border-strong)}.mk-p[aria-pressed=true]{background:var(--bg-accent);border-color:var(--border-accent);color:var(--text-accent)}" +
    ".mk-p i{font-size:20px}.mk-t{font-size:13px;font-weight:500}.mk-s{font-size:11px;color:var(--text-muted)}" +
    ".mk-in{width:100%;box-sizing:border-box;border:1px solid var(--border);border-radius:var(--radius);padding:8px 10px;font:inherit;font-size:14px;background:var(--surface-2);color:var(--text-primary)}" +
    ".mk-hint{display:block;margin-top:8px;font-size:12px;color:var(--text-muted)}" +
    ".mk-info{margin-top:10px;padding:10px 14px;border:1px solid var(--border-accent);background:var(--bg-accent);border-radius:var(--radius);font-size:12px;line-height:1.55;color:var(--text-secondary)}.mk-info b{font-weight:500;color:var(--text-accent)}" +
    ".mk-f{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid var(--border)}" +
    ".mk-btn{border:1px solid var(--border);border-radius:var(--radius);padding:8px 14px;font:inherit;font-size:14px;cursor:pointer;background:var(--surface-2);color:var(--text-primary)}" +
    ".mk-go{background:var(--text-primary);color:var(--surface-2);border-color:var(--text-primary)}.mk-ok{font-size:13px;color:var(--text-success);padding:8px 0}";

  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  ziel.innerHTML = "";
  var st = el("style"); st.textContent = css; ziel.appendChild(st);
  var form = el("div", "mk");
  var h = el("div", "mk-h"); var hi = el("i", "ti ti-file-text"); hi.setAttribute("aria-hidden", "true"); h.appendChild(hi); h.appendChild(el("span", null, "Account-Details")); form.appendChild(h);
  var body = el("div", "mk-b"); form.appendChild(body);
  var werte = {}, felder = {};

  F.forEach(function (f) {
    var g = el("div", "mk-g"); g.appendChild(el("label", "mk-q", f.q));
    if (f.typ === "pill") {
      var ps = el("div", "mk-ps"); ps.style.gridTemplateColumns = "repeat(auto-fill,minmax(" + f.min + "px,1fr))";
      var infoBox = el("div", "mk-info"); infoBox.style.display = "none";
      var hint = f.hint ? el("span", "mk-hint", f.hint) : null;
      var other = null;
      if (f.other) { other = el("input", "mk-in"); other.type = "text"; other.placeholder = f.otherph; other.style.display = "none"; other.style.marginTop = "10px"; }
      var knoepfe = [];
      f.o.forEach(function (o) {
        var b = el("button", "mk-p" + (f.col ? " c" : "")); b.type = "button"; b.setAttribute("aria-pressed", "false"); b.setAttribute("data-value", o.v);
        if (o.i) { var ic = el("i", "ti " + o.i); ic.setAttribute("aria-hidden", "true"); b.appendChild(ic); }
        var sp = el("span"); sp.appendChild(el("span", "mk-t", o.t)); if (o.s) { sp.appendChild(el("br")); sp.appendChild(el("span", "mk-s", o.s)); } b.appendChild(sp);
        b.addEventListener("click", function () { waehle(o); });
        knoepfe.push(b); ps.appendChild(b);
      });
      function waehle(o) {
        var an = werte[f.n] !== o.v;
        werte[f.n] = an ? o.v : undefined;
        knoepfe.forEach(function (k) { k.setAttribute("aria-pressed", String(an && k.getAttribute("data-value") === o.v)); });
        if (o.info && an) { infoBox.innerHTML = ""; infoBox.appendChild(el("b", null, o.info[0])); infoBox.appendChild(document.createTextNode(" " + o.info[1])); infoBox.style.display = "block"; } else { infoBox.style.display = "none"; }
        if (hint) hint.style.display = werte[f.n] ? "none" : "block";
        if (other) other.style.display = (an && o.v === f.other) ? "block" : "none";
      }
      felder[f.n] = { waehle: function (v) { f.o.forEach(function (o) { if (o.v === v && werte[f.n] !== v) waehle(o); }); }, other: other };
      g.appendChild(ps); if (other) g.appendChild(other); if (hint) g.appendChild(hint); g.appendChild(infoBox);
    } else {
      var inp;
      if (f.typ === "text") { inp = el("textarea", "mk-in"); inp.rows = f.rows; }
      else { inp = el("input", "mk-in"); inp.type = f.typ === "month" ? "month" : "text"; inp.style.maxWidth = "220px"; }
      if (f.ph) inp.placeholder = f.ph;
      felder[f.n] = { inp: inp };
      g.appendChild(inp);
      if (f.hint) g.appendChild(el("span", "mk-hint", f.hint));
    }
    body.appendChild(g);
  });

  Object.keys(vor).forEach(function (k) {
    var fd = felder[k], v = vor[k]; if (!fd || v == null || v === "") return;
    if (fd.inp) fd.inp.value = v; else if (fd.waehle) fd.waehle(v);
  });
  if (vor.anlass_text && felder.anlass && felder.anlass.other) felder.anlass.other.value = vor.anlass_text;

  var fuss = el("div", "mk-f");
  var skip = el("button", "mk-btn", "Überspringen"); skip.type = "button";
  var go = el("button", "mk-btn mk-go", "Recherche starten"); go.type = "button";
  fuss.appendChild(skip); fuss.appendChild(go); form.appendChild(fuss);
  ziel.appendChild(form);

  function senden(text) {
    if (typeof sendPrompt === "function") sendPrompt(text);
    fuss.innerHTML = ""; fuss.appendChild(el("span", "mk-ok", "Abgeschickt"));
    form.querySelectorAll("button,input,textarea").forEach(function (x) { x.disabled = true; });
  }
  skip.addEventListener("click", function () { senden("(Formular übersprungen – bitte mit Standardwerten fortfahren oder im Text nachfragen)"); });
  go.addEventListener("click", function () {
    var z = ["Account-Details (Maske " + VERSION + ")"];
    F.forEach(function (f) {
      var v;
      if (f.typ === "pill") { v = werte[f.n]; if (v && f.other && v === f.other && felder[f.n].other.value.trim()) v += ": " + felder[f.n].other.value.trim(); }
      else { v = felder[f.n].inp.value.trim(); }
      if (v) z.push(f.l + ": " + (v.indexOf("\n") >= 0 ? "\n  " + v.split("\n").join("\n  ") : v));
    });
    senden(z.join("\n"));
  });
})();
