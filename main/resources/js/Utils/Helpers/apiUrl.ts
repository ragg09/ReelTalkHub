const api = import.meta.env.VITE_API_URL;

export const useApiUrl = (apiUrl: string | number | null): string => {
    if (apiUrl === null) {
        return api;
    } else {
        return `${api}${apiUrl}`;
    }
};
