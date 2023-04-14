import { useState } from 'react';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../connection';

export const usePatientMutation = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const addPatient = async (input) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, 'Patients'), {
        firstName: input?.firstName,
        lastName: input?.lastName,
        room: input?.room,
      });
      console.log('Document written with ID: ', docRef);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching entity: ', err);
      setError(err);
      setLoading(false);
    }
  };

  const removePatient = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, 'Patients', id));
      setLoading(false);
    } catch (err) {
      console.error('Error fetching entity: ', err);
      setError(err);
      setLoading(false);
    }
  };

  return { addPatient, removePatient, error, loading };
};
