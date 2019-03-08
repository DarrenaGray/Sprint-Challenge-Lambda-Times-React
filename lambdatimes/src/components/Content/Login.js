import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }

      logIn = e => {
        e.preventDefault()
        localStorage.setItem('user', this.state.username);
        window.location.reload();

    }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
      render() {
        return (
          <div>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Login</ModalHeader>
              <ModalBody>
              <Form>
                    <FormGroup>
                        <Input 
                            type="username"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                            value={this.state.username}
                            required
                        />
                        <Input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value-={this.state.password}
                            required
                        />
                    </FormGroup>
                    <Button 
                        onClick={this.logIn}
                        type="submit">Login</Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
}


export default Login;