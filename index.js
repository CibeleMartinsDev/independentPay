async function crateAccountStripe() {
  const stripe = require("stripe")(
    "sk_test_51OiLjWKkGfoPL1Yz9gtNkFjjukcarIlvH1DZwRRv3PPKntYe5MKfVgeJtRRTdGUnjg7ekYLPLWxTf2khFYNttufx00bK41Mjx7"
  );
  const account = await stripe.accounts.create({
    type: "express",
    country: "BR",
    email: "jenny.rosen@example.com",
    capabilities: {
      card_payments: {
        requested: true,
      },
      transfers: {
        requested: true,
      },
    },
  });

  console.log("Conta Criada: ", account);
}

// crateAccountStripe();

async function listAccountsConnecteds() {
  const stripe = require("stripe")(
    "sk_test_51OiLjWKkGfoPL1Yz9gtNkFjjukcarIlvH1DZwRRv3PPKntYe5MKfVgeJtRRTdGUnjg7ekYLPLWxTf2khFYNttufx00bK41Mjx7"
  );
  const accounts = await stripe.accounts.list({
    limit: 3,
  });

  console.log("Conta conectada: ", accounts);
}
  listAccountsConnecteds();

async function getLinkOnboardingAccount() {

const stripe = require('stripe')('sk_test_51OiLjWKkGfoPL1Yz9gtNkFjjukcarIlvH1DZwRRv3PPKntYe5MKfVgeJtRRTdGUnjg7ekYLPLWxTf2khFYNttufx00bK41Mjx7');
const accountLink = await stripe.accountLinks.create({
  account: 'acct_1OiOFK4DSQEui5V4',
  refresh_url: 'https://example.com/reauth',
  return_url: 'https://example.com/return',
  type: 'account_onboarding',
});

console.log("Link oNBOARDING", accountLink)
}

// getLinkAccount()
async function createLinkLoginStrapi() {
  const stripe = require("stripe")(
    "sk_test_51OiLjWKkGfoPL1Yz9gtNkFjjukcarIlvH1DZwRRv3PPKntYe5MKfVgeJtRRTdGUnjg7ekYLPLWxTf2khFYNttufx00bK41Mjx7"
  );
  const loginLink = await stripe.accounts.createLoginLink(
    "acct_1OiOFK4DSQEui5V4"
  );

  console.log("Link de login conta conectada: ", loginLink);
}

//createLinkLoginStrapi()
