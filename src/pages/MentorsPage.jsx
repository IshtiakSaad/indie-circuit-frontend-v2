import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const MentorsPage = () => {
  const users = useLoaderData();
//   console.log(users);

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-secondary">
        Shob Boro Vaiya/Apu raaa!
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto my-10">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-blue-900 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20 hover:scale-[1.02] transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-300">
              {user.name}
            </h2>
            <p className="text-sm text-gray-300 mb-1">
              <span className="font-semibold text-gray-400">Username:</span>{" "}
              {user.username}
            </p>
            <p className="text-sm text-gray-300 mb-3">
              <span className="font-semibold text-gray-400">Email:</span>{" "}
              {user.email}
            </p>

            <div className="mt-3 border-t border-white/10 pt-3 text-sm space-y-1">
              <p>
                <span className="font-semibold text-gray-400">Phone:</span>{" "}
                {user.phone}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Website:</span>{" "}
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {user.website}
                </a>
              </p>
            </div>

            <div className="mt-4 border-t border-white/10 pt-3 text-sm">
              <p className="font-semibold text-gray-400 mb-1">Address:</p>
              <p>
                {user.address.street}, {user.address.suite}, {user.address.city}{" "}
                – {user.address.zipcode}
              </p>
            </div>

            <div className="mt-4 border-t border-white/10 pt-3 text-sm">
              <p className="font-semibold text-gray-400 mb-1">Company:</p>
              <p>{user.company.name}</p>
              <p className="text-gray-400 italic text-xs mt-1">
                “{user.company.catchPhrase}”
              </p>
            </div>

            <Link
              to={`/mentors/${user.id}`}
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
