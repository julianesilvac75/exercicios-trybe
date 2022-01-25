import { useEffect, useState } from "react";

function useArray() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    if (task) {
      setTaskList((state) => [...state, task])
    }
  }, [task]);

  return [setTask, taskList];
}

export default useArray;