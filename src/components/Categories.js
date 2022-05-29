import React, {useState} from 'react';

function Categories({onClickCategory, categoryId}) {

    const category = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return (
        <div className="categories">
            <ul>
                {
                    category.map((value, index) => {
                        return (
                            <li onClick={() => onClickCategory(index)}
                                key={index}
                                className={categoryId === index ? 'active' : ''}>
                                {value}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Categories;
