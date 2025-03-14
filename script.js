const btnChangerPrix = document.getElementById("btn-changer-prix");
const prixNormaux = [100, 150, 200];

const prixPro = [
  prixNormaux[0] * 0.8,
  prixNormaux[1] * 0.8,
  prixNormaux[2] * 0.8,
];

let modePro = false;

function togglePrix() {
  modePro = !modePro;

  const elementsPrice = document.querySelectorAll(".price");

  for (let i = 0; i < elementsPrice.length; i++) {
    const element = elementsPrice[i];

    let prixAAfficher;

    if (modePro) {
      prixAAfficher = prixPro[i];
    } else {
      prixAAfficher = prixNormaux[i];
    }

    element.textContent = prixAAfficher + "€";
    btnChangerPrix.textContent = modePro
      ? "Passer en mode client"
      : "Passer en mode pro";
  }
}
