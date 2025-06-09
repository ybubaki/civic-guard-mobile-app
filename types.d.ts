interface RegisterData {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface UpdateData {
  name?: string;
  username?: string;
  email?: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface Issue {
  id: number;
  classification: string;
  description: string;
  city: string;
  status: string;
  priority: string;
  imageUrl: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

interface Message {
  id: number;
  type: string;
  message: string;
}
