/**
 * Under normal circumstances, this file would be a .env file. But since it does not matter for this app, I am using a normal ts file to define all the environment variables.
 */

export const SERVER_ORIGIN = "http://localhost:5000";

export const GOOGLE_OAUTH_CREDENTIALS = {
	client_id:
		"771787417767-sa2spmpoblvcl6ob10ejijn4ogofnrmu.apps.googleusercontent.com",
	project_id: "mym-task",
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_secret: "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",
	redirect_uri: `${SERVER_ORIGIN}/oauth/google`
};
