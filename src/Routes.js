import { Counter } from "./features/counter/Counter";
import { CounterView } from "./features/counter/CounterView";
import { Login } from "./features/login/Login";

export default [
  {
    component: CounterView,
    path: "/counter",
  },
  {
    component: Login,
    path: "/login",
  },
  {
    component: Login,
    path: "/",
  },
];
