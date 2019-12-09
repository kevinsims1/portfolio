import React, { Component } from 'react';

class Contact extends Component {
    render(){
        return(
            <>
            <main id="contact">
            <h1 className="lg-heading">
                Contact <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
               This is how you can reach me...
            </h2>

            <div className="boxes">
                <div>
                    <span className="text-secondary">Email:</span>Kevindsims1@gmail.com
                </div>
                
                <div>
                    <span className="text-secondary">Phone:</span>714-271-0309
                </div>
            </div>
            </main>
            <footer id="main-footer">
             Copyright &copy; 2019
            </footer>
            </>
        )
    }
}

export default Contact;