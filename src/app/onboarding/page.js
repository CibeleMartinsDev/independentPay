'use client'
import React from "react";
import OnboardingTemplate from "../components/templates/Onboarding";
import { useRouter } from "next/navigation";
const stripe = require("stripe")(
  process.env.NEXT_PUBLIC_STRIPE_TEST_SK
);
export default async function OnboardingPage() {

    const router = useRouter()
    const createStripeAccount = async (email)=> {
      const account = await stripe.accounts.create({
        type: "express",
        country: "BR",
        email: email,
        capabilities: {
          card_payments: {
            requested: true,
          },
          transfers: {
            requested: true,
          },
        },
      });
      redirectForOnboardingStripe(account.id)
    
    }

    const redirectForOnboardingStripe = async (accountId)=> {
      const accountLink = await stripe.accountLinks.create({
        account: `${accountId}`,
        refresh_url: 'https://example.com/reauth',
        return_url: 'http://localhost:3000',
        type: 'account_onboarding',
      });
      router.push(accountLink.url)
    }
    return <OnboardingTemplate getEmail={createStripeAccount}/>
  }