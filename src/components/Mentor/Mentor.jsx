import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Mentor = () => {
    const user = useLoaderData();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ maxWidth: 600, margin: "2rem auto", padding: "2rem", border: "1px solid #ccc", borderRadius: 8 }}>
            <h1>Mentor Profile</h1>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <h3>Address</h3>
            <p>
                {user.address.street}, {user.address.suite}<br />
                {user.address.city}, {user.address.zipcode}
            </p>
            <h3>Company</h3>
            <p>
                <strong>Name:</strong> {user.company.name}<br />
                <strong>Catch Phrase:</strong> {user.company.catchPhrase}<br />
                <strong>BS:</strong> {user.company.bs}
            </p>
        </div>
    );
};

export default Mentor;