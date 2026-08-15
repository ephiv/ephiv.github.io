const graph = document.querySelector('[data-field-graph]');
const datalist = document.querySelector('#field-options');
const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-input]');
const homeScreen = document.querySelector('[data-home-screen]');
const resultScreen = document.querySelector('[data-result-screen]');
const resultContent = document.querySelector('[data-result-content]');
const backButton = document.querySelector('[data-back-button]');

const fieldPositions = {
  'computer-science': [50, 35],
  mathematics: [31, 26],
  physics: [23, 58],
  biology: [61, 68],
  economics: [76, 39],
  design: [68, 16]
};

function fieldById(id) {
  return fieldResources.fields.find((field) => field.id === id);
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function renderOptions() {
  datalist.innerHTML = fieldResources.fields
    .map((field) => `<option value="${field.name}"></option>`)
    .join('');
}

function renderGraph() {
  const lines = fieldResources.connections.map(([from, to]) => {
    const [x1, y1] = fieldPositions[from];
    const [x2, y2] = fieldPositions[to];
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
  }).join('');

  const points = fieldResources.fields.map((field) => {
    const [x, y] = fieldPositions[field.id];
    return `
      <button class="field-node" style="left:${x}%; top:${y}%;" data-field-id="${field.id}" type="button">
        <span>${field.name}</span>
      </button>
    `;
  }).join('');

  graph.innerHTML = `
    <svg class="graph-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>
    ${points}
  `;

  graph.querySelectorAll('[data-field-id]').forEach((button) => {
    button.addEventListener('click', () => showField(button.dataset.fieldId));
  });
}

function findField(query) {
  const wanted = normalize(query);
  return fieldResources.fields.find((field) => normalize(field.name) === wanted)
    || fieldResources.fields.find((field) => normalize(field.name).includes(wanted));
}

function showField(fieldId) {
  const field = fieldById(fieldId);
  if (!field) return;

  const connectedFields = fieldResources.connections
    .filter(([from, to]) => from === field.id || to === field.id)
    .map(([from, to]) => fieldById(from === field.id ? to : from).name);

  resultContent.innerHTML = `
    <p class="eyebrow">field resources</p>
    <h1>${field.name}</h1>
    <p class="lead">${field.description}</p>
    <p class="connected-fields"><strong>Connected fields:</strong> ${connectedFields.join(', ') || 'none yet'}</p>
    <div class="resource-list">
      ${field.resources.map((resource) => `
        <a class="resource-card" href="${resource.url}" target="_blank" rel="noopener">
          <span class="resource-type">${resource.type}</span>
          <strong>${resource.title}</strong>
          <span>${resource.url}</span>
        </a>
      `).join('')}
    </div>
  `;

  homeScreen.hidden = true;
  resultScreen.hidden = false;
  backButton.focus();
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const field = findField(searchInput.value);
  if (field) {
    showField(field.id);
    searchInput.setCustomValidity('');
  } else {
    searchInput.setCustomValidity('Choose one of the listed fields to see resources.');
    searchInput.reportValidity();
  }
});

backButton.addEventListener('click', () => {
  resultScreen.hidden = true;
  homeScreen.hidden = false;
  searchInput.focus();
});

renderOptions();
renderGraph();
