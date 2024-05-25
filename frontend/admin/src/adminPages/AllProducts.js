import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiSquareEditOutline, mdiPlusBox } from '@mdi/js';

const AllProducts = (props) => {
    const navigate = useNavigate();

    return (
        <>
            {props.addButton ?
                <>
                    <NavLink to="/addProduct" className="card-link" >
                        <Icon path={mdiPlusBox} size={4} color="#0066ff" />
                    </NavLink>
                </>
                :
                <>
                    <div className="card cardwidth">
                        <div className="card-body">
                            <p className="card-text">{props.productName}</p>
                            <p className="card-text"><span style={{ fontWeight: 'bold' }}>₹ {props.productPrice}</span> for {props.productType} </p>
                            <NavLink to={{
                                pathname: '/editProduct',
                                state: { uid: props.uid, productUrl: props.productUrl, productName: props.productName, productType: props.productType, productPrice: props.productPrice }
                            }} className="card-link">
                                <Icon path={mdiSquareEditOutline} size={1} color="#0066ff" />
                            </NavLink>
                            <NavLink to={{
                                pathname: '/deleteProduct',
                                state: { uid: props.uid }
                            }} className="card-link ">
                                <Icon path={mdiTrashCanOutline} size={1} color="red" />
                            </NavLink>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default AllProducts;
