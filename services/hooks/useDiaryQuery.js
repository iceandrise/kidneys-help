import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../connection';

export const useDiaryQuery = (collectionName) => {
  const [data, setData] = useState({
    result: [],
    error: null,
    loading: true,
  });

  const fetchDiary = async () => {
    try {
      const diaryCollection = collection(db, collectionName);
      const diarySnapshot = await getDocs(diaryCollection);
      const diary = diarySnapshot.docs.map((doc) => doc.data());
      setData({ result: diary, error: null, loading: false });
    } catch (err) {
      setData((prev) => ({ ...prev, error: err, loading: false }));
    }
  };

  useEffect(() => {
    fetchDiary();
  }, []);

  const refetch = () => {
    setData({ ...data, loading: true });
    fetchDiary();
  };

  return { ...data, refetch };
};
