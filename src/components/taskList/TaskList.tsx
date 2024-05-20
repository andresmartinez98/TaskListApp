import type { TaskResponse } from '../../interfaces/task-list-response';
import tasks from '../../assets/mocks/mock-tasks.json';
import { useEffect, useState } from 'react';
import { InputSearch } from './InputSearch';
import { CustomSelect } from '../shared/CustomSelect';
import { TableTasks } from './TableTasks';

export const TaskList = () => {
  const [taskList, setTaskList] = useState<TaskResponse[]>(tasks);
  const [filter, setFilter] = useState('all');
  const [orderBy, setOrderBy] = useState({
    order: 'description',
    isSortAsc: true,
  });

  useEffect(() => {
    handleOrder(orderBy.order);
  }, [orderBy]);

  const handleCheck = (idTask: number) => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === idTask) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  const handleOrder = (order: string) => {
    const sortedTasks = taskList.sort((a, b) => {
      if (order === 'description') {
        return orderBy.isSortAsc
          ? a.description.localeCompare(b.description)
          : b.description.localeCompare(a.description);
      } else if (order === 'creationDate') {
        return orderBy.isSortAsc
          ? a.creationDate.localeCompare(b.creationDate)
          : b.creationDate.localeCompare(a.creationDate);
      } else {
        return orderBy.isSortAsc
          ? a.dueDate.localeCompare(b.dueDate)
          : b.dueDate.localeCompare(a.dueDate);
      }
    });
    setTaskList([...sortedTasks]);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const currentFilter = event.target.value;
    setFilter(currentFilter);

    if (currentFilter === 'all') {
      setTaskList(tasks);
    } else if (currentFilter === 'completed') {
      const filteredTasks = tasks.filter((task) => task.isCompleted);
      setTaskList(filteredTasks);
    } else {
      const filteredTasks = tasks.filter((task) => !task.isCompleted);
      setTaskList(filteredTasks);
    }
  };

  return (
    <>
      <div className="tasks-header">
        <div className="tasks-metric">
          <h2>Total tasks</h2>
          <h2>{taskList.length}</h2>
        </div>
        <div className="tasks-metric">
          <h2>Pending tasks</h2>
          <h2>{taskList.filter((task) => !task.isCompleted).length}</h2>
        </div>
      </div>
      <div className="tasks-inputs">
        <InputSearch
          tasks={tasks}
          setTaskList={setTaskList}
          setFilter={setFilter}
        />
        <CustomSelect
          options={['all', 'completed', 'incomplete']}
          value={filter}
          onChange={handleFilter}
        />
      </div>
      <div className="tasks-table">
        <TableTasks
          taskList={taskList}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          handleCheck={handleCheck}
        />
      </div>
    </>
  );
};
