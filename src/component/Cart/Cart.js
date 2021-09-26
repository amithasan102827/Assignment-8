import React from 'react';

const Cart = (props) => {
    const { cart } = props;


    let totalCost = 0;
    for (const person of cart) {
        totalCost = totalCost + parseInt(person.salary);
    }



    return (
        <div>
            <div class="card me-4 shadow p-3 mb-5 bg-body rounded " style={{ width: '18rem' }}>
                <div class="card-header">
                    <h3>Philosophers</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Philosophers Added:  {cart.length} </li>
                    <li class="list-group-item">Total cost: {totalCost}</li>
                    <li class="list-group-item">Name:
                        {
                            cart.map(person => <ul>{person.name}</ul>
                            )
                        }

                    </li>


                </ul>
            </div>
        </div>
    );
};

export default Cart;