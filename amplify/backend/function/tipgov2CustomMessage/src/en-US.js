async function signUpMessage(event, generateEmailBody) {
	event.response = {
		emailSubject: `Tip N Go: Verification Code`,
		emailMessage: generateEmailBody(`
      <p>Welcome to TipNGo</p>
      <p>Your registered email is <strong>${event.request.userAttributes.email}</strong> and your verification code is: <strong>${event.request.codeParameter}</strong></p>
      <br />
      <p>Enter your code in the field provided or <a href="https://app.tip-go.ca/confirm-registration?lang=${event.request.userAttributes.locale}&email=${event.request.userAttributes.email}&code=${event.request.codeParameter}">click here to activate your accounts</a>.</p>
      `),
	};
	return event;
}

async function forgotPassword(event, generateEmailBody) {
	event.response = {
		emailSubject: `TipNGo: Recover Password`,
		emailMessage: generateEmailBody(`
      <p>Your password recovery code is: ${event.request.codeParameter}</p>
      <br />
      <p>Enter your code in the field provided..</p>
      `),
	};
	return event;
}

async function updateUserAttributeMessage(event, generateEmailBody) {
	event.response = {
		emailSubject: `TipNGo: Profile Updated`,
		emailMessage: generateEmailBody(
			`<p>Your profile has been updated, use the code: ${event.request.codeParameter}</p>`
		),
	};
	return event;
}

async function verifyUserAttribute(event, generateEmailBody) {
	event.response = {
		emailSubject: `TipNGo: Update Email`,
		emailMessage: generateEmailBody(`<p>To update your email use the code: ${event.request.codeParameter}</p>`),
	};
	return event;
}

module.exports = {
	signUpMessage,
	forgotPassword,
	updateUserAttributeMessage,
	verifyUserAttribute,
};
