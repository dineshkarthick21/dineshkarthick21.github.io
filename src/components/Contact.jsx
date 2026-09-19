import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get('firstName') || '').trim();
    const lastName = String(formData.get('lastName') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const permission = formData.get('permission') === 'on';

    if (!firstName) {
      setPopup({
        type: 'warning',
        title: 'First Name Required',
        message: 'Please enter your first name.',
      });
      return;
    }

    if (!lastName) {
      setPopup({
        type: 'warning',
        title: 'Last Name Required',
        message: 'Please enter your last name.',
      });
      return;
    }

    if (!email) {
      setPopup({
        type: 'warning',
        title: 'Email Required',
        message: 'Please enter your email address.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPopup({
        type: 'warning',
        title: 'Invalid Email',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    if (!message) {
      setPopup({
        type: 'warning',
        title: 'Message Required',
        message: 'Please enter your message.',
      });
      return;
    }

    if (!permission) {
      setPopup({
        type: 'warning',
        title: 'Permission Required',
        message: 'Please allow contact permission before sending the form.',
      });
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://dineshkarthick21-vercel-io.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || (data && data.success === false)) {
        throw new Error((data && data.message) || 'Failed to send message');
      }

      setPopup({
        type: 'success',
        title: 'Thank you for contacting me 😊',
        message: 'Your message has been sent successfully. A confirmation email has also been sent to you.',
      });
      form.reset();
    } catch (error) {
      console.error('Contact submission error:', error);
      setPopup({
        type: 'error',
        title: 'Sending Failed',
        message: 'Sorry, your message could not be sent. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Reach Us
          </div>

          <form className="flex flex-col gap-12 md:gap-16 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    placeholder="First Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    placeholder="Last Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Email" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Type your message here" 
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  name="permission"
                  value="on"
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                <p className="leading-relaxed max-w-[400px]">
                  This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <p className="max-w-[250px] leading-relaxed">
                    For information on how to unsubscribe, please review our <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
                  </p>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 group whitespace-nowrap self-start sm:self-auto ${
                      isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-white hover:text-[#ff2a2a]'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                    {!isSubmitting && (
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>

      {/* Custom In-Page Modal */}
      <AnimatePresence>
        {popup && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setPopup(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-3xl p-8 shadow-2xl text-center flex flex-col items-center overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff2a2a] via-[#ff5252] to-[#ff2a2a]" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setPopup(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10 cursor-pointer"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Icon / Emoji */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 text-3xl shadow-lg ${
                popup.type === 'success' 
                  ? 'bg-[#ff2a2a]/15 border border-[#ff2a2a]/40 shadow-[#ff2a2a]/20' 
                  : popup.type === 'error'
                  ? 'bg-red-500/15 border border-red-500/40 shadow-red-500/20'
                  : 'bg-amber-500/15 border border-amber-500/40 shadow-amber-500/20'
              }`}>
                {popup.type === 'success' ? '😊' : popup.type === 'error' ? '⚠️' : 'ℹ️'}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2.5 tracking-tight">
                {popup.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6 max-w-xs">
                {popup.message}
              </p>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => setPopup(null)}
                className="w-full py-3.5 px-6 rounded-full bg-[#ff2a2a] hover:bg-[#e02424] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#ff2a2a]/30 hover:shadow-[#ff2a2a]/50 cursor-pointer active:scale-98"
              >
                OK
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
