// import React from 'react';
// import Contact from './contact';

// class ContactsList extends React.Component {
//     constructor(props) {
//     super(props)
//     this.state = {
//         search: '',
//         contacts: props.contacts
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.addContact = this.addContact.bind(this);
//     }

//     addContact(event) {
//         let id = Math.floor((Math.random() * 100) + 1);
//         let name = this.refs.name.value;
//         let phone = this.refs.phone.value;
//         event.preventDefault();
//         this.setState({
//             contacts: this.state.contacts.concat({id, name, phone})
//         })
//         this.refs.name.value = '';
//         this.refs.phone.value = ''
//     }

//     handleChange(e) {
//         this.setState({
//             search: e.target.value
//         })
//     }   

//     render() {
//         let makeItChange = this.state.contacts.filter(
//             (person) => {
//                 return person.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
//             }
//         )

//         return (
//             <div>
//                 <div>
//                     <input onChange={this.handleChange}type="text" value={this.state.search} placeholder="Search by Name" />
//                     <form onSubmit={this.addContact}>
//                         <input type="text" ref="name" />
//                         <input type="text" ref="phone" />
//                         <button type="submit">Add Contact </button>
//                     </form>
//                 </div>
//                 <ul>
//                     {
//                         makeItChange.map((contact) => {
//                             return <Contact contact={contact} key={contact.id}/>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// export default ContactsList;