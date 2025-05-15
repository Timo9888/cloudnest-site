document.addEventListener('DOMContentLoaded', () => {
  // Inizializza EmailJS
  emailjs.init("5dTLT6bmdof0m4HBr");

  const nome = document.getElementById('nome');
  const cognome = document.getElementById('cognome');
  const username = document.getElementById('username');
  const form = document.getElementById('activation-form');
  const status = document.getElementById('status');

  function generaUsername() {
    if (nome.value && cognome.value) {
      username.value = `${nome.value[0].toLowerCase()}.${cognome.value.toLowerCase()}`;
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

    const dati = {
      nome: nome.value,
      cognome: cognome.value,
      username: username.value,
      password: password,
      plan: "Starter"
    };

    console.log('Dati da inviare:', dati);

    emailjs.send('service_5izkcug', 'template_70y5iqr', dati)
      .then(() => {
        alert("✅ Dati inviati con successo!");
        window.location.href = 'conferma.html';
      })
      .catch((error) => {
        console.error('Errore durante l’invio:', error);
        status.textContent = '❌ Errore durante l’invio. Controlla EmailJS.';
        status.style.color = 'red';
      });
  });
});
