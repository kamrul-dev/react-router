import React, { useEffect, useState } from 'react';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);
    return (
        <div>
            <h2>Hello Friends. How are you?</h2>
            <p><small>Give me some money.. {friends.length}</small></p>
        </div>
    );
};

export default Friends;