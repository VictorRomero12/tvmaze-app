export const $ = (sel, root=document) => root.querySelector(sel);
export const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

export function showCard(show) {
  const img = show.image?.medium || show.image?.original || "https://via.placeholder.com/210x295?text=No+Image";
  return `
    <a href="/show.html?id=${show.id}" class="c-card">
      <img class="c-card__img" src="${img}" alt="${show.name}">
      <div class="c-card__body">
        <div class="c-card__title">${show.name}</div>
        <div class="c-card__meta">
          ${(show.genres || []).slice(0,3).map(g => `<span class="c-card__badge">${g}</span>`).join("")}
          ${show.rating?.average ? `<span>★ ${show.rating.average}</span>` : ""}
        </div>
      </div>
    </a>
  `;
}

export function castCard(p) {
  const person = p.person || p;
  const img = person.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";
  return `
    <a href="/person.html?id=${person.id}" class="c-card">
      <img class="c-card__img" src="${img}" alt="${person.name}">
      <div class="c-card__body">
        <div class="c-card__title">${person.name}</div>
      </div>
    </a>
  `;
}

export function renderInto(el, html) { el.innerHTML = html; }
export function skeletonCards(n=8) {
  return Array.from({length:n}).map(() => `
    <div class="c-card" style="height:320px; background:linear-gradient(90deg,#1a2233 25%,#1d2538 37%,#1a2233 63%); background-size:400% 100%; animation: shimmer 1.2s infinite;">
    </div>
  `).join("");
}
