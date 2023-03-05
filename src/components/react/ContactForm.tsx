import axios from "axios";
import { useEffect, useState } from "react";
export const ContactForm = () => {
  const [validation, setValidation] = useState(false);

  // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  useEffect(() => {
    setValidation(
      inputs.email === "" || inputs.message === "" || inputs.subject === ""
    );
  }, [inputs]);
  // Server State Handling

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://formbold.com/s/3nQx5",
      data: inputs,
    })
      .then((r) => {
        setInputs({
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((r) => {
        console.log("Communication error");
      });
  };

  return (
    <>
      <h2 className="text-dark dark:text-light font-bold text-2xl" id="contactForm">Get in touch</h2>
      <form
        className="shadow-md dark:shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:text-light"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-4">
          <label className="block  mb-2">Your email:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleOnChange}
            value={inputs.email}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block  mb-2">Subject:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleOnChange}
            value={inputs.subject}
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>

        <div className="mb-4">
          <label className="block  mb-2">Message:</label>
          <textarea
            className="shadow appearance-none border rounded w-full h-28 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleOnChange}
            value={inputs.message}
            id="message"
            name="message"
            placeholder="Type your message"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="disabled:opacity-50 bg-dark-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={validation}
          >
            Send message
          </button>
        </div>
      </form>
    </>
  );
};
