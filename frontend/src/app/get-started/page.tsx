import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Users } from 'lucide-react';

export default function GetStartedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Get Started with <span className="text-blue-400">CareSafe</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Choose your role to access your personalized healthcare dashboard
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Doctor Option */}
          <Link 
            href="/doctor"
            className="group p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">I'm a Doctor</h3>
              <p className="text-gray-300 mb-4">
                Access patient records, manage appointments, and use AI-powered insights
              </p>
              <div className="inline-flex items-center text-blue-400 group-hover:text-white transition-colors">
                Continue as Doctor
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Patient Option */}
          <Link 
            href="/patient"
            className="group p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">I'm a Patient</h3>
              <p className="text-gray-300 mb-4">
                View your medical records, track health progress, and communicate with doctors
              </p>
              <div className="inline-flex items-center text-purple-400 group-hover:text-white transition-colors">
                Continue as Patient
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-400 hover:text-blue-300 transition-colors">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}