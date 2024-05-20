import { TaskResponse } from '../../interfaces/task-list-response';

type Props = {
  taskList: TaskResponse[];
  orderBy: { order: string; isSortAsc: boolean };
  setOrderBy: React.Dispatch<React.SetStateAction<any>>;
  handleCheck: (idTask: number) => void;
};

export const TableTasks = ({ taskList, orderBy, setOrderBy, handleCheck }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() =>
                orderBy.order === 'description'
                  ? setOrderBy({ ...orderBy, isSortAsc: !orderBy.isSortAsc })
                  : setOrderBy({ order: 'description', isSortAsc: true })
              }
              className={
                orderBy.order === 'description'
                  ? orderBy.isSortAsc ? 'sorted-asc' : 'sorted-desc-active'
                  : 'sorted-desc'
              }>
            Task
          </th>
          <th onClick={() =>
                orderBy.order === 'creationDate'
                  ? setOrderBy({ ...orderBy, isSortAsc: !orderBy.isSortAsc })
                  : setOrderBy({ order: 'creationDate', isSortAsc: true })
              }
              className={
                orderBy.order === 'creationDate'
                  ? orderBy.isSortAsc ? 'sorted-asc' : 'sorted-desc-active'
                  : 'sorted-desc'
              }>
            Creation Date
          </th>
          <th onClick={() =>
                orderBy.order === 'dueDate'
                  ? setOrderBy({ ...orderBy, isSortAsc: !orderBy.isSortAsc })
                  : setOrderBy({ order: 'dueDate', isSortAsc: true })
                }
              className={
                orderBy.order === 'dueDate'
                  ? orderBy.isSortAsc ? 'sorted-asc' : 'sorted-desc-active'
                  : 'sorted-desc'
              }>
            Due Date
          </th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((task) => (
          <tr key={task.id}>
            <td className={task.isCompleted ? 'tasks-completed' : undefined}>
              {task.description}
            </td>
            <td className={task.isCompleted ? 'tasks-completed' : undefined}>
              {task.creationDate}
            </td>
            <td className={task.isCompleted ? 'tasks-completed' : undefined}>
              {task.dueDate}
            </td>
            <td>
              <input type="checkbox"
                     defaultChecked={task.isCompleted}
                     onChange={() => handleCheck(task.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
