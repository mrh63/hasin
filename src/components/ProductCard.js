import React from 'React';
import { useDispatch } from 'react-redux';
import { Card, CardTitle, CardBody, CardText, CardLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { removeProduct } from '../actions/products';

const ProductCard = ({productKey, id, title, subtitle, image}) => {

    const dispatch = useDispatch();

    const onRemove = () => {
        const removedProducts = localStorage.removedProducts ? JSON.parse(localStorage.removedProducts) : [];
        removedProducts.push(productKey);
        const json = JSON.stringify(removedProducts)
        localStorage.setItem('removedProducts', json);
        dispatch(removeProduct({id}));
    }

    return (
        <div className="product-card">
            <Card className="h-100">
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    </CardBody>
                        <img width="100%" src={image} alt="Card cap" />
                    <CardBody>
                    <CardText className="text-justify">{subtitle}</CardText>
                    <CardLink href="#" onClick={onRemove}> حذف </CardLink>
                    <CardLink to={`/${title}`} tag={RRNavLink} className="mr-5"> جزییات بیشتر </CardLink>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductCard;