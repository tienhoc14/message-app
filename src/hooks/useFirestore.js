import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";


const useFirestore = (table, condition) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, table);

    if (condition?.compareValue?.length) {
      var q = query(
        collectionRef,
        where(condition.fieldName, condition.operator, condition.compareValue),
        orderBy('createdAt')
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setDocuments(snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })));
    });
    return unsubscribe;
  }, [table, condition]);

  return documents;
};

export default useFirestore;