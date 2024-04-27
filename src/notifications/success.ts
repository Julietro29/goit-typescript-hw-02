import toast from "react-hot-toast";

export const okNotify = (msg: string) => {
  toast.success(msg, {
    duration: 700,
  });
};