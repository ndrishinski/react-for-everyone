import React from 'react';
import Contact from './contact';

class ContactList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            contacts: props.contacts
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let id = Math.floor((Math.random() * 100) + 8);
        let name = this.refs.name.value;
        let phone = this.refs.phone.value;
        e.preventDefault();
        this.setState({
            contacts: this.state.contacts.concat({id, name, phone})
        })
        this.refs.name.value = '';
        this.refs.phone.value = '';
    }

    handleChange(e) {
        this.setState({
            search: e.target.value
        })
    }

    render() {

        let newWay = this.state.contacts.filter(
            (contact) => {
               return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )

        return (
            <div>
                <input onChange={this.handleChange} type="text" placeholder="Search" value={this.state.search} />
                <h2>Add to List</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="name" ref="name" />
                    <input type="text" placeholder="phone" ref="phone" />
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {newWay.map((contact) => {
                        return <Contact contact={contact} key={contact.id} />
                    })}
                </ul>
            </div>
        )
    }
}

export default ContactList;