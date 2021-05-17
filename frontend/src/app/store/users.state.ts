import ToDo from './users.model';

export default class ToDoState {
  Users: Array<ToDo> = [];
  UsersInfo?: ToDo;
  ToDoError = null;
}

export const initializeState = (): ToDoState => {
  return { Users: Array<ToDo>(), ToDoError: null };
};
