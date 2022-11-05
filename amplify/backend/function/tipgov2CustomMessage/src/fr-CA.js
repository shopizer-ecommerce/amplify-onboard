async function signUpMessage(event, generateEmailBody) {
	event.response = {
		emailSubject: `${process.env.TITLE}: Code de vérification`,
		emailMessage: generateEmailBody(`
      <p>Bienvenue à ${process.env.TITLE},</p>
      <p>Votre couriel enregistré est ${event.request.userAttributes.email} votre code de vérification est ${event.request.codeParameter}</p>
      <br />
      <p>Entrez votre code dans le champs requis à cet effet ou <a href="${process.env.SITE_URL}confirm-registration?lang=${event.request.userAttributes.locale}&email=${event.request.userAttributes.email}&code=${event.request.codeParameter}">cliquer ce lien pour activer automatiquement</a>.</p>
      `),
	};
	return event;
}

async function forgotPassword(event, generateEmailBody) {
	event.response = {
		emailSubject: `${process.env.TITLE}: Recover Password`,
		emailMessage: generateEmailBody(`
      <p>Votre code de récupération de mot de passe est: ${event.request.codeParameter}</p>
      <br />
      <p>Entrez votre code dans le champs requis à cet effet ou <a href="${process.env.SITE_URL}redefine-password?lang=${event.request.userAttributes.locale}&email=${event.request.userAttributes.email}&code=${event.request.codeParameter}">cliquer ce lien.</a>.</p>
      `),
	};
	return event;
}

async function updateUserAttributeMessage(event, generateEmailBody) {
	event.response = {
		emailSubject: `${process.env.TITLE}: Profile Updated`,
		emailMessage: generateEmailBody(
			`<p>Votre profile a été mis à jour, veuillez utiliser ce code: ${event.request.codeParameter}</p>`
		),
	};
	return event;
}

async function verifyUserAttribute(event, generateEmailBody) {
	event.response = {
		emailSubject: `${process.env.TITLE}: Update Email`,
		emailMessage: generateEmailBody(`<p>Pour mettre à jour votre couriel utilisez ce code: ${event.request.codeParameter}</p>`),
	};
	return event;
}

module.exports = {
	signUpMessage,
	forgotPassword,
	updateUserAttributeMessage,
	verifyUserAttribute,
};
