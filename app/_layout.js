import { Stack } from "expo-router";
import { AppProvider } from "../src/hooks";
import App from './index.js';

export default function Layout() {
    return (
    <AppProvider>
        <Stack />;
        <App/>
    </AppProvider>
 );
}