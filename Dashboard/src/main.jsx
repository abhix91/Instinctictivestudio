import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider for Redux
import store from "./state/store.jsx"; // Import the Redux store
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap the application with Redux Provider */}
      <App />
    </Provider>
  </StrictMode>
);
