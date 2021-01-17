import React, { Component } from 'react';


class Teams extends React.Component {
    state = {
        isLoading: true,
        data: []
    }

    async componentDidMount() {
        const response = await fetch("http://api.football-data.org/v2/competitions/2021/teams", { headers: { 'X-Auth-Token': "a3b3685ba5fd4c8685be0540c85652f2" } })
        const data = await response.json()
        console.log(data)
        this.setState({
            isLoading: false,
            data: data.teams
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Команда</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><a href="./teams">{item.name}</a></td>
                            <td>{item.area.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Teams