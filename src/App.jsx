import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Bakeries from './pages/Bakeries/Bakeries';
import Catalog from './pages/Catalog/Catalog';
import News from './pages/News/News';
import BonusProgram from './pages/BonusProgram/BonusProgram';
import Contacts from './pages/Contacts/Contacts';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { BREAD, PIES, DESSERTS, DRINKS } from './data/products';
import './index.css';

function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
}

function AuthLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/bakeries" element={<Layout><Bakeries /></Layout>} />
          <Route
            path="/bread"
            element={
              <Layout>
                <Catalog
                  title="Хлеб"
                  subtitle="Ремесленный хлеб на живой закваске — 24 часа от замеса до прилавка"
                  products={BREAD}
                />
              </Layout>
            }
          />
          <Route
            path="/pies"
            element={
              <Layout>
                <Catalog
                  title="Пироги"
                  subtitle="Дрожжевое тесто и обильная начинка по рецептам XIX века"
                  products={PIES}
                />
              </Layout>
            }
          />
          <Route
            path="/desserts"
            element={
              <Layout>
                <Catalog
                  title="Десерты и торты"
                  subtitle="Торты, пирожные и выпечка из натуральных ингредиентов без красителей"
                  products={DESSERTS}
                />
              </Layout>
            }
          />
          <Route
            path="/drinks"
            element={
              <Layout>
                <Catalog
                  title="Напитки"
                  subtitle="Живой квас, морсы и компоты — только натуральные ингредиенты"
                  products={DRINKS}
                />
              </Layout>
            }
          />
          <Route path="/news" element={<Layout><News /></Layout>} />
          <Route path="/bonus" element={<Layout><BonusProgram /></Layout>} />
          <Route path="/contacts" element={<Layout><Contacts /></Layout>} />
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
