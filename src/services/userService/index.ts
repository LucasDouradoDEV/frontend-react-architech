import { User } from '../../types/apiTypes';

export default async function getUser (userId: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
};
