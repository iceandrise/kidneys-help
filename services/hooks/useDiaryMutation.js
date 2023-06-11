import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../connection';

export const useDiaryMutation = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const addDiary = async (input, collectionName) => {
    setLoading(true);
    try {
      if (collectionName) {
        const collectionRef = collection(db, collectionName);
        const existDocRef = query(collectionRef, where('day', '==', input.day));
        const querySnapshot = await getDocs(existDocRef);
        if (querySnapshot.empty) {
          const docRef = await addDoc(collectionRef, {
            ...input,
            created_at: new Date(),
          });
          console.log('Document written with ID: ', docRef);
        } else {
          const documentId = querySnapshot.docs[0].id;
          const documentRef = doc(collectionRef, documentId);
          await updateDoc(documentRef, { inputParameter: input.inputParameter });
          console.log('Document updated with ID: ', documentRef.id);
        }
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching entity: ', err);
      setError(err);
      setLoading(false);
    }
  };

  const removeDiary = async (id, collectionName) => {
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

  return { addDiary, removeDiary, error, loading };
};
