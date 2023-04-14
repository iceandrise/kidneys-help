import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../connection';

export const useGetPatients = (name = '') => {
  const [data, setData] = useState({
    patients: [],
    error: null,
    loading: true,
  });

  const fetchPatients = async () => {
    try {
      const patientsCollection = collection(db, 'Patients');

      const patientsSnapshot = await getDocs(patientsCollection);
      const patients = patientsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData({ patients, error: null, loading: false });
    } catch (err) {
      console.error('Error fetching entity: ', err);
      setData({ patients, error: err, loading: false });
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [name]);

  const refetch = () => {
    setData({ ...data, loading: true });
    fetchPatients();
  };

  return { ...data, refetch };
};
