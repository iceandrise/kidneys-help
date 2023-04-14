import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../connection';

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const usersCollection = collection(db, 'Users');
        const usersSnapshot = await getDocs(usersCollection);
        const users = usersSnapshot.docs.map((doc) => doc.data());
        setUsers(users);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching entity: ', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, error, loading };
};
