import React from 'react'
import {Image, Grid, Divider} from 'semantic-ui-react'
import '../../src/App.css'


// * home 
// 	* Andaman logo and info. 
// 	* some pictures.  - scrolling image
// 		* colorful pictures - sticky rice etc 
// 	* fixed picture of owner and family 

class HomePage extends React.Component{
    render(){
        return(
            
            <div>
                <div className="banner">

                <Image src="https://i.imgur.com/rqNMWaQ.jpg" className="centered" size="big" />
                    <Divider hidden/>
                </div>
                {/* <Image src="https://i.imgur.com/w5s8ITk.jpg" className="centered" rounded size="big"/>
                    <Divider hidden/> */}
                <div>
                    <h1><a href="https://www.toasttab.com/andaman-southern-thai-cuisine/giftcards"> You can send E-Giftcards here </a></h1>
                    <h4>E-Giftcards are not physical cards.</h4>
                    <h4>They can be sent by email or by phone(text), and can be sent at a date of your choice.</h4>
                </div>

                

            <Grid columns={3} className="centered">
                <Grid.Row>
                    <Grid.Column size="large" >
                        <Image src='https://i.imgur.com/QUTdWqG.jpg' circular fluid href="http://www.toasttab.com/andaman-southern-thai-cuisine" />
                    </Grid.Column>
                    
                    <Grid.Column size="large" >
                        <Image src='https://i.imgur.com/az9vLJP.jpg' circular fluid href="http://www.toasttab.com/andaman-southern-thai-cuisine" />
                    </Grid.Column>
                    
                    <Grid.Column size="large" >
                        <Image src='https://i.imgur.com/gSdvLp8.jpg' circular fluid href="http://www.toasttab.com/andaman-southern-thai-cuisine" />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column size="large">
                        <Image src='https://i.imgur.com/uh8M0B6.jpg' circular fluid href="http://www.toasttab.com/andaman-southern-thai-cuisine" />
                    </Grid.Column>
                    
                    <Grid.Column size="large" > 
                        <Image src='https://i.imgur.com/hgd5unq.jpg' circular fluid href="http://www.toasttab.com/andaman-southern-thai-cuisine" />
                    </Grid.Column>
                    
                    <Grid.Column size="large" >
                        <Image src='https://i.imgur.com/1ra2qQr.jpg' circular fluid href="http://www.toasttab.com/andaman-southern-thai-cuisine" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        
            </div>
        )
    }
} export default HomePage
