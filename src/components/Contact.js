import React from 'react'
import "../componentCSS/Contact.css"
import { FormControl,createTheme,ThemeProvider,TextField, Button} from '@material-ui/core';


const theme = createTheme({
    palette: {
      primary: {
        main: "#DC3D24",
      },
      secondary: {
        main: "#DC3D24",
      },
    },

  });
 
  
export default function Contact() {
    return (
        <div id="CONTACT" className="top-div-contact-form">
            <h1 className="heading heading-contact">CONTACT </h1>
            <h2 className="heading heading-details">we will contact you within "2" working hrs</h2>
            <div className="materila-ui">
                <form  className="contact-materialul-div" action="https://formsubmit.co/sabitha.co.in@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="https://sabitha.in/"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <ThemeProvider theme={theme}>
                    <div className="material-ui-input-fields-div">
                        <FormControl fullWidth>
                            <TextField   name="name" className="hi" id="outlined-required" label="Name" variant="outlined" required />
                        </FormControl>
                    </div>
                    <div className="material-ui-input-fields-div">
                        <FormControl fullWidth >
                            <TextField name="phone" className="hi" id="outlined-required" label="Phone Number" variant="outlined" required/>
                        </FormControl>
                    </div>
                    <div className="material-ui-input-fields-div">
                        <FormControl fullWidth >
                            <TextField name="E-mail" className="hi" id="outlined-required" label="Email address" variant="outlined" />
                        </FormControl>  
                    </div>

                    <div className="material-ui-form-button">
                        <Button  variant="outlined" color="primary" type="submt" size="large" >Submit</Button>
                    </div>
                    
                    </ThemeProvider>
                </form>
            </div>
             
        </div>
    )
}
