import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
import Footer from './component/Footer';
import Guarantee from './component/Guarantee';
import Header from './component/Header';
import History from './component/History';
import People from './component/People';
import Products from './component/Products';
import {
  PersonCreateForm,
  ProductCreateForm 
 } from './ui-components';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">  
          <Header />
          <h1>Person Create Form</h1>
          <PersonCreateForm />
          <h1>Product Create Form</h1>
          <ProductCreateForm />
          <History />
          <Products />
          <Guarantee />
          <People />
          <Footer />
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
    
  );
}

export default App;