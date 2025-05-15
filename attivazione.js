document.addEventListener('DOMContentLoaded', () => {
  const nome = document.getElementById('nome');
  const cognome = document.getElementById('cognome');
  const username = document.getElementById('username');
  const form = document.getElementById('activation-form');
  const status = document.getElementById('status');

  // Genera username automatico: iniziale.nome.cognome
  function generaUsername() {
    if (nome.value && cognome.value) {
      const user = `${nome.value[0].toLowerCase()}.${cognome.value.toLowerCase()}`;
      username.value = user;
    }
  }

  nome.addEventListener('input', generaUsername);
  cognome.addEventListener('input', generaUsername);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm-password').value;

    if (password !== confirm) {
      status.textContent = '⚠️ Le password non corrispondono!';
      status.style.color = 'red';
      return;
    }

    // Simulazione invio dati (puoi sostituire con invio a server)
    const datiUtente = {
      nome: nome.value,
      cognome: cognome.value,
      username: username.value,
      password: password,
    };

    console.log('Dati raccolti:', datiUtente); // per debug

    // Reindirizza alla pagina di conferma
    window.location.href = 'conferma.html';
  });
});

document.getElementById('activation-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Prendi i valori dal form
  const nome = document.getElementById('nome').value;
  const cognome = document.getElementById('cognome').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Se hai un campo piano, prendi anche quello, altrimenti usa una variabile fissa
  const plan = "Piano scelto"; // oppure recuperalo da input se c’è

  // Invia l’email con EmailJS
  emailjs.send('service_5izkcug', 'template_70y5iqr', {
    nome: nome,
    cognome: cognome,
    username: username,
    password: password,
    plan: plan
  })
  .then(function(response) {
    alert('Attivazione inviata con successo!');
    window.location.href = 'conferma.html';  // pagina di ringraziamento
  }, function(error) {
    alert('Errore durante l\'invio, riprova.');
    console.error('Errore EmailJS:', error);
  });
});
