import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import EditProfile from "../components/Dashboard/EditProfile";
import MentorDashboard from "../components/Dashboard/MentorDashboard";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.uid) {
      fetch(`${BACKEND}/users/${user.uid}`)
        .then((res) => res.json())
        .then((data) => {
          setProfile(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch user:", err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading your dashboard...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No profile found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-3xl font-semibold text-center">
          Welcome, {profile.name || "User"} 👋
        </h1>

        {/* Profile Section */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <EditProfile />
        </section>

        {/* Bookings Section */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
          {/* <MyBookings /> */}
        </section>

        {/* Mentor Section — only visible to mentors */}
        {profile.role === "mentor" && (
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Mentor Dashboard</h2>
            <MentorDashboard mentorId={profile.id} />
          </section>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
