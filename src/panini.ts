// * Panini Object type anlegen

type PaniniSchema = {
  name: string;
  surname: string;
  stage_name: string;
  albums: number;
  top: number;
  net_worth: number;
  old: number;
  textarea: string;
  url: string;
  id: number;
};

// * 2. Liste von Panini anlegen
let paniniList: PaniniSchema[] = [];

// * 3 Alle HTML-Elemente rausholen
const paniniForm = document.getElementById("panini_form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const surnameInput = document.getElementById("surname") as HTMLInputElement;
const stageNameInput = document.getElementById(
  "stage_name"
) as HTMLInputElement;
const albumsInput = document.getElementById("albums") as HTMLInputElement;
const topInput = document.getElementById("top") as HTMLInputElement;
const netWorthInput = document.getElementById("net_worth") as HTMLInputElement;
const oldInput = document.getElementById("old") as HTMLInputElement;
const textareaInput = document.getElementById("quote") as HTMLTextAreaElement;
const urlInput = document.getElementById("image_url") as HTMLInputElement;
const submitButton = document.getElementById("submit_btn") as HTMLButtonElement;

const paniniOutput = document.getElementById("output") as HTMLDivElement;

// * 4. createPanini Funktion anlegen
function createPanini(): PaniniSchema {
  console.log("ein neue Panini wird erstellt");
  const newPanini: PaniniSchema = {
    name: nameInput.value,
    surname: surnameInput.value,
    stage_name: stageNameInput.value,
    albums: parseInt(albumsInput.value),
    top: parseInt(topInput.value),
    net_worth: parseInt(netWorthInput.value),
    old: parseInt(oldInput.value),
    textarea: textareaInput.value,
    url: urlInput.value,
    id: paniniList.length + 1,
  };
  return newPanini;
}

// * 4. paniniForm EventListener hinzufügen
paniniForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form was submitted");
  const newPaniniVariable = createPanini();
  console.log(newPaniniVariable);
  paniniList.push(newPaniniVariable);
  console.log(paniniList);
  showPanini(newPaniniVariable);
  paniniForm.reset();
});

// * 5. Panini in HTML ausgeben mit Funktion
function showPanini(panini: PaniniSchema) {
  const paniniElement = document.createElement("div");
  paniniElement.innerHTML = `
  <h1>${panini.name} | ${panini.surname}</h1>
  <h2>Stage Name: ${panini.stage_name}</h2>
  <img src="${panini.url}" alt="${panini.stage_name}">
  <p>TextArea: ${panini.textarea}</p>
  <p>Albums: ${panini.albums}</p>
  <p>Top: ${panini.top}</p>
  <p>Net Worth: ${panini.net_worth}</p>
  <p>Old: ${panini.old}</p>
  `;
  paniniOutput.appendChild(paniniElement);
}
