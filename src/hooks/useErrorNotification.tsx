import { toast } from "sonner";
import { useEffect } from "react";

type TErrorNotification = {
    isError: boolean;
    message: string;
}
export const useErrorNotification = ({isError, message}: TErrorNotification) => {
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
    }, [isError, message]);
    return null;
};