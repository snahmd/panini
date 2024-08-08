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
