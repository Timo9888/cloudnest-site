document.addEventListener('DOMContentLoaded', () => {
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
      plan: "Starter" // modifica se vuoi
    };

    emailjs.send('service_5izkcug', 'template_70y5iqr', dati)
      .then(() => {
        status.style.color = 'green';
        status.textContent = '✅ Dati inviati con successo! Verrai reindirizzato...';

        // Se vuoi fare redirect dopo 2 secondi
        setTimeout(() => {
          window.location.href = 'conferma.html';
        }, 2000);

      })
      .catch((error) => {
        console.error('Errore durante l’invio:', error);
        status.style.color = 'red';
        status.textContent = '❌ Errore durante l’invio. Controlla EmailJS.';
      });
  });
});
