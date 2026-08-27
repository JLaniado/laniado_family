/* ===========================================================
   The Laniado Family — interactive family tree renderer
   Simple hierarchical layout + SVG render, no external deps.
   =========================================================== */

const TREE_DATA = {
  id: "shmuel-harishon",
  en: "Shmuel Laniado",
  title: "HaRishon (“the First”)",
  he: "ר׳ שמואל לניאדו הראשון",
  dates: "d. 1533",
  founder: true,
  desc: "Left Spain around the time of the 1492 expulsion, traveled via Edirne (Turkey), and settled in Aleppo — the family's first documented member.",
  link: "rabbis/shmuel-harishon.html",
  children: [
    {
      id: "moshe-1",
      en: "Moshe Laniado",
      he: "ר׳ משה",
      desc: "Son of Shmuel HaRishon; co-signed the 1537 letter expressing the family's attachment to the Land of Israel.",
      children: []
    },
    {
      id: "avraham-hadarshan",
      en: "Avraham Laniado",
      title: "“HaDarshan” (the Preacher)",
      he: "ר׳ אברהם לניאדו ״הרב הדרשן״",
      dates: "b. 1586",
      desc: "Lived in Tzfat for a time, studying the teachings of the great sages there and passing them to his son.",
      link: "rabbis/avraham-hadarshan.html",
      children: [
        {
          id: "shmuel-baal-hakelim",
          en: "Shmuel Laniado",
          title: "“Ba’al HaKelim”",
          he: "ר׳ שמואל לניאדו ״בעל הכלים״",
          dates: "d. 1605/1611",
          chiefRabbi: true,
          desc: "Sent to Aleppo by the Beit Yosef himself (“ish asher kamoni”). Chief Rabbi for ~40 years; author of Kli Chemdah, Kli Yakar, Kli Paz and more.",
          link: "rabbis/shmuel-baal-hakelim.html",
          children: [
            {
              id: "avraham-hamusmach",
              en: "Avraham Laniado",
              title: "“HaMusmach” (the Ordained)",
              he: "רב אברהם לניאדו ״הרב המוסמך״",
              dates: "d. 1646",
              chiefRabbi: true,
              desc: "Ordained by the Beit Yosef's own students. Succeeded his father as Chief Rabbi of Aleppo for ~40 years.",
              link: "rabbis/avraham-hamusmach.html",
              children: [
                {
                  id: "shlomo-hazaken",
                  en: "Shlomo Laniado",
                  title: "“HaZaken” (the Elder)",
                  he: "ר׳ שלמה לניאדו ״הזקן״",
                  dates: "mid–late 16th c.",
                  chiefRabbi: true,
                  desc: "Eldest of six brothers. Briefly supported, then publicly renounced, the false messiah Shabbtai Tzvi.",
                  link: "rabbis/shlomo-hazakein.html",
                  children: [
                    {
                      id: "shmuel-hamufla",
                      en: "Shmuel Laniado",
                      title: "“HaMufla” (the Extraordinary)",
                      he: "ר׳ שמואל לניאדו ״הרב המופלא״",
                      chiefRabbi: true,
                      desc: "Chief Rabbi ~40 years. Hosted the Shelah HaKadosh, who praised the community's devotion to Torah.",
                      link: "rabbis/shmuel-hamufla.html",
                      children: [
                        {
                          id: "refael-shlomo-beitdino",
                          en: "Refael Shlomo Laniado",
                          title: "“MaHaRaShal”",
                          he: "ר׳ רפאל שלמה לניאדו ״בית דינו של שלמה״",
                          dates: "17th c.",
                          chiefRabbi: true,
                          desc: "Dayan and leader of Aleppo for 54 years. Subject of many preserved anecdotes; author of Kisei Shlomo.",
                          link: "rabbis/refael-shlomo-beit-dino.html",
                          children: [
                            {
                              id: "efraim",
                              en: "Efraim Laniado",
                              he: "ר׳ אפרים לניאדו",
                              chiefRabbi: true,
                              desc: "The last Chief Rabbi of Aleppo from the Laniado family, serving 18 years. Also a mekubal and payetan.",
                              link: "rabbis/efraim.html",
                              children: []
                            }
                          ]
                        },
                        { id: "avraham-hamufla-son", en: "Avraham", he: "ר׳ אברהם", desc: "Son of Shmuel HaMufla; father-in-law of R' Michael Harari.", children: [] },
                        { id: "yitzchak-hamufla-son", en: "Yitzchak", he: "ר׳ יצחק", desc: "Son of Shmuel HaMufla.", children: [] },
                        {
                          id: "eliyahu-hamufla-son", en: "Eliyahu", he: "ר׳ אליהו",
                          desc: "Son of Shmuel HaMufla; served on the Beit Din of Aleppo.",
                          children: [
                            {
                              id: "shmuel-nephew",
                              en: "Shmuel Laniado",
                              he: "ר׳ שמואל לניאדו",
                              desc: "Nephew of the MaHaRaShal (Refael Shlomo). Little else recorded.",
                              children: [
                                {
                                  id: "ovadia",
                                  en: "Ovadia Laniado",
                                  he: "רב עובדיה לניאדו",
                                  desc: "Served as a Dayan in the Land of Israel.",
                                  children: [
                                    {
                                      id: "avraham-hamechaven",
                                      en: "Avraham Laniado",
                                      title: "“HaRav HaMechaven”",
                                      he: "ר׳ אברהם לניאדו ״הרב המכוון״",
                                      desc: "Studied at Yeshivat Beit El, an early center for Kabbalists. Prayed at the passing of R' Mordechai Labaton to reach the Land of Israel — and did.",
                                      children: [
                                        {
                                          id: "meir-hasofer",
                                          en: "Meir Laniado",
                                          title: "“HaRav HaSofer”",
                                          he: "ר׳ מאיר לניאדו ״הרב הסופר״",
                                          desc: "Known since youth for fine handwriting (“Safra Rabba”). Wrote Likutei HaMelitz, a history of the Laniado rabbis. Moved to the Bukharan Quarter of Jerusalem in the mid-1800s.",
                                          children: [
                                            {
                                              id: "refael-shlomo-poratyosef",
                                              en: "Refael Shlomo Laniado",
                                              title: "1st Rosh Yeshiva of Porat Yosef",
                                              he: "ר׳ רפאל שלמה לניאדו",
                                              desc: "Co-founded Yeshivat Ohel Mo’ed; became Rosh Yeshiva when it merged into Porat Yosef in 1922. Studied Kabbalah under R' Avraham Adess.",
                                              children: [
                                                { id: "meir-py", en: "Meir Laniado", he: "ר׳ מאיר", desc: "Advocated for the yeshiva and the Jewish community under Ottoman and British rule.", children: [] },
                                                { id: "avraham-py", en: "Avraham Laniado", he: "ר׳ אברהם", desc: "Advocated for the yeshiva and the Jewish community under Ottoman and British rule.", children: [] }
                                              ]
                                            },
                                            { id: "avraham-hasofer-son", en: "Avraham Laniado", he: "ר׳ אברהם", desc: "Son of Meir ‘HaSofer.’", children: [] },
                                            { id: "ovadia-hasofer-son", en: "Ovadia Laniado", he: "ר׳ עובדיה", desc: "Son of Meir ‘HaSofer.’", children: [] },
                                            { id: "david-hasofer-son", en: "David Laniado", he: "ר׳ דוד", desc: "Son of Meir ‘HaSofer.’", children: [] },
                                            { id: "daughter-hasofer", en: "(daughter)", he: "בת", desc: "Married R' Moshe Dweck HaCohen, a physician who treated the poor for free and died young.", children: [] }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { id: "levi", en: "Levi Laniado", he: "ר׳ לוי לניאדו", desc: "Younger brother of Shlomo HaZaken; became rabbi in Alexandria, Egypt.",
                  children: [
                    { id: "shmuel-muvhak", en: "Shmuel Laniado", title: "“Rav HaMuvhak”", he: "ר׳ שמואל בן ר׳ לוי לניאדו", desc: "Succeeded his father Levi as rabbi in Alexandria, Egypt.", children: [] }
                  ]
                },
                { id: "yitzchak-hazaken-bro", en: "Yitzchak Laniado", he: "ר׳ יצחק לניאדו", desc: "Younger brother of Shlomo HaZaken; oversaw a new printing of Kli Paz.", children: [] }
              ]
            },
            {
              id: "shulchan-hamelech",
              en: "Shmuel Laniado",
              title: "“Ba’al Shulchan HaMelech”",
              he: "ר׳ שמואל לניאדו בעל ״שלחן המלך״",
              desc: "A grandson of Shmuel Ba’al HaKelim (exact generation uncertain). Wrote Shulchan HaMelech, a digest of the Shulchan Aruch; son-in-law of Refael Shlomo ‘Beit Dino Shel Shlomo.’",
              children: [
                {
                  id: "shlomo-paytan",
                  en: "Shlomo Laniado",
                  he: "ר׳ שלמה לניאדו",
                  desc: "A tzaddik who wrote piyutim (liturgical poems).",
                  children: [
                    {
                      id: "eliyahu-shulchan",
                      en: "Eliyahu Laniado",
                      he: "ר׳ אליהו לניאדו",
                      desc: "Two sons and two daughters, all noted as Torah scholars.",
                      children: [
                        {
                          id: "refael-shlomo-father-david",
                          en: "Refael Shlomo Laniado",
                          he: "ר׳ רפאל שלמה לניאדו",
                          desc: "The elder of two brothers; described in many sefarim as a great Torah scholar. Father of Chacham David Ben Tzion Laniado.",
                          children: [
                            {
                              id: "david-ben-tzion",
                              en: "David Ben Tzion Laniado",
                              title: "“Chacham David”",
                              he: "ר׳ דוד בן ציון לניאדו",
                              dates: "1899–",
                              historian: true,
                              desc: "Born in Aleppo; moved to Eretz Yisrael at 18. Survived the 1929 Hebron riots. Documented the entire family history and the graves of Aleppo's sages in Lekedoshim Asher Ba’aretz (later expanded and translated as “Aleppo, City of Scholars”). Close to Rabbi Shlomo Elyashiv and Rabbi Yitzchak Kaduri.",
                              children: [
                                { id: "c1", en: "Refael Shlomo", he: "רפאל שלמה", desc: "Secretly supported and fundraised for many yeshivot; attended to R' Ovadia Yosef and other sages.", children: [] },
                                { id: "c2", en: "Yitzhak Eliezer", he: "יצחק אליעזר", desc: "Lived in Israel; worked in banking.", children: [] },
                                { id: "c3", en: "Yaakov Chaim", he: "יעקב חיים", desc: "Israeli soldier, commander, general, and intelligence officer.", children: [] },
                                { id: "c4", en: "Sarah", he: "שרה", desc: "Married R' Shabtai Shamai; lived in Tel Aviv.", children: [] },
                                { id: "c5", en: "Rachel", he: "רחל", desc: "Married R' Shlomo Matut (Matityahu), fluent in the entire Torah including Kabbalah.", children: [] },
                                { id: "c6", en: "Esther", he: "אסתר", desc: "Married R' Saadia Lopez (son of R' Nissim Lopez) of Brazil; lived in Israel.", children: [] },
                                { id: "c7", en: "Avraham Moshe", he: "אברהם משה", desc: "Rabbi in Italy; later moved to Deal, New Jersey.", children: [] },
                                { id: "c8", en: "Aaron Yosef", he: "אהרן יוסף", desc: "Gabbai tzedakah of Nakash in America; later moved to Israel, Yeshivat Lev Aharon.", children: [] },
                                { id: "c9", en: "Ephraim Ezra", he: "אפרים עזרא", desc: "Chief Rabbi of São Paulo, Brazil; authored several sefarim.", children: [] },
                                { id: "c10", en: "Eliyahu Pinchas", he: "אליהו פנחס", desc: "Attended to the Rishon LeTzion and worked to strengthen Torah study.", children: [] },
                                { id: "c11", en: "Shmuel Meir", he: "שמואל מאיר", desc: "Lives in Brooklyn, New York.", children: [] },
                                { id: "c12", en: "Tziporah", he: "ציפורה", desc: "Married R' Michael Malach; lives in Israel.", children: [] },
                                { id: "c13", en: "Yisrael Ovadiah", he: "ישראל עובדיה", desc: "Lives in Ashdod, Israel.", children: [] },
                                { id: "c14", en: "Rina", he: "רינה", desc: "Married Roni Avraham; lives in Israel.", children: [] }
                              ]
                            }
                          ]
                        },
                        { id: "yitzchak-shulchan", en: "Yitzchak Laniado", he: "ר׳ יצחק לניאדו", desc: "The younger brother; a great Torah scholar who wrote Vayizra Yitzchak, mainly on Kabbalah, and traveled widely strengthening Torah study.", children: [] }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "yitzchak-hadarshan-son",
          en: "Yitzchak Laniado",
          he: "ר׳ יצחק",
          desc: "Brother of Shmuel Ba’al HaKelim; praised by R' Tzadka Chutzin as a complete and comprehensive sage.",
          children: [
            {
              id: "avraham-magen",
              en: "Avraham Laniado",
              title: "“Magen Avraham”",
              he: "ר׳ אברהם (מגן אברהם) בן ר׳ יצחק לניאדו",
              dates: "1545–1620",
              desc: "Married his own niece — daughter of Shmuel Ba’al HaKelim, making Shmuel both his father-in-law and uncle. Studied in Tzfat; printed his sefer Magen Avraham in Venice, 1603, and reprinted his father-in-law's works. A letter he co-signed banning the book Ma’or LaEinayim later sold for $82,000.",
              children: []
            }
          ]
        }
      ]
    }
  ]
};

/* ---------------- layout + render ---------------- */

const NODE_W = 220;
const NODE_H = 80;
const H_GAP = 22;
const V_GAP = 78;
const ROW_GAP = 16;
const GRID_THRESHOLD = 7; // wrap into a grid when a node has more leaf children than this

function nodeY(n) {
  return n.depth * V_GAP + (n.row || 0) * (NODE_H + ROW_GAP);
}

function layout(node, depth = 0) {
  node.depth = depth;
  node.row = node.row || 0;

  if (!node.children || node.children.length === 0) {
    node._width = NODE_W;
    return node._width;
  }

  const allLeaves = node.children.every(c => !c.children || c.children.length === 0);

  if (allLeaves && node.children.length > GRID_THRESHOLD) {
    // Wrap a large flat set of children (e.g. a big sibling group) into a compact grid
    // instead of one very long row, so the whole tree stays a reasonable width.
    const n = node.children.length;
    const cols = Math.ceil(Math.sqrt(n));
    node._gridCols = cols;
    node.children.forEach((c, i) => {
      c.depth = depth + 1;
      c.row = Math.floor(i / cols);
      c._col = i % cols;
      c._width = NODE_W;
    });
    node._width = Math.max(cols * NODE_W + (cols - 1) * H_GAP, NODE_W);
    return node._width;
  }

  let total = 0;
  node.children.forEach((c, i) => {
    if (i > 0) total += H_GAP;
    total += layout(c, depth + 1);
  });
  node._width = Math.max(total, NODE_W);
  return node._width;
}

function assignX(node, leftEdge) {
  if (!node.children || node.children.length === 0) {
    node._cx = leftEdge + node._width / 2;
    return;
  }

  if (node._gridCols) {
    node.children.forEach(c => {
      c._cx = leftEdge + c._col * (NODE_W + H_GAP) + NODE_W / 2;
    });
    node._cx = leftEdge + node._width / 2;
    return;
  }

  let cursor = leftEdge + (node._width - subtreeChildrenWidth(node)) / 2;
  node.children.forEach((c, i) => {
    assignX(c, cursor);
    cursor += c._width + H_GAP;
  });
  const first = node.children[0];
  const last = node.children[node.children.length - 1];
  node._cx = (first._cx + last._cx) / 2;
}

function subtreeChildrenWidth(node) {
  let total = 0;
  node.children.forEach((c, i) => {
    if (i > 0) total += H_GAP;
    total += c._width;
  });
  return total;
}

function collectNodes(node, out) {
  out.push(node);
  (node.children || []).forEach(c => collectNodes(c, out));
  return out;
}

function svgEl(tag, attrs) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  return el;
}

function renderTree() {
  const root = TREE_DATA;
  layout(root, 0);
  assignX(root, 0);

  const all = collectNodes(root, []);
  const totalWidth = root._width + 80;
  const totalHeight = Math.max(...all.map(n => nodeY(n) + NODE_H)) + 60;

  const svg = svgEl("svg", {
    id: "tree-svg",
    width: totalWidth,
    height: totalHeight,
    viewBox: `0 0 ${totalWidth} ${totalHeight}`
  });

  const g = svgEl("g", { transform: "translate(40,30)" });
  svg.appendChild(g);

  // links first (so they sit behind nodes)
  all.forEach(n => {
    if (!n.children) return;
    n.children.forEach(c => {
      const x1 = n._cx, y1 = nodeY(n) + NODE_H;
      const x2 = c._cx, y2 = nodeY(c);
      const midY = (y1 + y2) / 2;
      const d = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
      g.appendChild(svgEl("path", { class: "link", d }));
    });
  });

  const tooltip = document.getElementById("tree-tooltip");

  all.forEach(n => {
    const x = n._cx - NODE_W / 2;
    const y = nodeY(n);
    let cls = "node";
    if (n.founder) cls += " founder";
    else if (n.chiefRabbi) cls += " chief-rabbi";

    const node = svgEl("g", { class: cls, transform: `translate(${x},${y})` });

    node.appendChild(svgEl("rect", { width: NODE_W, height: NODE_H }));

    const hebText = svgEl("text", { class: "node-heb", x: NODE_W - 10, y: 17, "text-anchor": "end" });
    hebText.textContent = n.he;
    node.appendChild(hebText);

    const nameText = svgEl("text", { x: 10, y: 34, style: "font-weight:700;" });
    nameText.textContent = n.en.length > 26 ? n.en.slice(0, 25) + "…" : n.en;
    node.appendChild(nameText);

    if (n.title) {
      const titleText = svgEl("text", { x: 10, y: 48, style: "font-size:10px;font-style:italic;" });
      titleText.textContent = n.title.length > 30 ? n.title.slice(0, 29) + "…" : n.title;
      node.appendChild(titleText);
    }

    const datesText = svgEl("text", { class: "node-dates", x: 10, y: NODE_H - 8 });
    datesText.textContent = n.dates || "";
    node.appendChild(datesText);

    if (n.link) {
      const linkTag = svgEl("text", { x: NODE_W - 10, y: NODE_H - 8, "text-anchor": "end", style: "font-size:10px;fill:#6e1f1f;" });
      linkTag.textContent = "profile →";
      node.appendChild(linkTag);
    }

    node.addEventListener("mouseenter", (evt) => {
      tooltip.innerHTML = `<span class="heb">${n.he || ""}</span><strong>${n.en}</strong>${n.title ? " — " + n.title : ""}${n.dates ? " (" + n.dates + ")" : ""}<br>${n.desc || ""}`;
      tooltip.classList.add("visible");
    });
    node.addEventListener("mousemove", (evt) => {
      tooltip.style.left = Math.min(evt.clientX + 16, window.innerWidth - 340) + "px";
      tooltip.style.top = Math.min(evt.clientY + 16, window.innerHeight - 140) + "px";
    });
    node.addEventListener("mouseleave", () => {
      tooltip.classList.remove("visible");
    });
    if (n.link) {
      node.addEventListener("click", () => { window.location.href = n.link; });
    }

    g.appendChild(node);
  });

  const container = document.getElementById("tree-container");
  container.appendChild(svg);

  // Center the scroll view on the founder so the tree doesn't open on blank space.
  const wrap = container.closest(".tree-wrap");
  if (wrap) {
    const rootScreenX = root._cx + 40; // + g translate
    wrap.scrollLeft = Math.max(0, rootScreenX - wrap.clientWidth / 2);
  }
}

document.addEventListener("DOMContentLoaded", renderTree);
