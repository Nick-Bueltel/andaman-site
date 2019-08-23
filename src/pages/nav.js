import React from 'react'
import {Menu, Container } from 'semantic-ui-react'
import HomePage from '../pages/home'
import FoodMenu from '../pages/menu'
import About from '../pages/about'
import Contact from '../pages/contact'


class NavBar extends React.Component{
    state = { activeItem: "home"}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    
    
    render(){
        const { activeItem } = this.state
        return(
                <div>
        
                <Menu>
                    <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} > 
                        Home
                    </Menu.Item>

                    <Menu.Item name="foodmenu" active={activeItem === 'foodmenu'} onClick={this.handleItemClick}>
                        Menu
                    </Menu.Item>
                    
                    <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                        About
                    </Menu.Item>
                    
                    <Menu.Item name="contact" active={activeItem === 'contact'} onClick={this.handleItemClick}>
                        Contact Us
                    </Menu.Item>
                </Menu>
                <Container>
                    {this.state.activeItem === "home" ? <HomePage/> : null}
                    {this.state.activeItem === "foodmenu" ? <FoodMenu/> : null}
                    {this.state.activeItem === "about" ? <About/> : null}
                    {this.state.activeItem === "contact" ? <Contact/> : null}


                </Container>

            
                </div>
        )
    }
}

export default NavBar