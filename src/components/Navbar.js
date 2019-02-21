import React from 'react'
import { kebabCase, upperCase } from 'lodash'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   const { categories = [] } = this.props;

   return (
    <nav>
      <Link to={'/'}>UPDATE</Link>
      {categories.map(category => !!category.fieldValue && (
        <Link to={`/${kebabCase(category.fieldValue)}`}>
          {upperCase(category.fieldValue)}
        </Link>
      ))}
    </nav>
  )}
}

export default Navbar
