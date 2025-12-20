import axios from "axios";
import { useEffect, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "email":
        if (!value.trim()) return "Email is required";
        if (!validateEmail(value)) return "Please enter a valid email address";
        return "";
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.trim().length < 3) return "Subject must be at least 3 characters";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        return "";
      default:
        return "";
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Validate on change if field has been touched
    if (touched[id]) {
      const error = validateField(id, value);
      setErrors((prev) => ({
        ...prev,
        [id]: error,
      }));
    }

    // Clear status when user starts typing again
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    
    setTouched((prev) => ({
      ...prev,
      [id]: true,
    }));

    const error = validateField(id, value);
    setErrors((prev) => ({
      ...prev,
      [id]: error,
    }));
  };

  const isFormValid = (): boolean => {
    return (
      inputs.email.trim() !== "" &&
      inputs.subject.trim() !== "" &&
      inputs.message.trim() !== "" &&
      validateEmail(inputs.email) &&
      inputs.subject.trim().length >= 3 &&
      inputs.message.trim().length >= 10 &&
      Object.values(errors).every((error) => error === "")
    );
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Mark all fields as touched
    setTouched({
      email: true,
      subject: true,
      message: true,
    });

    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(inputs).forEach((key) => {
      const error = validateField(key, inputs[key as keyof typeof inputs]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      await axios({
        method: "POST",
        url: "https://formbold.com/s/3nQx5",
        data: inputs,
      });

      setStatus("success");
      setInputs({
        email: "",
        subject: "",
        message: "",
      });
      setTouched({});
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      console.error("Form submission error:", error);
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <section className="contact-section my-16 sm:my-12" aria-labelledby="contact-heading">
      <h2 
        id="contact-heading"
        className="text-3xl sm:text-4xl font-bold text-dark dark:text-light mb-8 relative inline-block"
      >
        <span className="relative z-10">Get in Touch</span>
        <span className="absolute bottom-0 left-0 w-16 h-1 bg-dark-green dark:bg-light-green rounded-full"></span>
      </h2>

      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 sm:p-8 shadow-lg border border-dark-green/10 dark:border-light-green/20">
        <form
          className="space-y-6"
          onSubmit={handleOnSubmit}
          noValidate
          aria-label="Contact form"
        >
          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-semibold text-dark dark:text-light mb-2"
            >
              Your Email
              <span className="text-red-500 ml-1" aria-label="required">*</span>
            </label>
            <input
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 bg-red-50 dark:bg-red-900/10"
                  : "border-dark-green/20 dark:border-light-green/20 focus:border-dark-green dark:focus:border-light-green focus:ring-dark-green/20 dark:focus:ring-light-green/20 bg-light dark:bg-[#252525]"
              } text-dark dark:text-light placeholder:text-light-green/50 dark:placeholder:text-light-green/30`}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              value={inputs.email}
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email && (
              <p 
                id="email-error" 
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label 
              htmlFor="subject" 
              className="block text-sm font-semibold text-dark dark:text-light mb-2"
            >
              Subject
              <span className="text-red-500 ml-1" aria-label="required">*</span>
            </label>
            <input
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                errors.subject
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 bg-red-50 dark:bg-red-900/10"
                  : "border-dark-green/20 dark:border-light-green/20 focus:border-dark-green dark:focus:border-light-green focus:ring-dark-green/20 dark:focus:ring-light-green/20 bg-light dark:bg-[#252525]"
              } text-dark dark:text-light placeholder:text-light-green/50 dark:placeholder:text-light-green/30`}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              value={inputs.subject}
              id="subject"
              type="text"
              name="subject"
              placeholder="What's this about?"
              aria-invalid={errors.subject ? "true" : "false"}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              required
            />
            {errors.subject && (
              <p 
                id="subject-error" 
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-semibold text-dark dark:text-light mb-2"
            >
              Message
              <span className="text-red-500 ml-1" aria-label="required">*</span>
            </label>
            <textarea
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 resize-y min-h-[120px] ${
                errors.message
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 bg-red-50 dark:bg-red-900/10"
                  : "border-dark-green/20 dark:border-light-green/20 focus:border-dark-green dark:focus:border-light-green focus:ring-dark-green/20 dark:focus:ring-light-green/20 bg-light dark:bg-[#252525]"
              } text-dark dark:text-light placeholder:text-light-green/50 dark:placeholder:text-light-green/30`}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              value={inputs.message}
              id="message"
              name="message"
              placeholder="Tell me about your project or just say hello..."
              rows={5}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              required
            />
            {errors.message && (
              <p 
                id="message-error" 
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
                role="alert"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.message}
              </p>
            )}
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <div 
              className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border-2 border-green-500 text-green-700 dark:text-green-400 flex items-center gap-3"
              role="alert"
              aria-live="polite"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {status === "error" && (
            <div 
              className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border-2 border-red-500 text-red-700 dark:text-red-400 flex items-center gap-3"
              role="alert"
              aria-live="assertive"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Something went wrong. Please try again later.</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex items-center justify-end pt-2">
            <button
              className={`group relative inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green dark:focus:ring-light-green ${
                status === "submitting" || !isFormValid()
                  ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                  : "bg-dark-green dark:bg-light-green hover:bg-dark-green/90 dark:hover:bg-light-green/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              }`}
              type="submit"
              disabled={status === "submitting" || !isFormValid()}
              aria-busy={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
