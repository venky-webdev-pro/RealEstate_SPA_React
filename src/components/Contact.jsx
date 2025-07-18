import React from "react";
import { toast } from "react-toastify";
;

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "636d53f0-b21c-4d17-97d7-d28ba5397f9a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      // alert("Form Submitted Successfully");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      // alert(data.message)
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <div>
      <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Contact {" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
             With Us
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
          Ready to Make a Move? Let’s Build Your Future Together
        </p>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600" action="">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">
              Your Name
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">
              Your Email
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          {/* text area */}
          <div className="my-6 text-left">
            Message
            <textarea
              name="Message"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              placeholder="Message"
              required
              id=""
            ></textarea>
          </div>
          <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
           {result ? result : "Send Message"} 
           
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Contact;