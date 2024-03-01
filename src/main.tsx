import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MainLayout from "./components/layout/MainLayout.tsx";
import { Suspense } from "react";
import Loader from "./components/ui/loader/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MainLayout>
    <App />
  </MainLayout>
);
