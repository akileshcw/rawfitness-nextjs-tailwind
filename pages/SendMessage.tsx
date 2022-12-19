import React, {useState} from 'react'

import Papa from 'papaparse';


  
const allowedExtensions = ['csv']


function SendMessage() {
    const [error, setError] = useState("")
  const [file, setFile] = useState("")
  
    const handleSendMessageClick = async (e) => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        const options = {
          flashsms: 0,
          user: "AKILGYM",
          password: "password",
          senderId: "RAWCBE",
          text: "Hello Akil, Thanks for visiting RAW FITNESS. Please call at 9087676765 or 9940526809. Follow us at instagram.com/raw_fitness_cbe Get Fit! Stay Fit!",
        };
        const response = await fetch(
          `http://retailsms.nettyfish.com/api/mt/SendSMS?user=${options.user}&password=${options.password}&senderid=${options.senderId}&channel=Trans&route=4&DCS=0&flashsms=1&number=919940526809&text=${options.text}`,
          requestOptions
        )
            const result = await response.text()
  }
  
 const handleFileChange = (e) => {
   setError("");

   // Check if user has entered the file
   if (e.target.files.length) {
     const inputFile = e.target.files[0];

     // Check the file extensions, if it not
     // included in the allowed extensions
     // we show the error
     const fileExtension = inputFile?.type.split("/")[1];
     if (!allowedExtensions.includes(fileExtension)) {
       setError("Please input a csv file");
       return;
     }

     // If input type is correct set the state
     setFile(inputFile);
   }
 };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 align-middle">
        <h1 className="text-4xl text-orange-500 font-extrabold">
          Hit the button to send the sms
        </h1>
        <button
          onClick={handleSendMessageClick}
          className="btn-main">
          Send message
        </button>
        <input
          onChange={handleFileChange}
          id="csvInput"
          name="file"
                  type="File"
                  accept='.csv'
        />
      </div>
    </>
  );
}

export default SendMessage