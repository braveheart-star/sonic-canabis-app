import Swal, { SweetAlertIcon } from "sweetalert2";

export function showMessageModal(
  title: string,
  html: string,
  icon: SweetAlertIcon,
  time: number = 5000
) {
  Swal.fire({
    title: title,
    html: html,
    icon: icon,
    timer: time,
    timerProgressBar: true,
  });
}
