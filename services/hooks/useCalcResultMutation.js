import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../connection';

export const useCalcResultMutation = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const addCalcResult = async (input, collectionName) => {
    setLoading(true);
    try {
      if (collectionName) {
        const resultDocRef = doc(collection(db, 'Patients'), input.patientId);
        const docRef = await addDoc(collection(db, collectionName), {
          ...input,
          patientRef: resultDocRef,
        });
        console.log('Document written with ID: ', docRef);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching entity: ', err);
      setError(err);
      setLoading(false);
    }
  };

  const removeCalcResult = async (id, collectionName) => {
    setLoading(true);
    try {
      if (collectionName) {
        await deleteDoc(doc(db, collectionName, id));
        setLoading(false);
      }
    } catch (err) {
      console.error('Error fetching entity: ', err);
      setError(err);
      setLoading(false);
    }
  };

  return { addCalcResult, removeCalcResult, error, loading };
};
