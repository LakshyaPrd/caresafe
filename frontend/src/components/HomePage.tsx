
'use client';

import { ArrowRight, Shield, Cloud, Brain, Lock, FileText, UserCheck, Sparkles, CheckCircle, Users, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Footer from './Footer';


export default function HomePage() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Storage",
      description: "End-to-end encrypted cloud storage for all medical records with HIPAA compliance"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Assistant",
      description: "RAG-based intelligent assistant helps doctors analyze patient data and treatment patterns"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Digital Prescriptions",
      description: "Upload and manage prescriptions digitally with automatic OCR and data extraction"
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Patient Portal",
      description: "Personalized dashboard for patients to track their health records and history"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Access",
      description: "Access medical records anytime, anywhere with seamless cloud synchronization"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Privacy First",
      description: "Advanced encryption and authentication to protect sensitive health information"
    }
  ];

  const stats = [
    { icon: <Users className="h-5 w-5" />, value: "10K+", label: "Active Users" },
    { icon: <FileText className="h-5 w-5" />, value: "50K+", label: "Records Managed" },
    { icon: <Clock className="h-5 w-5" />, value: "24/7", label: "Availability" },
    { icon: <TrendingUp className="h-5 w-5" />, value: "99.9%", label: "Uptime" }
  ];

  const benefits = [
    "Instant access to complete medical history",
    "Seamless doctor-patient communication",
    "AI-powered health insights and analytics",
    "Automated prescription management",
    "Secure cloud backup and recovery",
    "Role-based access control"
  ];

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
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-pink-400 opacity-80 blur-xl"></div>
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-8 shadow-sm transition-all hover:shadow-xl hover:border-blue-400/50 hover:bg-white/20"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white border border-blue-400/30">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Trusted by Healthcare Professionals</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur">
                      <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">HIPAA Compliant</p>
                        <p className="text-sm text-blue-100">Full compliance with healthcare regulations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur">
                      <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Bank-Level Security</p>
                        <p className="text-sm text-blue-100">256-bit encryption for all data</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur">
                      <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Regular Backups</p>
                        <p className="text-sm text-blue-100">Automated cloud backup every hour</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Why Choose <span className="text-blue-400">CareSafe</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Built with cutting-edge technology and designed for the modern healthcare ecosystem, 
                CareSafe provides unmatched convenience and security.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of patients and doctors using CareSafe for secure, intelligent health record management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signin"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
}
