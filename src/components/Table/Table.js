import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

class Table extends React.Component {
    state = {
        isLoading: true,
        data: [],
        id:0
    }

    async componentDidMount() {
        const response = await fetch("https://api.football-data.org/v2/competitions", { headers: { 'X-Auth-Token': "a3b3685ba5fd4c8685be0540c85652f2" } })
        const data = await response.json()
        console.log(data)
        this.setState({
            isLoading: false,
            data: data.competitions
        })
    }

    HandleClick(e,id="Вася"){
               
        console.log(id)
        e.preventDefault()
        
        //return this.render.return(<Redirect to="/teams" />)
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ligue</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><a href="./teams"  onClick={(e)=>this.HandleClick(e,item.id)}>{item.name}</a></td>
                            <td>{item.area.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Table

/* export default props => (
    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Ligue</th>
            </tr>
        </thead>
        <tbody>
            { props.data.map(item =>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><a href="https://www.youtube.com/">{item.name}</a></td>
                    <td>{item.area.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
)
 */


