import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const MentorDetailsPage = () => {
  const { uid } = useParams(); // from route /mentors/:uid
  const [slots, setSlots] = useState([]);
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch mentor's existing slots
  useEffect(() => {
    if (uid) {
      fetch(`${BACKEND}/slots/mentor/${uid}`)
        .then((res) => res.json())
        .then((data) => setSlots(data))
        .catch(() => setError("Failed to fetch slots"));
    }
  }, [uid]);

  useEffect(() => {
    if (!uid) return;

    const fetchMentor = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BACKEND}/users/${uid}`);
        if (!res.ok) {
          const errData = await res.json();
          setError(errData.error || "Failed to fetch profile");
        } else {
          const data = await res.json();
          setMentor(data);
        }
      } catch (err) {
        console.error(err);
        setError("Network error fetching mentor");
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, [uid]);

  if (loading) return <div className="p-4">Loading mentor details...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!mentor) return <div className="p-4">Mentor not found.</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">{mentor.name}</h2>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {mentor.email}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Field:</strong> {mentor.field}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Role:</strong> {mentor.role}
        </p>

        {/* Future: Show available slots or "Book Session" button here */}

        <div>
          <h3 className="text-lg font-semibold mb-3">Available Slots</h3>
          {slots.length === 0 ? (
            <p className="text-gray-500">No slots Available.</p>
          ) : (
            <ul className="space-y-3">
              {slots.map((slot) => (
                <li
                  key={slot.id}
                  className="flex justify-between items-center border p-3 rounded"
                >
                  <div>
                    <p>
                      <span className="font-medium">Start:</span>{" "}
                      {new Date(slot.startTime).toLocaleString()}
                    </p>
                    <p>
                      <span className="font-medium">End:</span>{" "}
                      {new Date(slot.endTime).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      Status: {slot.isBooked ? "Booked" : "Available"}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorDetailsPage;
