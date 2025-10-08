import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const EditProfile = () => {
  const { user } = useContext(AuthContext); // only Firebase info
  const [profile, setProfile] = useState(null); // full user from backend
  const [name, setName] = useState("");
  const [role, setRole] = useState("mentee");
  const [field, setField] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Fetch user details from backend on mount
  useEffect(() => {
    if (!user) return;

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BACKEND}/users/${user.uid}`);
        if (!res.ok) {
          const errData = await res.json();
          setError(errData.error || "Failed to fetch profile");
        } else {
          const data = await res.json();
          setProfile(data);
          setName(data.name || "");
          setRole(data.role || "mentee");
          setField(data.field || "");
        }
      } catch (err) {
        console.error(err);
        setError("Network error fetching profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch(`${BACKEND}/users/${user.uid}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, field }),
      });

      if (!res.ok) {
        const errData = await res.json();
        setError(errData.error || "Update failed");
      } else {
        const updated = await res.json();
        setSuccess(true);
        setProfile(updated); // update local state
      }
    } catch (err) {
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-4">Loading profile...</div>;
  if (!profile) return <div className="p-4 text-red-500">No profile data found.</div>;

  return (
    <div className="flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow"
      >
        <h2 className="text-xl font-semibold mb-4">My Profile</h2>

        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          className="w-full pb-2 mb-3 border-b"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block mb-2 text-sm font-medium">Role</label>
        <div className="flex gap-4 mb-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              checked={role === "mentor"}
              onChange={() => setRole("mentor")}
            />
            Mentor / Senior
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              checked={role === "mentee"}
              onChange={() => setRole("mentee")}
            />
            Mentee / Junior
          </label>
        </div>

        <label className="block mb-2 text-sm font-medium">Field / Department</label>
        <input
          className="w-full pb-2 mb-3 border-b"
          value={field}
          onChange={(e) => setField(e.target.value)}
        />

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          className="w-full pb-2 mb-4 border-b bg-gray-100"
          value={profile.email}
          disabled
        />

        {error && <div className="text-sm text-red-500 mb-2">{error}</div>}
        {success && <div className="text-sm text-green-500 mb-2">Profile updated!</div>}

        <button
          type="submit"
          className="w-full py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
