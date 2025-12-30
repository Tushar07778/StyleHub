
import { User, AuthResponse } from '../types';

// Mock DB in localStorage
const USERS_DB_KEY = 'stylehub_users';
const AUTH_TOKEN_KEY = 'stylehub_token';
const CURRENT_USER_KEY = 'stylehub_user';

// Helper to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to "hash" passwords (very basic simulation)
const hashPassword = (password: string) => `hashed_${btoa(password)}`;

export const authService = {
  signup: async (fullName: string, email: string, password: string): Promise<AuthResponse> => {
    await delay(800);
    const users = JSON.parse(localStorage.getItem(USERS_DB_KEY) || '[]');
    
    if (users.find((u: User) => u.email === email)) {
      throw new Error("User with this email already exists");
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      fullName,
      email,
      createdAt: new Date().toISOString(),
    };

    const userEntry = {
      ...newUser,
      password: hashPassword(password),
    };

    users.push(userEntry);
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));

    // Simulate JWT token
    const token = `mock_jwt_token_${newUser.id}`;
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

    return { user: newUser, token };
  },

  login: async (email: string, password: string): Promise<AuthResponse> => {
    await delay(800);
    const users = JSON.parse(localStorage.getItem(USERS_DB_KEY) || '[]');
    const user = users.find((u: any) => u.email === email && u.password === hashPassword(password));

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const { password: _, ...userWithoutPassword } = user;
    const token = `mock_jwt_token_${user.id}`;
    
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));

    return { user: userWithoutPassword, token };
  },

  logout: () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem(CURRENT_USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  }
};
