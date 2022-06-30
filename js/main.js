/* --------------- RECUPERATION ID CLASS DE HTML --------------- */
//Container de la liste produit
const productContainer = document.getElementById('products');

// Selection et stock du formulaire ajouter
const form = document.getElementById('formulaire');
const imgProduct = document.getElementById('imgProduct');
const productName = document.getElementById('productName');
const category = document.getElementById('category');
const caracteristic = document.getElementById('caracteristic');
const inputBooking = document.getElementById('inputBooking');


// Selection et stock du formulaire modifier
const formEdit = document.getElementById('formulaireEdit');
const imgProductEdit = document.getElementById('imgProductEdit');
const productNameEdit = document.getElementById('productNameEdit');
const categoryEdit = document.getElementById('categoryEdit');
const caracteristicEdit = document.getElementById('caracteristicEdit');
const inputBookingEdit = document.getElementById('inputBookingEdit');

// Message erreur formulaire 
const msgError = document.querySelectorAll('.error');

// Header modal 
const titre = document.getElementById('titre');

// Conteneur du matériel 
const listItems = document.querySelector('#products');

// Récupération des éléments du modal ajouter
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeAddBtn = document.querySelector('#addButton');
const closeBtn = document.querySelector('.close');


/* --------------- TABLEAU --------------- */
// Tableau produit
const products = [
  {
    id: 1,
    productName: "Macbook Pro",
    idCategory: 3,
    description: "16 pouces </br> 1 To SSD </br> 32 giga de RAM",
    image: "images/equipment/desktop/macbook.jpg",
    canBeLoaned: true,
  },
  {
    id: 2,
    productName: "Gigaset - C530",
    idCategory: 2,
    description: "Touche programmable </br> Fonction : appel vocal, double appel, </br> messagerie, journal d'appel",
    image: "images/equipment/telephony/cellphone.jpg",
    canBeLoaned: true,
  },
  {
    id: 3,
    productName: "D-Link Switch",
    idCategory: 1,
    description: "T8 ports 10/100 Mbps </br> Prise en charge IPv6 </br> Routage statique/commutation",
    image: "images/equipment/network/switch.jpg",
    canBeLoaned: false,
  },
  {
    id: 4,
    productName: "Projecteur Epson",
    idCategory: 4,
    description: "Résolution native de 1024x768 </br> Niveau sonore de 28 dB </br> Résolution informatique XGA",
    image: "images/equipment/meeting/projector.jpg",
    canBeLoaned: true,
  },
  {
    id: 5,
    productName: "Disque dur 1 To",
    idCategory: 3,
    description: "Technologie : HDD </br> Interface du disque : USB 3.0 </br> Compatible Windows",
    image: "images/equipment/desktop/disk.jpg",
    canBeLoaned: true,
  },
  {
    id: 6,
    productName: "Imprimante Canon",
    idCategory: 4,
    description: "Imprimante jet d'encre recto/verso </br> Couleur et Noir/Blanc </br> Imprime, copie et scan",
    image: "images/equipment/meeting/printer.jpg",
    canBeLoaned: true,
  },
  {
    id: 7,
    productName: "Modem",
    idCategory: 1,
    description: "V.92 </br> Quick Connect </br> Compatible Windows",
    image: "images/equipment/network/modems.jpg",
    canBeLoaned: false,
  },
  {
    id: 8,
    productName: "Convertisseur fibre",
    idCategory: 1,
    description: "Convertisseur rj45 </br> Distance de transmission : 550m  </br> Transfert jusqu'à 1000Mbps",
    image: "images/equipment/network/fiberConverter.jpg",
    canBeLoaned: false,
  },
  {
    id: 9,
    productName: "Casque pro jabra",
    idCategory: 2,
    description: "Protection Safetone </br> écran tactile </br> Connexion possible via smartphone",
    image: "images/equipment/telephony/headset.jpg",
    canBeLoaned: true,
  },
];

console.log(products);


// Tableau catégorie
const categories = [
  {
    id: 1,
    name: "Réseau",
  },
  {
    id: 2,
    name: "Téléphonique",
  },
  {
    id: 3,
    name: "Desktop",
  },
  {
    id: 4,
    name: "Réunion",
  },
];


/* --------------- RECUPERATION PRODUIT TABLEAU PRODUCTS AFFICHAGE VERSION HTML --------------- */
// Récupération des données du tableau products en version HTML
products.forEach(item => {

  let reservable = ''
  if (item.canBeLoaned == true) {
    reservable = '<button class="btn-reservable">Réserver</button>'
  } else {
    reservable = '<button class="btn-noreservable">Détails du produit</button>'
  }

  const cardProduct =
    `
    <div class="containerFormMaterial">
        <div class="imgMaterial">
          <img src=${item.image}></img>
          <span class="categories">${categories[item.idCategory - 1].name}</span>
        </div>

        <div class="textMaterial">
          <h2>${item.productName}</h2>
          <h3>Caractéristique</h3>
          <p>${item.description}</p>
        </div>

        <div class="buttonMaterial">
        ${reservable}
        </div>

        <div class="btnDeleteEdit">
          <button class="btn-edit" onClick="editPost(this)">Modifier</button>
          <button class="btn-delete">Supprimer</button>
        </div>
    </div>
    `
  console.log(cardProduct);
  productContainer.innerHTML += cardProduct;

  // Suppression des éléments
  const btnDelete = document.querySelectorAll('.btn-delete');
  console.log(btnDelete);

  btnDelete.forEach(i => {
    console.log('btn-delete');

    // Au clic sur bouton supprimer
    i.addEventListener('click', function () {
      console.log('btn-delete cliqué');
      // J'enlève l'élément parent
      i.parentElement.parentElement.remove();
    });
  });

  // Modifier les éléments
  const btnEdit = document.querySelectorAll('.btn-edit');
  console.log(btnEdit);

  btnEdit.forEach(i => {
    console.log('btn-edit');

    i.addEventListener('click', function () {
      console.log('btn-edit cliqué');
      i.parentElement.parentElement.classList.toggle('done');

    });
  });

});

/* --------------- AJOUTER UN PRODUIT AVEC LE FORMULAIRE --------------- */
//Passe l'information du HTML vers Javascript
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('bouton cliqué');

  //Récupération valeur du formulaire 
  const imgProductValue = imgProduct.value.trim();
  console.log(imgProductValue, "image");
  const productNameValue = productName.value.trim();
  console.log(productNameValue, "Nom produit");
  const categoryValue = category.value.trim();
  console.log(categoryValue, "Catégorie");
  const caracteristicValue = caracteristic.value.trim();
  console.log(caracteristicValue, "Caractéristique");
  const inputBookingValue = inputBooking.value.trim();
  console.log(inputBookingValue, "Réservable");


  // Charger les photos
  document.querySelector('#imgProduct').addEventListener("change", function () {
    console.log(this.files);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      localStorage.setItem("recent-image", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem("recent-image");
    if (recentImageDataUrl) {
      document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
    }
  });


  //Création de l'élément ajouter produit
  let addProduct = `
  <div class="containerFormMaterial">
  <div class="imgMaterial">
  <img id="imgPreview"src="">${imgProductValue}</img>
  <span class="categories">${categoryValue}</span>
  </div>

  <div class="textMaterial">
  <h2>${productNameValue}</h2>
  <h3>Caractéristique</h3>
  <p>${caracteristicValue}</p>
  </div>

  <div class="buttonMaterial">
  <button type="submit" class="btn-reservable">${inputBookingValue}</button></a>
  </div>

  <div class="btnDeleteEdit">
    <button class="btn-edit">Modifier</button>
    <button class="btn-delete">Supprimer</button>
  </div>
  </div>
  `

  // Ajouter l'élément dans la liste existante
  console.log(listItems);
  listItems.innerHTML += addProduct;


  // Supprimer l'élément de la liste 
  const btnDelete = document.querySelectorAll('.btn-delete');
  console.log(btnDelete);

  btnDelete.forEach(i => {
    console.log('btn-delete');

    // Au clic sur bouton supprimer
    i.addEventListener('click', function () {
      console.log('btn-delete cliqué');
      // J'enlève l'élément parent
      i.parentElement.parentElement.remove();
    });
  });

  // Modifier les éléments
  const btnEdit = document.querySelectorAll('.btn-edit');
  console.log(btnEdit);

  btnEdit.forEach(i => {
    console.log('btn-edit');

    i.addEventListener('click', function () {
      console.log('btn-edit cliqué');
      i.parentElement.parentElement.classList.toggle('done');

    });
  });

  // Réinitialiser le formulaire
  form.reset();

});


/* --------------- FENETRE MODAL --------------- */
// Evenements au clique fênetre modal
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeAddBtn.addEventListener('click', closeAddModal);
window.addEventListener('click', outsideClick);

// Ouverture fenêtre modal
function openModal() {
  modal.style.display = 'block';
}

// Fermeture fênetre modal
function closeModal() {
  modal.style.display = 'none';
}

function closeAddModal() {
  modal.style.display = 'none';
}

// Fermeture si clique fênetre extérieur modal
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

/* --------------- FORMULAIRE ERREUR ET CHAMPS VIDE --------------- */
// Tous les messages d'erreur sont invisibles dans le formulaire
msgError.forEach(error => {
  error.classList.add('invisible');
});

//Vérification information de l'utilisateur 
if (productNameValue.length < 2 || productNameValue.length > 20) {
  console.log('erreur nom produit');
  productName.nextElementSibling.classList.remove('invisible');
} else if (caracteristicValue.length < 10 || caracteristicValue.length > 100) {
  console.log('erreur message');
  caracteristic.nextElementSibling.classList.remove('invisible');
} else {
  console.log('succès');
  titre.innerText = "Votre équipement vient d'être rajouté";
  form.remove();
};










