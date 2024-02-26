import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

const alertOptions: ToastOptions = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
};

export const alertError = (message: string): any => {
    return toast.error(message, alertOptions);
};

export const alertWarning = (message: string): any => {
    return toast.warn(message, alertOptions);
};

export const alertSuccess = (message: string): any => {
    return toast.success(message, alertOptions);
};
