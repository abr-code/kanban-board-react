import React, { useState } from 'react';
import { tasksdata } from '../data/tasks';

export function useTasks() {
  const [tasksList, setTasksList] = useState(tasksdata);
  const updateList = (newList) => {
    setTasksList([...newList]);
  }
  return { tasksList, updateList };
}
