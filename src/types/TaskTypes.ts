
interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
}

interface TaskDetails {
  task: Task;
}

interface TaskResponse {
  success: boolean;
  errorMessage?: string;
}

export type { Task, TaskDetails, TaskResponse };