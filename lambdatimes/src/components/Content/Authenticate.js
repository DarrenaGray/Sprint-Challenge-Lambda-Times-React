import React from 'react';

const Authenticate = App =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        
    componentDidMount() {
        console.log('CDM')
        if (localStorage.getItem('user')) {
            console.log('PostPage')
            this.setState({loggedIn: true})
        } else {
            console.log('Login')
            this.setState({loggedIn: false})
        }
    }

    render() {
        if (this.state.loggedIn) {
            return <App />
        }
    }

    };


export default Authenticate;