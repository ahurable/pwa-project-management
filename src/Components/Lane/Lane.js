import React, {useState} from 'react';
import styled from 'styled-components';

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: #0bb081;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  color: white;
  border-bottom: 3px solid white;
`;

const TicketWrapper = styled.div`
  padding: 5px;
`;

const Alert = styled.div`
  background-color: white;
  color: red;
  padding: 10px;
`;

const Ticket = ({ticketContent, body, ticketId, onDragStart}) => {

  const [displaySt, setDisplay] = useState('none');
  const click = () => {
    if (displaySt === "none" ){
      setDisplay('block');
    } else {
      setDisplay("none");
    }
  }
  return (
    <div style={{
      backgroundColor: 'white',
      color: '#0bb081',
      padding: '10px',
      borderRadius: '3px',
      marginBottom: '5px',
      cursor: 'pointer'
    }}
    draggable 
    onDragStart={e => onDragStart(e, ticketId)}
    onClick={click}>
      <p style={{fontSize: '18px'}}>{ticketContent}</p>
      <br/>
      <span style={{display: displaySt}}>{body}</span>
    </div>
  );
}

const Lane = ({ title, laneId, onDrop, error, tickets, loading, onDragStart, onDragOver }) => (
  <LaneWrapper onDragOver={onDragOver} onDrop={e => onDrop(e, laneId)}>
    <Title>{title}</Title>
    <TicketWrapper >
      { (loading || error) && <Alert>{ loading ? 'loading...' : error }</Alert> }
      { tickets.map(ticket => <Ticket key={ticket.id} ticketId={ticket.id} onDragStart={onDragStart} ticketContent={ticket.title} body={ticket.body}/>) }
    </TicketWrapper>
  </LaneWrapper>
);

export default Lane;