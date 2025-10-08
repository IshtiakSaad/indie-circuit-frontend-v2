import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMentors = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BACKEND}/users?role=mentor`);
        if (!res.ok) {
          const errData = await res.json();
          setError(errData.error || "Failed to fetch mentors");
        } else {
          const data = await res.json();
          setMentors(data);
        }
      } catch (err) {
        console.error(err);
        setError("Network error fetching mentors");
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);



  if (loading) return <div className="p-4">Loading mentors...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6">All Mentors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="p-4 bg-white rounded shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-bold">{mentor.name}</h3>
            <p className="text-sm text-gray-600">Email: {mentor.email}</p>
            <p className="text-sm text-gray-600">Field: {mentor.field}</p>
            <p className="text-sm text-gray-600">Role: {mentor.role}</p>

            <Link
              to={`/mentors/${mentor.id}`}
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorsPage;
