import React from 'react'
import Category from './Category'

const CategoryList = () => {
    const items = [
        { catId: 1, catName: 'Fiction', catImage: 'https://placehold.it/400/888888' },
        { catId: 2, catName: 'History', catImage: 'https://placehold.it/400/888888' },
        { catId: 3, catName: 'Science', catImage: 'https://placehold.it/400/888888' },
        { catId: 4, catName: 'External Affairs', catImage: 'https://placehold.it/400/888888' }
    ]
    return (
        <>
            <div className="container">
                <h1 className="text-center">All Categories</h1>
                <div className="row">
                    {
                        items.map((category, index) => <Category data={category} key={index} />)
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryList