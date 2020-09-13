import React from 'react';
import {connect}  from 'react-redux';
import {toogleCartHidden} from '../../Redux/cart/cart.actions';
import {selectCartItemsCount} from '../../Redux/cart/cart.selectors';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = ({ toogleCartHidden , itemCount}) => (
    <div className = 'cart-icon' onClick ={toogleCartHidden}>
    <ShoppingIcon className = 'shopping-icon'/>
    <span className = 'item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
  });


const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);