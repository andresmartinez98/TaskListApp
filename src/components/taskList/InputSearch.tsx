import { useState } from 'react';
import { TaskResponse } from '../../interfaces/task-list-response';

type Props = {
  tasks: TaskResponse[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskResponse[]>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const InputSearch = ({ tasks, setTaskList, setFilter }: Props) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearch = event.target.value;
    setSearch(currentSearch);

    const filteredTasks = tasks.filter((task) =>
      task.description.toLowerCase().includes(currentSearch.toLowerCase())
    );
    setTaskList(filteredTasks);
    setFilter('all');
  };

  return (
    <input type="text" placeholder="Search task" value={search} onChange={handleSearch} />
  );
};
