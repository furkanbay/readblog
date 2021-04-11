import { useState } from "react";
import Title from "./Title";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [newsletterForm, setNewsletterForm] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    setNewsletterForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("data", JSON.stringify(newFormValue));

    // fetch("https://hooks.zapier.com/hooks/catch/9649477/ojn41o3/", {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => console.log(res));
    // setSubmitted(true);
    // setTimeout(function () {
    //   router.push("/thank-you");
    // }, 1000);
  };

  return (
    <div className="bg-white p-4 mb-12 rb-newsletter">
      <div className="bg-white p-4">
        <Title title="Newsletter" />
        <form onSubmit={handleSubmit} className="">
          <input
            className="my-4 block px-4 py-2 bg-white border border-gray-500 focus:border-green-500 hover:border-green-300"
            type="text"
            name="name"
            value={newsletterForm.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            className="my-4 block px-4 py-2 bg-white border border-gray-500 focus:border-green-500 hover:border-green-300"
            type="email"
            name="email"
            value={newsletterForm.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <button
            id="submit btn"
            className="uppercase bg-green-500 border border-green-500 text-white hover:bg-white hover:text-green-500 cursor-pointer inline-block px-4 py-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
