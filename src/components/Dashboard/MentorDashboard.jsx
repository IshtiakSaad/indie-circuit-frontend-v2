import React, { useEffect, useState } from "react";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const MentorDashboard = ({ mentorId }) => {
  const [slots, setSlots] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch mentor's existing slots
  useEffect(() => {
    if (mentorId) {
      fetch(`${BACKEND}/slots/mentor/${mentorId}`)
        .then((res) => res.json())
        .then((data) => setSlots(data))
        .catch(() => setError("Failed to fetch slots"));
    }
  }, [mentorId]);

  // Create new slot
  const handleCreateSlot = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${BACKEND}/slots`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mentorId, startTime, endTime }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Slot creation failed");
      }

      const newSlot = await res.json();
      setSlots((prev) => [...prev, newSlot]);
      setStartTime("");
      setEndTime("");
      setSuccess("Slot added successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete slot
  const handleDeleteSlot = async (slotId) => {
    try {
      const res = await fetch(`${BACKEND}/slots/${slotId}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete slot");
      setSlots((prev) => prev.filter((s) => s.id !== slotId));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleCreateSlot}
        className="flex flex-col md:flex-row gap-3 mb-6"
      >
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Start Time</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">End Time</label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="self-end bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Adding..." : "Add Slot"}
        </button>
      </form>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">{success}</p>}

      <div>
        <h3 className="text-lg font-semibold mb-3">My Slots</h3>
        {slots.length === 0 ? (
          <p className="text-gray-500">No slots created yet.</p>
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
                <button
                  onClick={() => handleDeleteSlot(slot.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MentorDashboard;
