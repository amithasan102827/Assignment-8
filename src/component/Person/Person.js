import React, { useEffect, useState } from 'react';
import PersonCard from '../../images/PersonCard/PersonCard';
import Cart from '../Cart/Cart';
import './Person.css';

const Person = () => {
    const [persons, setPerson] = useState([]);

    const [cartItem, setCartItem]=useState([]);
    const handleCartItem=(person)=>{
           const newCartItem=[...cartItem,person];
           setCartItem(newCartItem);
    }

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setPerson(data));
    }, []);



    return (
        <div className="person">
            <div className="person-cards mt-4">
                {
                    persons.map(person =>
                        <PersonCard person={person}
                        key={person.id}
                        handleCartItem={handleCartItem}
                        
                        ></PersonCard>)
                }


            </div>

            <div className="mt-4 ">
               <Cart
               cart={cartItem}
               
               ></Cart>
            </div>
        </div>
    );
};

export default Person;