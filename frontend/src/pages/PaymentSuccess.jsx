import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { verifyPayment } from "../services/paymentService";
import { useSubscription } from "../context/SubscriptionContext";

import AppLayout from "../components/layout/AppLayout";

import Logo from "../assets/images/logo.png";

export default function PaymentSuccess() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const { activatePremium } = useSubscription();

  const [message, setMessage] = useState("Verifying payment...");

  useEffect(() => {

    const reference = searchParams.get("reference");

    if (!reference) {

      setMessage("Payment reference not found.");

      return;
    }

    let cancelled = false;

    const verify = async () => {

      try {

        const result = await verifyPayment(reference);

        if (cancelled) return;

        if (result?.success) {

          if (result.subscription) {
            activatePremium(result.subscription);
          }

          setMessage("🎉 Payment successful! Premium activated.");

          setTimeout(() => {
            navigate("/dashboard", { replace: true });
          }, 3000);

        } else {

          setMessage("Payment verification failed.");

        }

      } catch (error) {

        console.error("PAYMENT VERIFICATION ERROR:", error);

        if (!cancelled) {
          setMessage("Unable to verify payment.");
        }

      }

    };

    verify();

    return () => {
      cancelled = true;
    };

  }, [navigate, searchParams, activatePremium]);


  return (

    <AppLayout>

      <div className="paymentSuccessPage">

        <img
          src={Logo}
          alt="PBody FullStack Academy"
        />

        <h1>{message}</h1>

        <p>
          Please wait while we complete your subscription.
        </p>

      </div>

    </AppLayout>

  );

}