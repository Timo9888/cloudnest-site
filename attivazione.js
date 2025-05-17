document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('activation-form');
  const nome = document.getElementById('nome');
  const cognome = document.getElementById('cognome');
  const emailUtente = document.getElementById('email-utente');
  const username = document.getElementById('username');
  const plan = document.getElementById('plan');
  const status = document.getElementById('status');

  // Genera username automatico
  function generaUsername() {
    if (nome.value && cognome.value) {
      username.value = `${nome.value[0].toLowerCase()}.${cognome.value.toLowerCase()}`;
    }
  }

  nome.addEventListener('input', generaUsername);
  cognome.addEventListener('input', generaUsername);

  // Invio form
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
      status.textContent = '⚠️ Le password non corrispondono!';
      status.className = 'error';
      return;
    }

    const dati = {
      nome: nome.value,
      cognome: cognome.value,
      username: username.value,
      password: password,
      plan: plan.value,
      email_utente: emailUtente.value,         // email dell'utente (input)
      email: "santosuossosimone8@gmail.com"    // tua email (destinatario)
    };

    emailjs.send('service_chih3ur', 'template_c5slxmt', dati)
      .then(() => {
        window.location.href = 'conferma.html';
      })
      .catch((error) => {
        console.error('Errore durante l’invio:', error);
        status.textContent = '❌ Errore durante l’invio. Controlla EmailJS.';
        status.className = 'error';
      });
  });
});
