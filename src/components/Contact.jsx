import { useState } from "react";
import {
  LinkedinIcon,
  GithubIcon,
  DiscordIcon,
  MailIcon,
  ArrowUpRight,
  SendIcon,
  CopyIcon,
  CheckIcon,
  MapPinIcon,
} from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "mahidul.badhon28@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Direct mailto dispatch to mahidul.badhon28@gmail.com
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactChannels = [
    {
      id: "linkedin",
      name: "LinkedIn",
      label: "Professional Network",
      value: "linkedin.com/in/md-mahidul-islam-badhon",
      href: "https://www.linkedin.com/in/md-mahidul-islam-badhon/",
      icon: LinkedinIcon,
      actionText: "Connect",
    },
    {
      id: "github",
      name: "GitHub",
      label: "Repositories & Code",
      value: "github.com/Mahidul-Badhon",
      href: "https://github.com/Mahidul-Badhon",
      icon: GithubIcon,
      actionText: "Follow",
    },
    {
      id: "discord",
      name: "Discord",
      label: "Community & Direct Chat",
      value: "mahidul_badhon",
      href: "https://discord.com",
      icon: DiscordIcon,
      actionText: "Message",
    },
    {
      id: "gmail",
      name: "Gmail",
      label: "Direct Email Address",
      value: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: MailIcon,
      actionText: "Send Mail",
      isEmail: true,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-[#D8D8D5] bg-[#F3F3F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#D8D8D5] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-2">
              [ 05 // INQUIRIES ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#202020]">
              GET IN TOUCH
            </h2>
          </div>
          <p className="text-sm font-mono text-[#777777] max-w-md">
            Available for internships, junior full-stack engineering roles, and AI research collaborations.
          </p>
        </div>

        {/* 4 Social / Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className="border border-[#D8D8D5] p-6 bg-[#F3F3F1] hover:bg-[#EAEAE7] transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D8D8D5]">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#777777]">
                      {channel.name}
                    </span>
                    <Icon className="w-5 h-5 text-[#202020]" />
                  </div>
                  <h3 className="font-bold text-base text-[#202020] mb-1">
                    {channel.label}
                  </h3>
                  <p className="text-xs font-mono text-[#777777] truncate mb-6">
                    {channel.value}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D8D8D5]/60 flex items-center justify-between">
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#202020] hover:text-[#777777] transition-colors"
                  >
                    <span>{channel.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {channel.isEmail && (
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 text-[#777777] hover:text-[#202020] hover:bg-[#D8D8D5] transition-colors cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <CheckIcon className="w-4 h-4 text-[#202020]" />
                      ) : (
                        <CopyIcon className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form & Dispatch Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Context & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#202020] bg-[#EAEAE7] p-6 sm:p-8 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block pb-3 border-b border-[#D8D8D5]">
                Direct Communication
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-[#202020] tracking-tight">
                Looking for a dedicated developer or curious researcher?
              </h3>

              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                Whether you have an internship position, an ambitious web product idea, or want to discuss machine learning applications, my inbox is open.
              </p>

              <div className="pt-4 border-t border-[#D8D8D5] space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-[#777777]">Base Location:</span>
                  <span className="text-[#202020] font-semibold flex items-center gap-1">
                    <MapPinIcon className="w-3.5 h-3.5" />
                    <span>Dhaka, Bangladesh</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#777777]">Timezone:</span>
                  <span className="text-[#202020] font-semibold">UTC+06:00 (BST)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#777777]">Response Time:</span>
                  <span className="text-[#202020] font-semibold">&lt; 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Copy Notification Toast if triggered */}
            {copied && (
              <div className="p-3 bg-[#202020] text-[#F3F3F1] text-xs font-mono flex items-center gap-2 border border-[#202020]">
                <CheckIcon className="w-4 h-4" />
                <span>Email address copied to clipboard!</span>
              </div>
            )}
          </div>

          {/* Right Column: Message Dispatch Form */}
          <div className="lg:col-span-7 border border-[#D8D8D5] bg-[#F3F3F1] p-6 sm:p-8 lg:p-10">
            <div className="pb-4 mb-6 border-b border-[#D8D8D5] flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                Dispatch Form
              </span>
              <span className="text-xs font-mono text-[#777777]">
                TO: {emailAddress}
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3 bg-[#EAEAE7] border border-[#202020] p-6">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#202020] text-[#F3F3F1] flex items-center justify-center">
                  <CheckIcon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#202020]">
                  Email Client Opened
                </h4>
                <p className="text-xs sm:text-sm text-[#777777] max-w-sm mx-auto">
                  Your mail client has been opened with your prefilled message to <span className="text-[#202020] font-semibold">{emailAddress}</span>. Click send in your mail app to complete delivery.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#777777]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#EAEAE7]/50 border border-[#D8D8D5] text-[#202020] text-sm focus:outline-none focus:border-[#202020] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#777777]">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#EAEAE7]/50 border border-[#D8D8D5] text-[#202020] text-sm focus:outline-none focus:border-[#202020] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#777777]">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Internship / Collaboration / General Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAEAE7]/50 border border-[#D8D8D5] text-[#202020] text-sm focus:outline-none focus:border-[#202020] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#777777]">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#EAEAE7]/50 border border-[#D8D8D5] text-[#202020] text-sm focus:outline-none focus:border-[#202020] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#202020] text-[#F3F3F1] font-mono text-xs uppercase tracking-wider hover:bg-[#383838] transition-colors cursor-pointer border border-[#202020]"
                >
                  <SendIcon className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
