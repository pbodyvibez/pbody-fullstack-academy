import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";

import { useAuth } from "./AuthContext";
import { getCurrentSubscription } from "../services/subscriptionService";


const SubscriptionContext = createContext();


export function SubscriptionProvider({ children }) {

  const {
    user,
    token,
    loading: authLoading
  } = useAuth();


  const [subscription, setSubscription] = useState(null);

  const [loading, setLoading] = useState(true);


  // ============================================================
  // LOAD SUBSCRIPTION FROM BACKEND
  // ============================================================

  useEffect(() => {

    let cancelled = false;


    const loadSubscription = async () => {

      // --------------------------------------------------------
      // WAIT FOR AUTH TO FINISH HYDRATING
      // --------------------------------------------------------

      if (authLoading) {
        return;
      }


      // --------------------------------------------------------
      // NO AUTHENTICATED USER
      // --------------------------------------------------------

      if (!user || !token) {

        if (!cancelled) {

          setSubscription(null);
          setLoading(false);

        }

        return;

      }


      // --------------------------------------------------------
      // FETCH CURRENT SUBSCRIPTION
      // --------------------------------------------------------

      try {

        setLoading(true);


        const result =
          await getCurrentSubscription(token);


        if (cancelled) {
          return;
        }


        if (
          result?.success &&
          result?.subscription
        ) {

          setSubscription(
            result.subscription
          );


          localStorage.setItem(
            "pbodySubscription",
            JSON.stringify(
              result.subscription
            )
          );

        }

        else {

          setSubscription(null);


          localStorage.removeItem(
            "pbodySubscription"
          );

        }

      }

      catch (error) {

        console.error(
          "SUBSCRIPTION LOAD ERROR:",
          error
        );


        if (!cancelled) {

          // ----------------------------------------------------
          // Backend remains the source of truth.
          // Never grant premium from stale localStorage.
          // ----------------------------------------------------

          setSubscription(null);

        }

      }

      finally {

        if (!cancelled) {

          setLoading(false);

        }

      }

    };


    loadSubscription();


    return () => {

      cancelled = true;

    };

  }, [
    user,
    token,
    authLoading
  ]);



  // ============================================================
  // ACTIVATE PREMIUM
  // ============================================================

  const activatePremium = useCallback((payment) => {

    const premiumData = {

      status: "premium",

      plan:
        payment?.plan ||
        "PBody Pro Annual",

      amount:
        payment?.amount ??
        payment?.price ??
        0,

      currency:
        payment?.currency ||
        "NGN",

      paymentReference:
        payment?.reference ||
        payment?.paymentReference ||
        "",

      provider:
        payment?.provider ||
        "paystack",

      activatedAt:
        payment?.activatedAt ||
        new Date().toISOString(),

      expiresAt:
        payment?.expiresAt ||
        new Date(
          Date.now() +
          365 *
          24 *
          60 *
          60 *
          1000
        ).toISOString()

    };


    setSubscription(premiumData);


    localStorage.setItem(
      "pbodySubscription",
      JSON.stringify(premiumData)
    );

  }, []);



  // ============================================================
  // REMOVE PREMIUM
  // ============================================================

  const removePremium = useCallback(() => {

    setSubscription(null);

    localStorage.removeItem(
      "pbodySubscription"
    );

  }, []);



  // ============================================================
  // PREMIUM STATUS
  // ============================================================

  const isPremium =
    subscription?.status === "premium" &&
    subscription?.expiresAt &&
    new Date(subscription.expiresAt) > new Date();



  // ============================================================
  // TRIAL STATUS
  // ============================================================

  const isTrialActive =
    subscription?.status === "trial" &&
    subscription?.trialEnd &&
    new Date(subscription.trialEnd) > new Date();



  // ============================================================
  // CONTEXT
  // ============================================================

  return (

    <SubscriptionContext.Provider
      value={{
        subscription,
        loading,
        isPremium,
        isTrialActive,
        activatePremium,
        removePremium
      }}
    >

      {children}

    </SubscriptionContext.Provider>

  );

}



export function useSubscription() {

  return useContext(
    SubscriptionContext
  );

}