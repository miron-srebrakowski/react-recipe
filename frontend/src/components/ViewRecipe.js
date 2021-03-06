import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ViewRecipe (props) {

    const [recipe, setRecipe] = useState([]);
    const [method, setMethod] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/recipes/view-recipe/' + props.match.params.id)
        .then(res => {
            setRecipe(res.data);
            setMethod(res.data.method);
            setIngredients(res.data.ingredients);  
        })
        .catch(err => {
            console.log("Error in ViewRecipe!" + err);
        })
    }, [])


    let ingredientsList, methodList;

    ingredientsList = ingredients.map((item, key) => (
        <li key={key}>{ item }</li>
    ));

    methodList = method.map((step, key) => (
        <li key={key}>{ step }</li>
    ));
    
    
    return (
        <div className="container">
            <div className="recipe-page">
                <div className="row">
                
                    <div className="col-lg-5">
                        <h1>{ recipe.title }</h1>

                        <img
                        src={ recipe.image }
                        className="img-rounded img-responsive text-center"
                        alt="food"
                        />

                    <h6>Recipe by: { recipe.author }</h6>
                    </div>

                    <div className="col-lg-7 my-5">
                        <h4>Ingredients:</h4>
                        <ul>{ ingredientsList }</ul>
                        <br/>
                        <h4>Method:</h4>
                        <ol>{ methodList }</ol>
                    </div>
            
                </div>

                <Link to="/display-all">
                    <button className="btn btn-secondary">Back</button>
                </Link>
                <Link to={`/edit-recipe/${props.match.params.id}`}>
                    <button className="btn btn-primary m-4">Edit recipe</button>
                </Link>
            </div>
        </div>
    );
} 