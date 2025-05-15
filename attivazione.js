document.addEventListener('DOMContentLoaded', () => {
  // Inizializza EmailJS (inserisci la tua Public Key qui sotto)
  emailjs.init("INSERISCI_LA_TUA_PUBLIC_KEY");

  const nome = document.getElementById('nome');
  const cognome = document.getElementById('cognome');
  const username = document.getElementById('username');
  const form = document.getElementById('activation-form');
  const status = document.getElementById('status');

  // Genera username automatico
  function generaUsername() {
    if (nome.value && cognome.value) {
      username.value = `${nome.value[0].toLowerCase()}.${cognome.value.toLowerCase()}`;
    }
  }

  nome.addEventListener('input', generaUsername);
  cognome.addEventListener('input', generaUsername);

  // Gestione invio form
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm-password').value;

    if (password !== confirm) {
      status.textContent = '⚠️ Le password non corrispondono!';
      status.style.color = 'red';
      return;
    }

    const dati = {
      nome: nome.value,
      cognome: cognome.value,
      username: username.value,
      password: password,
      plan: "Starter" // Puoi cambiarlo in base al piano scelto
    };

    emailjs.send('service_5izkcug', 'template_70y5iqr', dati)
      .then(() => {
        window.location.href = 'conferma.html';
      })
      .catch((error) => {
        console.error('Errore durante l’invio:', error);
        status.textContent = 'Errore durante l’invio. Riprova.';
        status.style.color = 'red';
      });
  });
});
