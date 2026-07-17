import {
    createContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { getAccessToken, clearAuth, setAccessToken } from "../utils/token";
import axios from "../api"

export interface User {
    _id: string;
    name: string;
    email: string;
    role: "super-admin" | "hospital-admin" | "doctor";
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;

    login: (token: string, user: User) => void;
    logout: () => void;

    refreshUser: () => Promise<void>;
    updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
    children: ReactNode;
}

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !!user;

    const login = (token: string, user: User) => {
        setAccessToken(token);
        setUser(user);
    };

    const logout = () => {
        clearAuth();
        setUser(null);

        window.location.replace("/sign-in");
    };

    const updateUser = (user: User) => {
        setUser(user);
    };

    const refreshUser = async () => {
        try {
            const user = await axios.get<User>("/auth/me");
            setUser(user);
        } catch {
            logout();
        }
    };

    useEffect(() => {
        const initialize = async () => {
            const token = getAccessToken();

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const user = await axios.get<User>("/auth/me");
                setUser(user);
            } catch {
                clearAuth();
            } finally {
                setLoading(false);
            }
        };

        initialize();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                isAuthenticated,
                login,
                logout,
                refreshUser,
                updateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;