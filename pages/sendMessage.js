import React, { useState } from "react";

import Papa from "papaparse";

const allowedExtensions = ["csv"];

const textMessage = [{ id: 1 }];

function SendMessage() {
  const [error, setError] = useState("");
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [name, setName] = useState("Akil");
  const [fromdate, setFromDate] = useState("");
  const [todate, settoDate] = useState("");
  const [paidDate, setPaidDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [reason, setReason] = useState("");
  const [member, setMember] = useState("");
  const [serialID, setSerialID] = useState(0);
  const [packageType, setPackageType] = useState("");
  const [balance, setBalance] = useState(0);
  const [phoneNumber1, setPhoneNumber1] = useState(9940526809);
  const [phoneNumber2, setPhoneNumber2] = useState(9087676765);

  const messageTemplate = [
    {
      id: 1,
      templateName: "Pongal Holidays",
      templateString: `Hello. Greeting from RAW FITNESS! We are closed from ${fromdate} to ${todate} due to ${reason}. Happy Pongal to you all! இனிய பொங்கல் நல்வாழ்த்துக்கள். பொங்கல் இனிதே பொங்கட்டும் . Thank you!`,
    },
    {
      id: 2,
      templateName: "Gym Closed From",
      templateString: `Hello. Greetings from RAW FITNESS! We are closed from ${fromdate} to ${todate} due to ${reason}. We regret the inconvenience. Thank you!`,
    },
    {
      id: 3,
      templateName: "Gym Closed ON",
      templateString: `Hello Members. Greetings from RAW FITNESS! We are closed on ${fromdate} due to ${todate}. We regret your inconvenience. Thank you!`,
    },
    {
      id: 4,
      templateName: "Serial ID with expiry Date",
      templateString: `Hello ${member}. This is your serial ID:${serialID}. You have subscribed to ${packageType} on ${paidDate}. Your plan expires on ${expiryDate}. RAW FITNESS! Thank you!`,
    },
    {
      id: 5,
      templateName: "Serial ID Notice",
      templateString: `Hello ${member}. Thanks for being a part of Raw Fitness! Please note your serial ID:${serialID} for future reference. Also, note your expiry date:${expiryDate}. Thank you!`,
    },
    {
      id: 6,
      templateName: "Tamil New Year Holiday Info",
      templateString: `RAW FITNESS wishes you Happy Tamil New Year. We are closed on April 14,2022! Please follow us on instagram.com/raw_fitness_cbe.`,
    },
    {
      id: 7,
      templateName: "Collect Balance Fees",
      templateString: `Hello ${member}! Your payment of Rs.${balance}/- has been received. Thanks, RAW FITNESS,${todate}. `,
    },
    {
      id: 8,
      templateName: "New Enquiry 1",
      templateString: `Hello ${member}, Thanks for visiting RAW FITNESS. Please call at ${phoneNumber1} or ${phoneNumber2}.`,
    },
    {
      id: 9,
      templateName: "Expiration Reminder 1",
      templateString: `Hello ${member}, your package ${packageType} is expiring on ${expiryDate}. Please renew soon.`,
    },
    {
      id: 10,
      templateName: "birthday wishes",
      templateString: `Wishing you a Very Happy Birthday ${member}..Warm Wishes from RAW FITNESS. GET FIT! STAY FIT!`,
    },
    {
      id: 11,
      templateName: "pending payment",
      templateString: `Hello ${member}, your package ${packageType} has been pending Rs ${balance}/- Please pay it soon! Thank you`,
    },
    {
      id: 12,
      templateName: "add new fees",
      templateString: `Hello ${member}! Your payment of Rs.${balance} has been received. Your membership expires on ${expiryDate}. Thanks, RAW FITNESS`,
    },
    {
      id: 13,
      templateName: "renew it",
      templateString: `Hello ${member}, your package expired on ${expiryDate}.Please renew to avail continous service, RAW FITNESS.`,
    },
  ];

  const handleSendMessageClick = () => {
    var requestOptions = {
      method: "GET",
       mode: 'no-cors',
      redirect: "follow",
    };

    const options = {
      uri: `http://retailsms.nettyfish.com/api/mt/SendSMS?`,
      user: "AKILGYM",
      password: "password",
      senderID: "RAWCBE",
      channel: "Trans",
      route: 4,
      DCS: 0,
      flashSMS: 0,
      number: 919940526809,
      text: `Hello ${name}, Thanks for visiting RAW FITNESS. Please call at ${phoneNumber1} or ${phoneNumber2}. Follow us at instagram.com/raw_fitness_cbe Get Fit! Stay Fit!`,
    };

    fetch(
      `${options.uri}user=${options.user}&password=${options.password}&senderid=${options.senderID}&channel=${options.channel}&route=${options.route}&DCS=${options.DCS}&flashsms=${options.flashSMS}&number=${options.number}&text=${options.text}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => console.log("error happened", error));
  };
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

  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      console.log(parsedData);
      const columns = Object.values(parsedData[0]);
      setData(columns);
    };
    reader.readAsText(file);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 align-middle">
        <input
          onChange={handleFileChange}
          id="csvInput"
          name="file"
          type="File"
          accept=".csv"
        />
        <button className="btn-main" onClick={handleParse}>
          Parse
        </button>
      </div>
      <div style={{ marginTop: "3rem" }}>
        {error ? error : data.map((col, idx) => <div key={idx}>{col}</div>)}
      </div>
      <label>Template to send</label>
      <select
        name="smsMessageTemplate"
        id="smsMessageTemplate"
        className="p-4 outline-orange-500 outline-4 w-40 m-4"
      >
        {messageTemplate.map((message) => (
          <option key={message.id} value={message.templateName}>
            {message.templateString}
          </option>
        ))}
      </select>
      <form
        action=""
        className="flex flex-col items-center jusity-center space-y-6"
      >
        <div className="content-place-center">
          <label htmlFor="" className="mr-4 text-xl font-bold text-orange-500">
            From Date
          </label>
          <input
            type="date"
            placeholder="Type the from Date here"
            className="p-4 outline-orange-500 border-2 border-orange-500 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="" className="mr-4 text-xl font-bold text-orange-500">
            To Date
          </label>
          <input
            type="date"
            placeholder="Type the to Date here"
            className="p-4 outline-orange-500 border-2 border-orange-500 rounded-lg"
          />
        </div>
        <input
          type="text"
          placeholder="Type the reason here"
          className="p-4 outline-orange-500 border-2 border-orange-500 rounded-lg"
        />
      </form>
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl text-orange-500 font-extrabold">
          Hit the button to send the sms
        </h1>
        <button onClick={handleSendMessageClick} className="btn-main">
          Send message
        </button>
      </div>
    </>
  );
}

export default SendMessage;
