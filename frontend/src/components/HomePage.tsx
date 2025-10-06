'use client';
import { Box, Search, Settings, } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ArrowRight, Shield, Cloud, Brain, Lock, FileText, UserCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Footer from './Footer';


export default function HomePage() {

  return (
    <div className="min-h-screen relative">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24 max-w-6xl mx-auto">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -ml-24 h-96 w-96 rounded-full bg-purple-400/20 opacity-50 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-400/20 opacity-50 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center rounded-full bg-blue-500/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-300 mb-6 w-fit border border-blue-400/30">
                <Sparkles className="mr-2 h-4 w-4" />
                AI-Powered Healthcare Management
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your Health Records,
                <span className="text-blue-400"> Secured & Smart</span>
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-gray-300">
                CareSafe revolutionizes healthcare record management with cloud-based storage, 
                AI-powered insights, and seamless collaboration between patients and doctors. 
                Experience the future of medical data management.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/signin"
                  className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                
                
              </div>

              
            </div>

            {/* Right Visual */}
            <div className="relative lg:ml-auto">
              <div className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 shadow-2xl">
                <div className="space-y-4">
                  {/* Mock Dashboard Card */}
                  <div className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                  </div>

                  {/* Mock AI Card */}
                  <div className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <Brain className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                        <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Mock Stats Card */}
                  <div className="rounded-lg bg-white p-6 shadow-lg">
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="text-center">
                          <div className="h-8 w-8 mx-auto rounded bg-blue-100 mb-2"></div>
                          <div className="h-2 w-full bg-gray-200 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-yellow-400 opacity-80 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-pink-400 opacity-60 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything You Need for
              <span className="text-blue-400"> Modern Healthcare</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive features designed to streamline medical record management 
              for both patients and healthcare providers.
            </p>
          </div>

          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Box className="h-4 w-4 text-white" />}
              title="Secure Medical Records"
              description="End-to-end encrypted storage for all your medical data with HIPAA compliance."
            />
      
            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Settings className="h-4 w-4 text-white" />}
              title="AI-Powered Insights"
              description="Get intelligent health analytics and personalized recommendations from our advanced AI."
            />
      
            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Lock className="h-4 w-4 text-white" />}
              title="Privacy First Design"
              description="Your health data is protected with bank-level security and zero-knowledge architecture."
            />
      
            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Sparkles className="h-4 w-4 text-white" />}
              title="Smart Automation"
              description="Automated prescription management and appointment scheduling powered by AI."
            />
      
            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Search className="h-4 w-4 text-white" />}
              title="Easy Search & Access"
              description="Find any medical record instantly with our powerful search and filtering system."
            />
          </ul>
        </div>
      </section>

      <Footer />
      
    </div>
  );

}

// Move these outside the HomePage component
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}
 
const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-400 bg-white/10 backdrop-blur-sm p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-gray-300 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
