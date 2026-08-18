import { useState } from "react";


import "../styles/settings.css";


export default function Settings(){


const [settings,setSettings]=useState({

notifications:true,

emailUpdates:true,

darkMode:true,

publicProfile:true

});



const toggle=(item)=>{


setSettings({

...settings,

[item]:!settings[item]

});


};



return(


<div className="settingsPage">



<section className="settingsHero">


<h1>

⚙️ Account Settings

</h1>


<p>

Manage your PBody FullStack Academy experience, learning preferences and account security.

</p>


</section>







<div className="settingsGrid">





<div className="settingsCard">


<h2>

👤 Account

</h2>


<div className="settingItem">


<div>

<h3>

Student Profile

</h3>

<p>

Manage your name, picture, bio and professional information.

</p>

</div>


<a href="/profile">

Edit Profile

</a>


</div>




<div className="settingItem">


<div>

<h3>

Certificate Name

</h3>


<p>

Your certificate will use your profile name.

</p>


</div>


<button>

Update

</button>


</div>



</div>








<div className="settingsCard">


<h2>

🔔 Notifications

</h2>



<div className="switchItem">


<span>

Learning reminders

</span>



<button

onClick={()=>toggle("notifications")}

className={settings.notifications?"activeSwitch":""}

>


{

settings.notifications

?

"ON"

:

"OFF"

}


</button>



</div>





<div className="switchItem">


<span>

Email updates

</span>



<button

onClick={()=>toggle("emailUpdates")}

className={settings.emailUpdates?"activeSwitch":""}

>


{

settings.emailUpdates

?

"ON"

:

"OFF"

}


</button>


</div>



</div>









<div className="settingsCard">


<h2>

🎨 Appearance

</h2>



<div className="switchItem">


<span>

Dark Academy Theme

</span>



<button

onClick={()=>toggle("darkMode")}

className={settings.darkMode?"activeSwitch":""}

>


{

settings.darkMode

?

"ON"

:

"OFF"

}


</button>



</div>



</div>









<div className="settingsCard">


<h2>

🔒 Security

</h2>



<div className="securityButtons">


<button>

Change Password

</button>


<button>

Logout Other Devices

</button>


<button className="danger">

Delete Account

</button>


</div>



</div>









<div className="settingsCard">


<h2>

🌎 Privacy

</h2>



<div className="switchItem">


<span>

Public Engineering Profile

</span>



<button

onClick={()=>toggle("publicProfile")}

className={settings.publicProfile?"activeSwitch":""}

>


{

settings.publicProfile

?

"ON"

:

"OFF"

}


</button>



</div>



</div>





</div>



</div>


);


}