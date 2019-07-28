import React, {useState, useEffect} from 'react';
import {listDataForMoment, addCategoryForMoment} from './data.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Category from "./category.js";
import Button from "react-bootstrap/Button";

function DateBreakdown({selectedMoment, setSelectedMoment}){
    const [newCategoryDescription, setNewCategoryDescription] = useState("");
    const [newCategoryCost, setNewCategoryCost] = useState(0);
    const [categories, setCategories] = useState(listDataForMoment(selectedMoment));

    // categories will not update by themselves since useState only updates once
    useEffect(() => {
        setCategories(listDataForMoment(selectedMoment));
    }, [selectedMoment]);

    function addCategory(e){
        e.preventDefault();
        if(newCategoryDescription.trim().length === 0){
            //todo: show warning on side of screen
        }
        if(newCategoryCost === 0){
            //todo: show warning on side of screen
        }
        addCategoryForMoment(selectedMoment, new Category(newCategoryDescription, newCategoryCost));
        setCategories(listDataForMoment(selectedMoment));
        setNewCategoryCost(0);
        setNewCategoryDescription("");
    }

    return (
        <div id="categoryWrapper">
            <div id="categoryContainer">
                {categories.map((value, index) =>
                    <CategoryDisplay category={value}
                                     key={selectedMoment.toISOString() + index}/>)}
            </div>
            <div>
                <form onSubmit={addCategory}>
                    <input type="text"
                           onChange={(e) => setNewCategoryDescription(e.target.value)}
                           value={newCategoryDescription}
                           placeholder="Description"
                           className="categoryDescription"/>
                    <input type="number"
                           onChange={(e) => setNewCategoryCost(e.target.value)}
                           value={newCategoryCost}
                           className="categoryCost"/>
                    <Button type="submit"><FontAwesomeIcon icon={faArrowRight}/></Button>
                </form>
            </div>
        </div>
    )
}

function CategoryDisplay({category}){
    return (
        <div className="categoryItem">
            <h3 className="categoryDescription">{category.description}</h3>
            <h3 className="categoryCost">{category.cost}</h3>
        </div>
    )
}

export default DateBreakdown;