import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/common/ThemeProvider";
import { LanguageProvider } from "./components/common/LanguageProvider";
import { AppRoutes } from "./app/routes";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};
export default App;
