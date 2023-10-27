import React from "react";

function UserRecipes({ handleDelete, recipes }) {
    
    const recipeMap = recipes.map((recipe, index) => (
        <tr key={index}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
                <img src={recipe.photo} alt={recipe.name} />
            </td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td>
                <button name="delete" onClick={() => handleDelete(recipe.name)}>Delete</button>
            </td>
        </tr>
    ));

    return recipeMap;
};

export default UserRecipes;
