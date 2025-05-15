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

  // raccogli i dati dal form
  const nome = document.getElementById('nome').value;
  const cognome = document.getElementById('cognome').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const plan = "Nome del piano"; // o recuperalo da qualche campo nascosto o sessione

  // invia email con EmailJS
  emailjs.send('service_5izkcug', 'template_70y5iqr', {
    nome: nome,
    cognome: cognome,
    username: username,
    password: password,
    plan: plan,
    // se serve, anche email utente, ecc.
  })
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert('Dati inviati correttamente, grazie!');
    // poi puoi fare redirect o mostrare una pagina di conferma
    window.location.href = 'conferma.html';
  }, function(error) {
    console.log('FAILED...', error);
    alert('Errore nell\'invio, riprova.');
  });
});
document.getElementById('activation-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // raccogli i dati dal form
  const nome = document.getElementById('nome').value;
  const cognome = document.getElementById('cognome').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const plan = "Nome del piano"; // o recuperalo da qualche campo nascosto o sessione

  // invia email con EmailJS
  emailjs.send('service_5izkcug', 'template_70y5iqr', {
    nome: nome,
    cognome: cognome,
    username: username,
    password: password,
    plan: plan,
    // se serve, anche email utente, ecc.
  })
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert('Dati inviati correttamente, grazie!');
    // poi puoi fare redirect o mostrare una pagina di conferma
    window.location.href = 'conferma.html';
  }, function(error) {
    console.log('FAILED...', error);
    alert('Errore nell\'invio, riprova.');
  });
});
