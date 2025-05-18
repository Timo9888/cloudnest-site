// Inizializza EmailJS con la tua Public Key
document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init('5dTLT6bmdof0m4HBr');
  } else {
    console.error("EmailJS non è stato caricato correttamente.");
  }
});

// Variabile globale per il piano selezionato
let selectedPlan = "";

// Funzione per mostrare il popup
function showPopup(plan) {
  selectedPlan = plan;

  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const title = document.getElementById('popup-title');

  if (popup && overlay && title) {
    title.innerText = `Attiva piano ${plan}`;
    popup.classList.add('active');
    overlay.classList.add('active');
  } else {
    console.error("Elemento popup, overlay o titolo non trovato.");
  }
}

// Funzione per inviare l'email
function submitForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput ? emailInput.value : '';

  if (!email || !email.includes('@')) {
    alert("Inserisci un'email valida.");
    return;
  }

  // Dettagli del piano
  const storage = selectedPlan === 'Base' ? '200 GB' :
                  selectedPlan === 'Standard' ? '500 GB' :
                  '1 TB';
  const price = selectedPlan === 'Base' ? '1,99€' :
                selectedPlan === 'Standard' ? '2,99€' :
                '4,99€';

  const activationLink = "https://www.tuo-link-activation.com"; // Sostituisci con link reale

  // Invio email con EmailJS
  emailjs.send("service_chih3ur", "template_658ukbe", {
    to_email: email,
    plan: selectedPlan,
    storage: storage,
    price: price,
    activation_link: activationLink
  }).then(function(response) {
    alert("Email inviata con successo!");
    closePopup();
  }, function(error) {
    console.error("Errore EmailJS:", error);
    alert("Errore nell'invio dell'email: " + JSON.stringify(error));
  });
}

// Funzione per chiudere il popup
function closePopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');

  if (popup && overlay) {
    popup.classList.remove('active');
    overlay.classList.remove('active');
  }
}
