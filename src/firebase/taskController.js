import { db } from './index';
import { collection, addDoc, doc, setDoc, getDocs, deleteDoc  } from "firebase/firestore"

//CRUD
// Create
export const addNewTask = async task => {
    await addDoc(collection(db, 'tasks'), task);
}

// Read
export const getTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    // console.log(querySnapshot);
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    // });

    const tasks = querySnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
    return tasks;
}

// Update
export const updateTask = async (task) => {
    console.log(task)
    await setDoc(doc(db, 'tasks', task.id), {
        title: task.title,
        description: task.description
    });
}

// Delete
export const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id))
}