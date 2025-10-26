import React from "react";
import { ConsentBox } from "./_components/Consentbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Zap,
  Users,
  Mail,
  Send,
  AtSign,
  Inbox,
  Stamp,
  Code,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Email Accents */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <Mail
          className="absolute top-20 left-10 h-8 w-8 text-blue-200 opacity-30 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <Send
          className="absolute top-40 right-20 h-6 w-6 text-purple-200 opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <AtSign
          className="absolute bottom-40 left-20 h-7 w-7 text-blue-300 opacity-25 animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <Inbox
          className="absolute bottom-20 right-10 h-9 w-9 text-purple-200 opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <Stamp
          className="absolute top-60 left-1/4 h-5 w-5 text-blue-400 opacity-30 rotate-12 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        />
        <Mail
          className="absolute top-10 right-1/3 h-6 w-6 text-purple-300 opacity-35 animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <Send
          className="absolute bottom-60 left-1/2 h-8 w-8 text-blue-200 opacity-25 animate-bounce"
          style={{ animationDelay: "0.8s" }}
        />
        <AtSign
          className="absolute top-80 right-10 h-5 w-5 text-purple-400 opacity-30 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
        <Inbox
          className="absolute bottom-10 left-1/3 h-7 w-7 text-blue-300 opacity-20 animate-bounce"
          style={{ animationDelay: "1.2s" }}
        />
        <Stamp
          className="absolute top-30 right-1/4 h-6 w-6 text-purple-200 opacity-40 rotate-45 animate-pulse"
          style={{ animationDelay: "0.3s" }}
        />
        <Mail
          className="absolute bottom-30 right-1/2 h-9 w-9 text-blue-400 opacity-30 animate-bounce"
          style={{ animationDelay: "4s" }}
        />
        <Send
          className="absolute top-50 left-5 h-7 w-7 text-purple-300 opacity-25 animate-pulse"
          style={{ animationDelay: "1.8s" }}
        />
        <AtSign
          className="absolute bottom-50 right-5 h-8 w-8 text-blue-200 opacity-35 animate-bounce"
          style={{ animationDelay: "2.2s" }}
        />
        <Inbox
          className="absolute top-70 right-1/3 h-5 w-5 text-purple-400 opacity-30 animate-pulse"
          style={{ animationDelay: "0.7s" }}
        />
        <Stamp
          className="absolute bottom-70 left-1/4 h-6 w-6 text-blue-300 opacity-20 rotate-30 animate-bounce"
          style={{ animationDelay: "3.5s" }}
        />
      </div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6 mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 fugaz-one-regular">
              Goed. waitlist
            </h1>
            {/* Decorative Stamp */}
            <div className="absolute -top-2 -right-15 sm:-right-16 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12 shadow-lg border-2 border-blue-600">
              COMING SOON
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"></div>
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32">
              <Image
                src="/Logo-text.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 alan-sans-400 relative">
            Join the waitlist to help us build the future of email!
            <AtSign className="absolute -left-8 top-1 h-4 w-4 text-blue-400 opacity-60" />
          </p>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl w-full max-w-2xl mx-auto p-4 sm:p-8 relative">
            {/* Paper-like texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent rounded-2xl pointer-events-none"></div>
            {/* Corner fold effect */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-gray-100"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold fugaz-one-regular text-gray-800">
                  Let's get to know you.
                </h2>
              </div>
              <form
                className="space-y-4 text-left alan-sans-400"
                method="POST"
                action={"/api/send-verification"}
              >
                <p>
                  I am{" "}
                  <InlineInput name="fullname" placeholder="Your name..." /> and
                  I am a{" "}
                  <InlineInput
                    name="job_description"
                    placeholder="Your job description..."
                  />{" "}
                  and I am currently using{" "}
                  <InlineInput
                    name="current_email_provider"
                    placeholder="Your current email provider..."
                  />
                  .
                </p>
                <p>
                  At release I would like to reserve the email{" "}
                  <InlineInput
                    name="reserved_prefix"
                    placeholder="Your prefix..."
                  />
                  @
                  <span className="text-blue-500 font-semibold bg-blue-50 px-1 rounded">
                    goed.email
                  </span>{" "}
                  and my current e-mail is{" "}
                  <InlineInput
                    type="email"
                    name="current_email"
                    placeholder="test@example.com"
                  />
                  .
                </p>
                <ConsentBox />
              </form>
            </div>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 max-w-2xl mx-auto relative">
          {/* Paper-like texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent rounded-2xl pointer-events-none"></div>
          {/* Corner fold effect */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-6 border-l-transparent border-t-6 border-t-gray-100"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 fugaz-one-regular">
                Why <span className="text-blue-500 font-bold">Goed</span>?
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"></div>
            </div>
            <Tabs defaultValue="users" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="users">For Users</TabsTrigger>
                <TabsTrigger value="developers">For Developers</TabsTrigger>
              </TabsList>
              <TabsContent value="users" className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="about">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-500" />
                        <span className="alan-sans-400">What is Goed?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="alan-sans-400">
                      Goed is the future of email, designed to be fast, private
                      and user-friendly. We focus on delivering a seamless
                      experience with top-notch security features to ensure your
                      communications are private and enjoyable.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="features">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-blue-500" />
                        <span className="alan-sans-400">Key Features</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="alan-sans-400">
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          Fast and intuitive interface for effortless email
                          management.
                        </li>
                        <li>
                          Robust privacy features ensuring your emails are
                          secure and confidential.
                        </li>
                        <li>
                          Custom domains and email aliases for personalized
                          communication.
                        </li>
                        <li>
                          Seamless integration with popular tools and services.
                        </li>
                        <li>
                          AI-powered email organization and smart replies to
                          boost productivity.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="privacy">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-blue-500" />
                        <span className="alan-sans-400">
                          Privacy & Security
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="alan-sans-400">
                      Your privacy is our priority. We never read your emails or
                      sell your data. All communications are encrypted, and we
                      use industry-leading security measures to protect your
                      information. We fully encrypt your emails, and you own the
                      encryption keys. It's{" "}
                      <strong>cryptographically impossible</strong> for us to
                      read your data.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="community">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span className="alan-sans-400">
                          Join Our Community
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="alan-sans-400">
                      Be part of the early adopters shaping the future of email.
                      Join our waitlist to get exclusive updates, beta access,
                      and influence the development of Goed.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="developers" className="mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-5 w-5 text-blue-500" />
                  <span className="text-lg font-semibold alan-sans-400">
                    Our Tech Stack
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 alan-sans-400">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Frontend
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Laravel</li>
                      <li>Blade</li>
                      <li>Tailwind CSS</li>
                      <li>shadcn/ui</li>
                      <li>Lucide Icons</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">
                      Backend
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Laravel</li>
                      <li>Blade</li>
                      <li>Redis</li>
                      <li>MariaDB</li>
                      <li>Our backend is fully self-hosted</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">
                      Tools & Deployment
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>BunJS</li>
                      <li>Docker</li>
                      <li>Biome</li>
                      <li>PostgreSQL</li>
                      <li>Cerebras AI</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-700 mb-2">
                      Email Services
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Dovecot</li>
                      <li>Postfix</li>
                      <li>All hosted at Hetzner</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

function InlineInput(props: React.ComponentProps<"input">) {
  const { className, ...rest } = props;
  return (
    <input
      className={
        "w-full max-w-[15rem] inline outline-none border-b focus:border-blue-500 " +
        className
      }
      required
      {...rest}
    />
  );
}
