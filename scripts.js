// Inizializza EmailJS con la tua Public Key
(function() {
  emailjs.init('5dTLT6bmdof0m4HBr'); // La tua public key
})();

// Variabile globale per il piano selezionato
let selectedPlan = ""; // Imposterai questa variabile quando l'utente seleziona un piano

// Funzione per mostrare il popup
function showPopup(plan) {
  selectedPlan = plan;  // Imposta il piano selezionato
  document.getElementById('popup-title').innerText = `Attiva piano ${plan}`;
  document.getElementById('popup').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

// Funzione per inviare l'email
function submitForm() {
  const email = document.getElementById('email').value;

  // Verifica se l'email è valida
  if (!email.includes('@')) {
    alert("Inserisci un'email valida.");
    return;
  }

  // Crea le variabili dinamiche da inviare nel template
  const storage = selectedPlan === 'Base' ? '200 GB' :
                  selectedPlan === 'Standard' ? '500 GB' :
                  '1 TB'; // Esempio: piano Premium
  const price = selectedPlan === 'Base' ? '1,99€' :
                selectedPlan === 'Standard' ? '2,99€' :
                '4,99€'; // Esempio: piano Premium

  const activationLink = "https://www.tuo-link-activation.com"; // Sostituisci con il link effettivo per l'attivazione

  // Invia l'email tramite EmailJS
  emailjs.send("service_chih3ur", "template_658ukbe", {
    to_email: email,               // L'email dell'utente
    plan: selectedPlan,            // Il piano selezionato
    storage: storage,              // La quantità di storage
    price: price,                  // Il prezzo del piano
    activation_link: activationLink // Il link di attivazione
  }).then(function(response) {
    alert("Email inviata con successo!");
    closePopup(); // Chiudi il popup dopo l'invio dell'email
  }, function(error) {
    alert("Errore nell'invio dell'email: " + JSON.stringify(error));
  });
}

// Funzione per chiudere il popup
function closePopup() {
  document.getElementById('popup').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
