import { collection, getDoc, getDocs } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { db } from '../connection';

export const useGetResults = (collectionName) => {
  const [data, setData] = useState({
    results: [],
    error: null,
    loading: true,
  });

  const fetchResults = useCallback(async () => {
    console.log(collectionName);
    try {
      const resultsCollection = collection(db, collectionName);

      const resultsSnapshot = await getDocs(resultsCollection);

      const results = await Promise.all(
        resultsSnapshot.docs.map(async (doc) => {
          const data = doc.data();
          const referenceDoc = await getDoc(data.patientRef);
          const referencePatient = referenceDoc.data();

          return {
            id: doc.id,
            ...data,
            patient: referencePatient,
          };
        }),
      );

      setData({ results, error: null, loading: false });
    } catch (err) {
      console.error('Error fetching entity: ', err);
      setData({ results, error: err, loading: false });
    }
  }, [collectionName]);

  useEffect(() => {
    fetchResults();
  }, []);

  const refetch = () => {
    setData({ ...data, loading: true });
    fetchResults();
  };

  return { ...data, refetch };
};
