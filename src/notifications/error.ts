import toast from "react-hot-toast";

export const errNotify = (msg: string) => {
  toast.error(msg, {
    duration: 700,
  });
};