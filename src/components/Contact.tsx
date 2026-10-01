import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageSquare,
} from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="tone-b py-24 t-section">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border t-border-tint t-tint px-3 py-1 text-xs font-semibold t-accent">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold t-heading tracking-tight">
            LET&apos;S BUILD SOMETHING TOGETHER
          </h2>

          <div className="space-y-1 text-base sm:text-xl t-text font-light pt-2">
            <p>Have an idea for an app or website?</p>
            <p>Want to improve something you already have?</p>

            <p className="font-bold t-accent text-lg sm:text-2xl pt-2">
              Let&apos;s talk about it.
            </p>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="rounded-3xl border t-divider p-8 sm:p-10 shadow-xl space-y-8 t-card">

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Email */}
            <a
              href="mailto:shahdmohamedfarouk1112@gmail.com"
              id="contact-email-card"
              className="flex flex-col items-center text-center p-6 rounded-2xl t-tile border t-divider t-hover-border t-hover-tile transition-all group shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl t-tint t-accent group-hover:scale-110 transition-transform mb-3">
                <Mail className="h-6 w-6" />
              </div>

              <span className="text-xs font-mono uppercase t-accent mb-1">
                Email
              </span>

              <span className="text-sm font-semibold t-heading break-all t-hover-accent transition-colors">
                shahdmohamedfarouk1112@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:01287466646"
              id="contact-phone-card"
              className="flex flex-col items-center text-center p-6 rounded-2xl t-tile border t-divider t-hover-border t-hover-tile transition-all group shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl t-tint t-accent group-hover:scale-110 transition-transform mb-3">
                <Phone className="h-6 w-6" />
              </div>

              <span className="text-xs font-mono uppercase t-accent mb-1">
                Phone / WhatsApp
              </span>

              <span className="text-sm font-semibold t-heading">
                01287466646
              </span>
            </a>

            {/* Location */}
            <div
              id="contact-location-card"
              className="flex flex-col items-center text-center p-6 rounded-2xl t-tile border t-divider shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl t-tint t-accent mb-3">
                <MapPin className="h-6 w-6" />
              </div>

              <span className="text-xs font-mono uppercase t-accent mb-1">
                Location
              </span>

              <span className="text-sm font-semibold t-heading">
                Alexandria, Egypt
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t t-divider">
            <div className="flex flex-wrap items-center justify-center gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/ShahdmohamedFarouk11"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-btn"
                className="inline-flex items-center gap-2 rounded-xl border t-divider t-tile px-6 py-3.5 text-sm font-bold t-text t-hover-tile t-hover-accent t-hover-border transition-all shadow-md"
              >
                <Github className="h-4 w-4 t-accent" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shahd-farouk-b869b435a"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-btn"
                className="inline-flex items-center gap-2 rounded-xl border t-divider t-tile px-6 py-3.5 text-sm font-bold t-text t-hover-tile t-hover-accent t-hover-border transition-all shadow-md"
              >
                <Linkedin className="h-4 w-4 t-accent" />
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href="mailto:shahdmohamedfarouk1112@gmail.com"
                id="contact-email-btn"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold shadow-lg shadow-emerald-950/50 hover:scale-[1.02] transition-all t-btn"
              >
                <Mail className="h-4 w-4 fill-current" />
                <span>Email Me</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};