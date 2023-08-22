
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your backend API base URL

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  errorMessage?: string;
}

export async function getTasks(): Promise<ApiResponse<Task[]>> {
  try {
    const response = await axios.get<ApiResponse<Task[]>>(`${BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
}

export async function createTask(task: Task): Promise<ApiResponse<Task>> {
  try {
    const response = await axios.post<ApiResponse<Task>>(`${BASE_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
}

export async function updateTask(task: Task): Promise<ApiResponse<Task>> {
  try {
    const response = await axios.put<ApiResponse<Task>>(`${BASE_URL}/tasks/${task.id}`, task);
    return response.data;
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
}

export async function deleteTask(taskId: number): Promise<ApiResponse<void>> {
  try {
    const response = await axios.delete<ApiResponse<void>>(`${BASE_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    return { success: false, errorMessage: error.message };
  }
}