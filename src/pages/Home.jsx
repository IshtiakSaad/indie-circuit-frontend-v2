import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 border-b border-gray-100">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">
          Empowering Students Through Mentorship
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Connect with experienced seniors, schedule free 1:1 sessions, and get
          the right guidance to shape your career path.
        </p>
        <div className="flex gap-4">
          <Link
            to="/join-mentor"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all"
          >
            Join as Mentor
          </Link>
          <Link
            to="/find-mentor"
            className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all"
          >
            Find a Mentor
          </Link>
        </div>
      </section>

      {/* Feature Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What Makes Our Platform Special
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-3">For Mentees</h3>
            <p className="text-gray-600">
              Explore mentors across fields, book sessions, and gain insights
              that align with your goals — for free.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-3">For Mentors</h3>
            <p className="text-gray-600">
              Share your journey, guide aspiring juniors, and build your
              personal brand while helping others grow.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-3">Seamless Scheduling</h3>
            <p className="text-gray-600">
              Manage your sessions effortlessly with built-in booking, calendar
              sync, and reminders — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Start Your Mentorship Journey?
        </h2>
        <p className="text-gray-600 mb-8">
          Whether you want to guide or be guided — join a growing community that
          believes in shared learning.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/join-mentor"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all"
          >
            Become a Mentor
          </Link>
          <Link
            to="/find-mentor"
            className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all"
          >
            Find a Mentor
          </Link>
        </div>
      </section>

    </div>
  );
}
