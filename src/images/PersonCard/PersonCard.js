import React from 'react';
import './PersonCard.css';

const PersonCard = (props) => {
    const { name, age, country, salary, img,role } = props.person;
    return (
        <div className="col-md-10 mb-4" >
            <div    class="card shadow p-2 mb-5 bg-body rounded  ">
                <img src={img} class="card-img-top img-fluid w-100  " alt="..." />
                <div class="card-body" >
                   <h5 class="card-title ">{name}</h5>
                    <p class="card-text ">Role: {role}</p>
                
                    <p class="card-text ">Age: {age}</p>
                    <p class="card-text ">Country: {country}</p>
                    <p class="card-text ">Salary: {salary}</p>
                    <button onClick={()=>props.handleCartItem(props.person)} type="button" class="btn btn-primary btn-sm"> <i class="fas fa-shopping-cart color"></i>Add to cart</button>
                </div>
            </div>
        </div>


    );
};
export default PersonCard;