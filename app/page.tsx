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
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-blue-200 flex flex-col font-alan items-center justify-center p-4 relative overflow-hidden">
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

      <div className="w-full xl:max-w-[50%] relative z-10">
        {/* Main Content */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6 mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black/70 font-heading">
              Join the <span className="text-primary font-bold">Goed.</span>{" "}
              Waitlist
            </h1>
            {/* Decorative Stamp */}
            <div className="absolute -top-2 -right-15 sm:-right-16 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12 shadow-lg border-2 border-primary-alt hidden xl:block">
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
          <p className="text-lg sm:text-xl text-gray-600 mb-8 relative">
            Join the waitlist to help us build the future of email!
          </p>
          <div className="bg-white grid grid-cols-1 xl:grid-cols-2 border rounded-md shadow-sm text-left">
            <div className="p-10">
              <h1 className="font-heading text-3xl text-left text-black/70">
                Experience Email the Way It Should Be.
              </h1>
              <p className="mt-[16px]">
                <span className="text-primary font-bold">Goed.</span> is the email client designed for you, where privacy, speed, and security come first. Your data is never sold, everything is private, fully encrypted, and our interface is built to be lightning fast. Join the waitlist today and be among the first to experience email done right.
              </p>
            </div>
            <div className="bg-zinc-100 p-10">
              <h1 className="font-heading text-3xl text-center text-black/70">
                Lets get to know you.
              </h1>
              <form
                className="space-y-4 text-left alan-sans-400 mt-4"
                method="POST"
                action={"/api/send-verification"}
              >
                <div>
                  <label>
                    Full name <span className=" text-primary">*</span>
                  </label>
                  <Input
                    name="fullname"
                    placeholder="Your name..."
                    className="bg-white"
                  />
                </div>
                <div>
                  <label>Job description</label>
                  <Input
                    name="job_description"
                    placeholder="Your job description..."
                    className="bg-white"
                  />
                </div>
                <div>
                  <label>
                    Your preffered email prefix{" "}
                    <span className=" text-primary">*</span>
                  </label>
                  <Input
                    name="reserved_prefix"
                    placeholder="Your prefix..."
                    className="bg-white"
                  />
                </div>
                <div>
                  <label>
                    Current e-mail <span className=" text-primary">*</span>
                  </label>
                  <Input
                    name="current_email"
                    type="email"
                    placeholder="Your current email address..."
                    className="bg-white"
                  />
                </div>
                <ConsentBox />
              </form>
            </div>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="p-4 sm:p-8 mx-auto relative bg-white border rounded-md shadow-sm text-left min-w-[50%]">
          {/* Paper-like texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent rounded-2xl pointer-events-none"></div>
          {/* Corner fold effect */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-6 border-l-transparent border-t-6 border-t-gray-100"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black/70 fugaz-one-regular font-heading">
                Why <span className="text-primary font-bold">Goed</span>?
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
                        <Mail className="h-5 w-5 text-primary" />
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
                        <Zap className="h-5 w-5 text-primary" />
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
                        <Shield className="h-5 w-5 text-primary" />
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
                        <Users className="h-5 w-5 text-primary" />
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
                  <Code className="h-5 w-5 text-primary" />
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
                      <li>Custom UI library</li>
                      <li>Tabler Icons</li>
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
