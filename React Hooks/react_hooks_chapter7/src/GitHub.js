import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Card } from 'react-bootstrap';

function GitHub() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        if (!searchTerm) {
            setError(new Error("Search term cannot be empty"));
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
            setData(res.data.items);
            setIsLoading(false);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        getData();
    };

    const listUsers = data.map((user) => (
        <Card key={user.id} className="mb-3">
            <Card.Body>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt={`${user.login}'s avatar`}
                    />
                </a>
                <h5>Login: {user.login}</h5>
                <p>Id: {user.id}</p>
            </Card.Body>
        </Card>
    ));

    return (
        <div>
            <form onSubmit={handleSubmit} className="mb-3">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <h3>GitHub Users Results</h3>
            {isLoading && <ReactLoading type="spinningBubbles" color="#444" />}
            {error && <div className="text-red-font-bold">{error.message}</div>}
            {listUsers}
        </div>
    );
}

export default GitHub;
