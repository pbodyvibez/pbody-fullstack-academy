import { createContext, useContext, useEffect, useState } from "react";


const SubscriptionContext = createContext();



export function SubscriptionProvider({children}){


const [subscription,setSubscription] = useState(()=>{


const saved = localStorage.getItem(
"pbodySubscription"
);


return saved
?
JSON.parse(saved)
:
null;


});





useEffect(()=>{


if(subscription){

localStorage.setItem(

"pbodySubscription",

JSON.stringify(subscription)

);

}


},[subscription]);









// ==============================
// ACTIVATE PREMIUM AFTER PAYMENT
// ==============================


const activatePremium = (payment)=>{


const premiumData = {


status:"premium",


plan: payment.plan || "PBody Pro Annual",


price: payment.price || payment.amount,


currency: payment.currency || "NGN",


paymentReference:
payment.reference || "",


activatedAt:Date.now(),


expiresAt:

Date.now() +

(
365 *

24 *

60 *

60 *

1000
)


};





localStorage.setItem(

"pbodySubscription",

JSON.stringify(premiumData)

);



setSubscription(premiumData);



};









// ==============================
// CANCEL / REMOVE PREMIUM
// ==============================


const removePremium = ()=>{


localStorage.removeItem(
"pbodySubscription"
);


setSubscription(null);


};









const isPremium =

subscription?.status === "premium"

&&

subscription?.expiresAt > Date.now();









const isTrialActive = false;









return(


<SubscriptionContext.Provider


value={{


subscription,


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








export function useSubscription(){


return useContext(
SubscriptionContext
);


}