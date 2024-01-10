const scriptURL = 'https://script.google.com/macros/s/AKfycbyJFP_hdckqc4_307ckzxv_nXN9SdKVKNTqMeoAstBwsseGnJgGeAAQIMlstBz-zS8FKA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Dziękuje. Twoja wiadomość została pomyślnie wysłana." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
