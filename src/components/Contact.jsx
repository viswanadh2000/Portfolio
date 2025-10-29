import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const AUTO_REPLY_TEMPLATE = {
  subject: 'Thanks for reaching out!',
  message: `Hi {{name}},

Thank you for your message. I'll get back to you within 24 hours.

Best regards,
Viswanadh Kakani`
};

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus(null);
    
    try {
      // Send the original message
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      );

      // Send auto-reply
      const formData = new FormData(form.current);
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_AUTO_REPLY_TEMPLATE_ID',
        {
          to_email: formData.get('email'),
          to_name: formData.get('name'),
          message: AUTO_REPLY_TEMPLATE.message.replace('{{name}}', formData.get('name'))
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <div className="section">
      <div className="card p-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-zinc-300 mb-6">Feel free to reach out for opportunities, collaborations, or questions.</p>
        {status === 'success' && (
          <div className="mb-4 px-4 py-2 rounded bg-emerald-600 text-white text-sm">Message sent successfully!</div>
        )}
        {status === 'error' && (
          <div className="mb-4 px-4 py-2 rounded bg-red-600 text-white text-sm">Failed to send message. Please try again.</div>
        )}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-zinc-400 mb-1">Name</label>
            <input type="text" name="name" id="name" required className="w-full px-4 py-2 rounded bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-zinc-400 mb-1">Email</label>
            <input type="email" name="email" id="email" required className="w-full px-4 py-2 rounded bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-zinc-400 mb-1">Message</label>
            <textarea name="message" id="message" required rows={4} className="w-full px-4 py-2 rounded bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-emerald-500" />
          </div>
          <button type="submit" className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition text-white font-semibold">Send Message</button>
        </form>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="mailto:viswanadhkakani27@gmail.com" className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition">Email</a>
          <a href="https://www.linkedin.com/in/viswanadh_kakani" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500">LinkedIn</a>
          <a href="https://github.com/viswanadh2000" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500">GitHub</a>
        </div>
      </div>
    </div>
  )
}
