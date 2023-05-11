import { useState } from "react";

const emailRegex = /^[a-zA-Z\d\.-]+@gmail\.com$/;

interface dataProps {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [message, setMessage] = useState("");
  const [messageTouched, setMessageTouched] = useState(false);

  let hasNameError = nameTouched && name.trim().length < 2;
  let hasEmailError = emailTouched && !emailRegex.test(email);
  let hasMessageError = messageTouched && message.trim() === "";

  let hasNameSuccess = nameTouched && name.trim().length > 1;
  let hasEmailSeccess = emailTouched && emailRegex.test(email);
  let hasMessageSuccess = messageTouched && message.trim() !== "";

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);
    setMessageTouched(true);

    let formIsValid =
      name.trim().length > 1 && emailRegex.test(email) && message.trim() !== "";

    const data: dataProps = {
      name,
      email,
      message,
    };

    if (formIsValid) {
      fetch(
        "https://contacts-from-portfolio-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      setName("");
      setEmail("");
      setMessage("");

      // set false
      setNameTouched(false);
      setEmailTouched(false);
      setMessageTouched(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[150px]">
      <form
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={submitHandler}
        autoComplete="off">
        <div className="pb-8">
          <div className="flex items-center">
            <div className="text-[#64ffda] text-3xl">05.</div>
            <div className="text-[#ccd6f6] text-4xl ml-3">Contact</div>
          </div>
          <p className="text-gray-300 py-4 text-xl mt-2">
            // Submit the form below
          </p>
        </div>
        <input
          className={`bg-[#ccd6f6] p-2 outline-none ${
            hasNameError ? "invalidInput" : hasNameSuccess ? "successInput" : ""
          }`}
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={`my-4 p-2 bg-[#ccd6f6] ${
            hasEmailError
              ? "invalidInput"
              : hasEmailSeccess
              ? "successInput"
              : ""
          }`}
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className={`bg-[#ccd6f6] p-2 ${
            hasMessageError
              ? "invalidInput"
              : hasMessageSuccess
              ? "successInput"
              : ""
          }`}
          name="message"
          rows={10}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
        <button
          type="submit"
          className=" border-2 bg-transparent border-[#64ffda] text-[#64ffda] rounded tracking-wider px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
