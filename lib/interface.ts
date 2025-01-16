export interface Todo {
  id: number;
  user_id: number;
  task: string;
  is_completed: boolean;
  inserted_at: Date;
}
