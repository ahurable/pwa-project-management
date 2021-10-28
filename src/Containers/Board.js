import React from 'react';
import styled from 'styled-components';
import Lane from '../Components/Lane/Lane';
import withData from '../withData';
const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tickets: []
    }
  }

  // onDragStart binds to onDragStart of element that we wanna move it around the enviroment
  // and it will be called whenever we clicked on element and draged it.
  // here when client started by dragging the element we will store the element id inside dataTrasfer.
  
  onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  // onDrop function is belong to the parent component that we want to drop our ticket like LaneWrapper
  // component then we call this function to handel the onDrop event;

  onDrop = (e, laneId) => {
    const id = e.dataTransfer.getData('id');

    const tickets = this.state.tickets.filter(ticket=>{
      if (ticket.id === parseInt(id)) {
        ticket.lane = laneId;
      }
      return ticket;
    });

    this.setState({
      tickets: tickets
    })
  }

  componentDidUpdate(pervProps) {
    if (pervProps.data !== this.props.data) {
      this.setState({
        tickets: this.props.data
      })
    }
  }

  render(){
    const {lanes, loading, error} = this.props;
    return (
    <BoardWrapper>
      {lanes.map((lane) => 
        <Lane key={lane.id} title={lane.name} laneId={lane.id} onDrop={this.onDrop} onDragOver={this.onDragOver} onDragStart={this.onDragStart} tickets={this.state.tickets.filter(tickets => lane.id === tickets.lane)} loading={loading} error={error} />
      )}
    </BoardWrapper>
    )
  }
}

export default withData(Board);