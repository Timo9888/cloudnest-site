document.addEventListener('DOMContentLoaded', () => {
  emailjs.init("LA_TUA_PUBLIC_KEY"); // ⬅️ Sostituisci con la tua Public Key di EmailJS

  const nome = document.getElementById('nome');
  const cognome = document.getElementById('cognome');
  const username = document.getElementById('username');
  const form = document.getElementById('activation-form');
  const status = document.getElementById('status');

  // Generazione username
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
      plan: "Starter" // oppure dinamico se vuoi estenderlo
    };

    emailjs.send('service_5izkcug', 'template_70y5iqr', dati)
    .then(() => {
      window.location.href = 'conferma.html';
    })
    .catch((error) => {
      console.error('Errore invio:', error);
      status.textContent = 'Errore durante l’invio. Riprova.';
      status.style.color = 'red';
    });
  });
});
