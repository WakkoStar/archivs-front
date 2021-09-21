import axios from 'axios';

export const addContact = (mail) => {
  if (mail == '') {
    alert('Impossible de vous ajouter, vérifiez votre adresse mail');
    return;
  }
  axios
    .put(
      'https://api.sendgrid.com/v3/marketing/contacts',
      { contacts: [{ email: mail }] },
      {
        headers: {
          Authorization: 'Bearer ' + process.env.SG_PRIVATE_KEY,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      console.log(response);
      alert('Vous êtes bien ajouté à la newsletter');
    })
    .catch((error) => {
      console.log('An error occurred:', error.response.data);
      alert('Impossible de vous ajouter, vérifiez votre adresse mail');
      return;
    });
};
