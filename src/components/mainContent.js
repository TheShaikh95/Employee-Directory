import React from 'react';
import Employees from '../Utilities/api';
import './styles.css';


class EmployeeTable extends React.Component {

    state = {
        employees: [],
        sortNameAscending: true,
        searchTearm: null
    }

    componentDidMount() {
        Employees().then(result => {
            let extracted = [];
            result.forEach(element => {
                extracted.push({
                    name: element.name.first + ' ' + element.name.last,
                    profile: element.picture.large,
                    email: element.email,
                    phone: element.phone,
                    dob: element.dob.date
                });
            });
            this.setState({
                employees: extracted
            });
        }).catch(err => {
            console.log(err);
        });
    }

    showEmployeeInfo() {
        return this.state.employees.sort(this.sortOrder.bind(this)).map((element, index) => {
            if (element.name.toLowerCase().includes(this.state.searchTearm) || this.state.searchTearm === null) {
                return(
                    <tr key={index}>
                        <td className="uk-text-center">
                            <img className="uk-preserve-width uk-border-circle" src={element.profile} width="40" alt=""/>
                        </td>
                        <td className="uk-text-center">{element.name}</td>
                        <td className="uk-text-center uk-table-link">
                            <a className="uk-link-reset" href={'mailto:' + element.email}>{element.email}</a>
                        </td>
                        <td className="uk-text-center">{(new Date(element.dob)).toDateString()}</td>
                        <td className="uk-text-center uk-table-link">
                            <a className="uk-link-reset" href={'tel:' + element.phone}>{element.phone}</a>
                        </td>
                    </tr>
                );
            } else return <tr key={index}></tr>;
        });
    }

    search(input) {
        this.setState({
            searchTearm: input.target.value.toLowerCase()
        });
    }

    sort(feild) {
        if (!this.state.sortNameAscending) feild.target.innerText = `Name [A-Z]`;
        else feild.target.innerText = `Name [Z-A]`;
        const sortOrder = !this.state.sortNameAscending;
        this.setState({
            sortNameAscending: sortOrder
        });
    }

    sortOrder(a, b) {
        if (a.name < b.name) return this.state.sortNameAscending ? -1 : 1;
        else if (a.name > b.name) return this.state.sortNameAscending ? 1 : -1;
        return 0;
    }

    render() {
        return(
            <>
                <div id="Search" className="uk-box-shadow-small uk-box-shadow-hover-medium uk-search uk-search-navbar uk-background-muted uk-border-rounded">
                    <span data-uk-search-icon></span>
                    <input onInput={this.search.bind(this)} className="uk-search-input" type="search" placeholder="Search..."/>
                </div>
                <div id="EmployeeTable">
                    <div className="uk-box-shadow-small uk-overflow-auto">
                        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                            <thead>
                                <tr>
                                    <th className="uk-text-center">Profile</th>
                                    <th onClick={this.sort.bind(this)} className="hover-cursor uk-text-center">Name [A-Z]</th>
                                    <th className="uk-text-center">Email</th>
                                    <th className="uk-text-center">Date Of Birth</th>
                                    <th className="uk-text-center">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.showEmployeeInfo()} 
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default EmployeeTable;