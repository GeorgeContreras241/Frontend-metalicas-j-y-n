
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = () => {
    const notify = () => toast.warn('Campos vacios  acion no permitida', {
        position: "top-right",
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    return (
        <>
            <div><button onClick={notify}>Notify!</button></div>
            <ToastContainer
               limit={1}
               />


        </>

    )
}
