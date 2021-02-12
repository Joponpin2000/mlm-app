import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './components/admin_section/Dashboard';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Categories from './components/admin_section/Categories';
import CategoriesCreate from './components/admin_section/Categories/create';
import CategoriesEdit from './components/admin_section/Categories/edit';
import Products from './components/admin_section/Products';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import ProductsCreate from './components/admin_section/Products/create';
import ProductsEdit from './components/admin_section/Products/edit';
import UsersIndex from './components/admin_section/Users';
import ProductScreen from './components/ProductScreen';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';
import Shipping from './components/Shipping';

function App() {
  return (
    <div className="App">
      <Router>

        {/* <Route path="/" render={(props) => (props.location.pathname.substr(0, 6) !== "/admin") && <Header />} /> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/categories/:category" component={CategoryProducts} />
          <Route path="/cart/:id?" component={Cart} />
          <Route exact path="/shipping" component={Shipping} />

          <UserRoute exact path="/user/dashboard" component={Home} />
          <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
          <AdminRoute exact path="/admin/categories" component={Categories} />
          <AdminRoute exact path="/admin/categories/create" component={CategoriesCreate} />
          <AdminRoute exact path="/admin/categories/edit/:id" component={CategoriesEdit} />
          <AdminRoute exact path="/admin/products" component={Products} />
          <AdminRoute exact path="/admin/products/create" component={ProductsCreate} />
          <AdminRoute exact path="/admin/products/edit/:id" component={ProductsEdit} />
          <AdminRoute exact path="/admin/registered_users" component={UsersIndex} />
          <Route component={NotFound} />
        </Switch>

        {/* <Route path="/" render={(props) => (props.location.pathname.substr(0, 6) !== "/admin") && <Footer />} /> */}

      </Router>
    </div>
  );
}

export default App;
