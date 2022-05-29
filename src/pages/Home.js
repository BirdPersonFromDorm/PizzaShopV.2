import React, {useContext, useEffect, useState} from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setCurrentPage} from "../redux/slices/filterSlice";
import axios from "axios";

function Home() {

    const {categoryId, sort, currentPage} = useSelector((state) => state.filter);
    const sortType = sort.sort;
    const dispatch = useDispatch();

    const [items, setItems] = useState([]);
    const [isLoadingPizzas, setIsLoadingPizzas] = useState(true);
    const {searchValue} = useContext(SearchContext);
    const onChangeCategory = (id) =>{
        dispatch(setCategoryId(id))
    }
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    }

    const categorySort = categoryId > 0 ? `category=${categoryId}` : '';
    const sortSort = sortType;
    const search = searchValue ? `&search=${searchValue}` : '';


    useEffect(() => {
        setIsLoadingPizzas(true);
        // correct back
        axios.get(`https://628e3fc9a339dfef87aa9aed.mockapi.io/items?page=${currentPage}&limit=4&${categorySort}&sortBy=${sortSort}&order=desc${search}`)
            .then((res) =>{
                setItems(res.data);
                setIsLoadingPizzas(false);
            });
        // test back
        // axios.get(`http://localhost:8085/pizzas?${categorySort}`).then((res) => {
        //     setItems(res.data);
        //     setIsLoadingPizzas(false);
        // });

    }, [categoryId,sortType, searchValue,currentPage]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} onClickCategory={onChangeCategory}/>
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoadingPizzas
                        ? [...Array(6)].map((_, index) => (<Skeleton key={index}/>))
                        : items.map((obj) => (<PizzaBlock key={obj.id}{...obj}/>))
                }
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );
}

export default Home;
