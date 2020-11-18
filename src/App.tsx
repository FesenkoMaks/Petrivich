import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ProductsList from './components/ProductsList/ProductsList';

function App() {
    return (
        <div>
            <Header/>
            <ProductsList/>
        </div>
    )
}

export default App;
