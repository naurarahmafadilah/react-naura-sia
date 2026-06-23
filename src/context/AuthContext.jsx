import { createContext, useContext, useEffect, useState } from "react";

const USERS_KEY = "naura_users";
const SESSION_KEY = "naura_current_user";

const defaultUsers = [
  {
    id: "user-1",
    fullName: "Naura Rahma",
    email: "admin@sedap.com",
    password: "password123",
  },
];

const AuthContext = createContext(null);

const readStorage = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const writeStorage = (key, value) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStorage(SESSION_KEY, null));

  useEffect(() => {
    const storedUsers = readStorage(USERS_KEY, null);
    if (!storedUsers) {
      writeStorage(USERS_KEY, defaultUsers);
    }
  }, []);

  useEffect(() => {
    if (user) {
      writeStorage(SESSION_KEY, user);
    } else {
      if (typeof window !== "undefined") {
        localStorage.removeItem(SESSION_KEY);
      }
    }
  }, [user]);

  const getUsers = () => readStorage(USERS_KEY, defaultUsers);

  const saveUsers = (users) => writeStorage(USERS_KEY, users);

  const login = async ({ email, password }) => {
    const users = getUsers();
    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = users.find(
      (item) => item.email.toLowerCase() === normalizedEmail && item.password === password
    );

    if (!existingUser) {
      throw new Error("Email atau password salah.");
    }

    setUser({
      id: existingUser.id,
      fullName: existingUser.fullName,
      email: existingUser.email,
    });

    return existingUser;
  };

  const register = async ({ fullName, email, password }) => {
    const users = getUsers();
    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((item) => item.email.toLowerCase() === normalizedEmail)) {
      throw new Error("Email sudah terdaftar. Silakan gunakan alamat email lain.");
    }

    const newUser = {
      id: `user-${Date.now()}`,
      fullName: fullName.trim(),
      email: normalizedEmail,
      password,
    };

    saveUsers([...users, newUser]);
    return newUser;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth harus digunakan di dalam AuthProvider.");
  }
  return context;
}
