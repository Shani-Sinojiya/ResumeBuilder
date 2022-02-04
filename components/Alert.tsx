import { Alert1, Alert2, Alert3, Alert4, Alert5 } from "../layouts/Alerts";

const Alert = (props: { alertNumer: number | 2 }) => {
  if (props.alertNumer == 1) {
    return <Alert1 />;
  } else if (props.alertNumer == 2) {
    return <Alert2 />;
  } else if (props.alertNumer == 3) {
    return <Alert3 />;
  } else if (props.alertNumer == 4) {
    return <Alert4 />;
  } else if (props.alertNumer == 5) {
    return <Alert5 />;
  } else {
    return <Alert2 />;
  }
};

export default Alert;
