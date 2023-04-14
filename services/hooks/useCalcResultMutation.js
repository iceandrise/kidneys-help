import { useState } from 'react';
import { collection, getDoc, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../connection';

export const useCalcResultMutation = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const addCalcResult = async (input) => {
    setLoading(true);
    try {
      const resultDocRef = doc(collection(db, 'Patients'), input.patientId);

      // Retrieve the document contents
      const resultDocSnapshot = await getDoc(resultDocRef);
      console.log('resultDocSnapshot', resultDocSnapshot);
      const docRef = await addDoc(collection(db, 'Results'), {
        patientId: input.patientId,
        date: input.date,
        eqClearance: input.eqClearance,
        stClearance: input.stClearance,
        stDiaClearance: input.stDiaClearance,
        nativeClearance: input.nativeClearance,
        cNativeClearance: input.cNativeClearance,
        stWeeklyClearance: input.stWeeklyClearance,
        twucClearance: input.twucClearance,
        wUrineVolume: input.wUrineVolume,
        removeFluid: input.removeFluid,
        distributionUrea: input.distributionUrea,
        cPlasmaUrea: input.cPlasmaUrea,
        patientRef: resultDocRef,
      });
      console.log('Document written with ID: ', docRef);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching entity: ', err);
      setError(err);
      setLoading(false);
    }
  };

  const removeCalcResult = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, 'Results', id));
      setLoading(false);
    } catch (err) {
      console.error('Error fetching entity: ', err);
      setError(err);
      setLoading(false);
    }
  };

  return { addCalcResult, removeCalcResult, error, loading };
};
