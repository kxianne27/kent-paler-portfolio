import { profile } from "@/data/profile";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle
          eyebrow="Get in Touch"
          title="Let's Build Something Together"
        />

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I&apos;m open to discussing enterprise information systems, digital
          transformation projects, software engineering opportunities, and
          technical collaborations. Whether you have a project in mind or just
          want to connect, feel free to reach out.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Mail className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Email</h3>
                <p className="mt-1 text-slate-600">
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {profile.email}
                  </a>
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Best for project inquiries and collaboration
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <MapPin className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Location</h3>
                <p className="mt-1 text-slate-600">{profile.location}</p>
                <p className="mt-1 text-sm text-slate-500">
                  Available for remote work worldwide
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Clock className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Availability</h3>
                <p className="mt-1 text-slate-600">
                  Monday – Friday, 9:00 AM – 6:00 PM (PHT)
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Flexible for urgent project discussions
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
            <p className="mt-2 text-slate-600">
              Fill out the form and I&apos;ll get back to you within 1-2 business
              days.
            </p>

            <form
              className="mt-8 space-y-6"
              action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT}
              method="POST"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="project-inquiry">
                    Project Inquiry
                  </option>
                  <option value="collaboration">
                    Collaboration / Partnership
                  </option>
                  <option value="job-opportunity">
                    Job Opportunity
                  </option>
                  <option value="technical-consulting">
                    Technical Consulting
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
                  placeholder="Describe your project, requirements, or how I can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2"
              >
                Send Message
              </button>

              <p className="text-center text-xs text-slate-500">
                By submitting this form, you agree to the processing of your
                data in accordance with our privacy practices.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}