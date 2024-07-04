import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const EmailForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const from = e.target;
    emailjs.send(
      'service_axycm1b', // Replace with your EmailJS service ID
      'template_qe0hf6r', // Replace with your EmailJS template ID
      formData,
      'M4N-gWe_YhrAyEcv5' // Replace with your EmailJS user ID i find the account section. but there is two api keys. a public key and a private key. now what key i should take
    )
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        toast.success('Email sent successfully!');
        setLoading(false);
        return from.reset();
      })
      .catch((error) => {
        toast.error('Something Wrong.Email not sent!');
        console.error('There was an error sending the email!', error);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="-mx-2 md:items-center md:flex">
        <div className="flex-1 px-2">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Enter You Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            type="text" placeholder="Enter Your Full Name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-red-200/50 dark:text-violet-500 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        {/* 
        <div className="flex-1 px-2 mt-4 md:mt-0">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
          <input type="text" placeholder="Last Name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-red-200/50 dark:text-violet-500 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div> */}
      </div>

      <div className="mt-4">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          type="email" placeholder="Type Your Email" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-red-200/50 dark:text-violet-500 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
      </div>

      <div className="w-full mt-4">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-red-200/50 dark:text-violet-500 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>

      </div>

      <button type='submit' className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-red-500/70 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        {loading ? <AiOutlineLoading3Quarters className='animate-spin w-full flex justify-center items-center' /> : 'Send Email'}
      </button>
    </form>
  );
};

export default EmailForm;
