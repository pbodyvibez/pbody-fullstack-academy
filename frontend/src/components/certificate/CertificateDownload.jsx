// ===============================================
// CERTIFICATE DOWNLOAD BUTTON
// ===============================================


import {
Download
} from "lucide-react";



export default function CertificateDownload(){



const downloadCertificate = ()=>{


window.print();


};



return(


<button

className="certificateDownload"

onClick={downloadCertificate}

>


<Download size={18}/>


Download Certificate


</button>


);


}