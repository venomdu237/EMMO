import { useAuth } from "../authContext";
import { useNavigate } from 'react-router-dom';

export const Reducer = (state, action) => {
    const { currentUser, logout } = useAuth();
    const history = useNavigate();
    switch (action.type) {
        case "connected":
            return {
                ...state,
                active: true,
                user: currentUser
            };
        case "disconnected":
            logout();
            history.push('/');
            return {
                ...state,
                active: false,
                user: []
            };

        default:
            return state
    }
};

export const InitialState = () => {
    const { currentUser } = useAuth();

    if (currentUser) {
        return {
            active: true,
            user: currentUser
        };
    } else {
        return {
            active: false,
            user: []
        };
    }

};