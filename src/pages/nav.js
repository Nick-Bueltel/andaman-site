import React from 'react'
import {Menu } from 'semantic-ui-react'


class NavBar extends React.Component{
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    
    
    render(){
        const { activeItem } = this.state
        return(
            <div>
                <Menu>
                    <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} > 
                        Home
                    </Menu.Item>

                    <Menu.Item name="menu" active={activeItem === 'menu'} onClick={this.handleItemClick}>
                        Menu
                    </Menu.Item>
                    
                    <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
                        About
                    </Menu.Item>
                    
                    <Menu.Item name="contact" active={activeItem === 'contact'} onClick={this.handleItemClick}>
                        Contact Us
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default NavBar