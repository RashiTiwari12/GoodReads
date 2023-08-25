import React from 'react'
import { Link } from 'react-router-dom';

const Category = (props) => {
    const { catId, catName, catImage } = props.data;
    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={catImage} alt="" className="card-image-top" />
                <div className="card-body">
                    <Link to="/books">
                        <div className="card-title">{catName}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Category