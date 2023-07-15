import { useDispatch, useSelector } from 'react-redux'
import { confirm } from './store/ticketSlice'
import { useState } from 'react'
import styled from 'styled-components'
import backgroundImageUrl from './banner.png';
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  &::before,
  &:checked::before {
    background-color: ${(props) => !props.remove && 'white !important'}
`

function App() {
  const dispatch = useDispatch()

  const tickets = useSelector((state) => state.tickets)

  const selectedSeats = tickets.map((ticket) => ticket.seats).flat()

  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)
  const [seats, setSeats] = useState([])

  const handleChange = (e) => {
    const { value, checked } = e.target

    if (seats.length >= number && checked) {
      e.target.checked = false
      return
    }

    if (checked) {
      setSeats((prev) => [...prev, value])
    } else {
      setSeats((prev) => prev.filter((seat) => seat !== value))
    }
  }

  const isValidUserName = (userName) => {
    return /^[^\d][a-zA-Z0-9]+$/.test(userName)
  }

  const [isConditionMet, setIsConditionMet] = useState(false)

  const handleButtonClick = (event) => {
    const isValid = isValidUserName(name)
    if (isValid === true && number > 0) {
      setIsConditionMet(true)
    } else {
      setNumber(0)
      setIsConditionMet(false)
    }
  }

  const handleClick = () => {
    dispatch(
      confirm({
        name,
        number: parseInt(number),
        seats,
      })
    )
    setName('')
    setNumber(0)
    setSeats([])
    setIsConditionMet(false)
  }

  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
   
  };
  return (
    <>
      <div style={divStyle}>
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            <div className="inputForm">
              <h2>fill the required details below and select your seat/s</h2>
              <div className="mr_agilemain">
                <div className="agileits-left">
                  <label>
                    Name
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="Username"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="John Max"
                  />
                </div>
                <div className="agileits-right">
                  <label>
                    Number of Seats
                    <span>*</span>
                  </label>
                  <input
                    type="number"
                    id="Numseats"
                    required
                    min="1"
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                    value={number}
                  />
                </div>
              </div>
              <button onClick={handleButtonClick}>Start Selecting</button>
              {isConditionMet ? <p style={{color:'white'}}>Điều kiện được đáp ứng</p> : <p style={{color:'white'}}>Điều kiện không được đáp ứng</p>}
            </div>

            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>

              <li className="smallBox redBox">Reserved Seat</li>

              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
            <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
              <table id="seatsBlock">
                <p id="notification"></p>
                <tr>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td></td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A1"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A1') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A1')
                      }
                      disabled={selectedSeats.includes('A1')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A2"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A2') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A2')
                      }
                      disabled={selectedSeats.includes('A2')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A3"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A3') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A3')
                      }
                      disabled={selectedSeats.includes('A3')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A4"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A4') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A4')
                      }
                      disabled={selectedSeats.includes('A4')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A5"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A5') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A5')
                      }
                      disabled={selectedSeats.includes('A5')}
                    />
                  </td>
                  <td className="seatGap"></td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A6"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A6') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A6')
                      }
                      disabled={selectedSeats.includes('A6')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A7"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A7') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A7')
                      }
                      disabled={selectedSeats.includes('A7')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A8"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A8') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A8')
                      }
                      disabled={selectedSeats.includes('A8')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A9"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A9') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A9')
                      }
                      disabled={selectedSeats.includes('A9')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A10"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A10') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A10')
                      }
                      disabled={selectedSeats.includes('A10')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A11"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A11') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A11')
                      }
                      disabled={selectedSeats.includes('A11')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="A12"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('A12') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('A12')
                      }
                      disabled={selectedSeats.includes('A12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>B</td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B1"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B1') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B1')
                      }
                      disabled={selectedSeats.includes('B1')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B2"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B2') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B2')
                      }
                      disabled={selectedSeats.includes('B2')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B3"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B3') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B3')
                      }
                      disabled={selectedSeats.includes('B3')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B4"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B4') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B4')
                      }
                      disabled={selectedSeats.includes('B4')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B5"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B5') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B5')
                      }
                      disabled={selectedSeats.includes('B5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B6"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B6') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B6')
                      }
                      disabled={selectedSeats.includes('B6')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B7"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B7') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B7')
                      }
                      disabled={selectedSeats.includes('B7')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B8"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B8') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B8')
                      }
                      disabled={selectedSeats.includes('B8')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B9"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B9') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B9')
                      }
                      disabled={selectedSeats.includes('B9')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B10"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B10') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B10')
                      }
                      disabled={selectedSeats.includes('B10')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B11"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B11') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B11')
                      }
                      disabled={selectedSeats.includes('B11')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="B12"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('B12') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('B12')
                      }
                      disabled={selectedSeats.includes('B12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>C</td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C1"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C1') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C1')
                      }
                      disabled={selectedSeats.includes('C1')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C2"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C2') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C2')
                      }
                      disabled={selectedSeats.includes('C2')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C3"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C3') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C3')
                      }
                      disabled={selectedSeats.includes('C3')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C4"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C4') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C4')
                      }
                      disabled={selectedSeats.includes('C4')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C5"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C5') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C5')
                      }
                      disabled={selectedSeats.includes('C5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C6"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C6') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C6')
                      }
                      disabled={selectedSeats.includes('C6')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C7"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C7') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C7')
                      }
                      disabled={selectedSeats.includes('C7')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C8"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C8') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C8')
                      }
                      disabled={selectedSeats.includes('C8')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C9"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C9') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C9')
                      }
                      disabled={selectedSeats.includes('C9')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C10"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C10') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C10')
                      }
                      disabled={selectedSeats.includes('C10')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C11"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C11') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C11')
                      }
                      disabled={selectedSeats.includes('C11')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="C12"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('C12') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('C12')
                      }
                      disabled={selectedSeats.includes('C12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>D</td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D1"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D1') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D1')
                      }
                      disabled={selectedSeats.includes('D1')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D2"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D2') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D2')
                      }
                      disabled={selectedSeats.includes('D2')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D3"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D3') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D3')
                      }
                      disabled={selectedSeats.includes('D3')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D4"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D4') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D4')
                      }
                      disabled={selectedSeats.includes('D4')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D5"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D5') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D5')
                      }
                      disabled={selectedSeats.includes('D5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D6"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D6') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D6')
                      }
                      disabled={selectedSeats.includes('D6')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D7"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D7') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D7')
                      }
                      disabled={selectedSeats.includes('D7')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D8"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D8') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D8')
                      }
                      disabled={selectedSeats.includes('D8')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D9"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D9') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D9')
                      }
                      disabled={selectedSeats.includes('D9')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D10"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D10') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D10')
                      }
                      disabled={selectedSeats.includes('D10')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D11"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D11') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D11')
                      }
                      disabled={selectedSeats.includes('D11')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="D12"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('D12') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('D12')
                      }
                      disabled={selectedSeats.includes('D12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>E</td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E1"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E1') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E1')
                      }
                      disabled={selectedSeats.includes('E1')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E2"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E2') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E2')
                      }
                      disabled={selectedSeats.includes('E2')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E3"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E3') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E3')
                      }
                      disabled={selectedSeats.includes('E3')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E4"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E4') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E4')
                      }
                      disabled={selectedSeats.includes('E4')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E5"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E5') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E5')
                      }
                      disabled={selectedSeats.includes('E5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E6"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E6') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E6')
                      }
                      disabled={selectedSeats.includes('E6')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E7"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E7') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E7')
                      }
                      disabled={selectedSeats.includes('E7')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E8"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E8') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E8')
                      }
                      disabled={selectedSeats.includes('E8')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E9"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E9') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E9')
                      }
                      disabled={selectedSeats.includes('E9')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E10"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E10') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E10')
                      }
                      disabled={selectedSeats.includes('E10')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E11"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E11') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E11')
                      }
                      disabled={selectedSeats.includes('E11')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="E12"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('E12') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('E12')
                      }
                      disabled={selectedSeats.includes('E12')}
                    />
                  </td>
                </tr>

                <tr className="seatVGap"></tr>

                <tr>
                  <td>F</td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F1"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F1') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F1')
                      }
                      disabled={selectedSeats.includes('F1')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F2"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F2') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F2')
                      }
                      disabled={selectedSeats.includes('F2')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F3"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F3') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F3')
                      }
                      disabled={selectedSeats.includes('F3')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F4"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F4') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F4')
                      }
                      disabled={selectedSeats.includes('F4')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F5"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F5') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F5')
                      }
                      disabled={selectedSeats.includes('F5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F6"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F6') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F6')
                      }
                      disabled={selectedSeats.includes('F6')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F7"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F7') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F7')
                      }
                      disabled={selectedSeats.includes('F7')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F8"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F8') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F8')
                      }
                      disabled={selectedSeats.includes('F8')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F9"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F9') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F9')
                      }
                      disabled={selectedSeats.includes('F9')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F10"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F10') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F10')
                      }
                      disabled={selectedSeats.includes('F10')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F11"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F11') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F11')
                      }
                      disabled={selectedSeats.includes('F11')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="F12"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('F12') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('F12')
                      }
                      disabled={selectedSeats.includes('F12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>G</td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G1"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G1') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G1')
                      }
                      disabled={selectedSeats.includes('G1')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G2"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G2') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G2')
                      }
                      disabled={selectedSeats.includes('G2')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G3"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G3') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G3')
                      }
                      disabled={selectedSeats.includes('G3')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G4"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G4') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G4')
                      }
                      disabled={selectedSeats.includes('G4')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G5"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G5') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G5')
                      }
                      disabled={selectedSeats.includes('G5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G6"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G6') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G6')
                      }
                      disabled={selectedSeats.includes('G6')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G7"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G7') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G7')
                      }
                      disabled={selectedSeats.includes('G7')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G8"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G8') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G8')
                      }
                      disabled={selectedSeats.includes('G8')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G9"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G9') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G9')
                      }
                      disabled={selectedSeats.includes('G9')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G10"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G10') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G10')
                      }
                      disabled={selectedSeats.includes('G10')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G11"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G11') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G11')
                      }
                      disabled={selectedSeats.includes('G11')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="G12"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('G12') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('G12')
                      }
                      disabled={selectedSeats.includes('G12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>H</td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H1"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H1') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H1')
                      }
                      disabled={selectedSeats.includes('H1')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H2"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H2') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H2')
                      }
                      disabled={selectedSeats.includes('H2')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H3"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H3') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H3')
                      }
                      disabled={selectedSeats.includes('H3')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H4"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H4') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H4')
                      }
                      disabled={selectedSeats.includes('H4')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H5"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H5') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H5')
                      }
                      disabled={selectedSeats.includes('H5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H6"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H6') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H6')
                      }
                      disabled={selectedSeats.includes('H6')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H7"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H7') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H7')
                      }
                      disabled={selectedSeats.includes('H7')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H8"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H8') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H8')
                      }
                      disabled={selectedSeats.includes('H8')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H9"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H9') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H9')
                      }
                      disabled={selectedSeats.includes('H9')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H10"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H10') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H10')
                      }
                      disabled={selectedSeats.includes('H10')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H11"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H11') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H11')
                      }
                      disabled={selectedSeats.includes('H11')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="H12"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('H12') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('H12')
                      }
                      disabled={selectedSeats.includes('H12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>I</td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I1"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I1') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I1')
                      }
                      disabled={selectedSeats.includes('I1')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I2"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I2') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I2')
                      }
                      disabled={selectedSeats.includes('I2')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I3"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I3') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I3')
                      }
                      disabled={selectedSeats.includes('I3')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I4"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I4') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I4')
                      }
                      disabled={selectedSeats.includes('I4')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I5"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I5') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I5')
                      }
                      disabled={selectedSeats.includes('I5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I6"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I6') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I6')
                      }
                      disabled={selectedSeats.includes('I6')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I7"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I7') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I7')
                      }
                      disabled={selectedSeats.includes('I7')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I8"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I8') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I8')
                      }
                      disabled={selectedSeats.includes('I8')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I9"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I9') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I9')
                      }
                      disabled={selectedSeats.includes('I9')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I10"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I10') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I10')
                      }
                      disabled={selectedSeats.includes('I10')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I11"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I11') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I11')
                      }
                      disabled={selectedSeats.includes('I11')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="I12"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('I12') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('I12')
                      }
                      disabled={selectedSeats.includes('I12')}
                    />
                  </td>
                </tr>

                <tr>
                  <td>J</td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J1"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J1') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J1')
                      }
                      disabled={selectedSeats.includes('J1')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J2"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J2') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J2')
                      }
                      disabled={selectedSeats.includes('J2')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J3"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J3') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J3')
                      }
                      disabled={selectedSeats.includes('J3')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J4"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J4') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J4')
                      }
                      disabled={selectedSeats.includes('J4')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J5"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J5') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J5')
                      }
                      disabled={selectedSeats.includes('J5')}
                    />
                  </td>
                  <td></td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J6"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J6') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J6')
                      }
                      disabled={selectedSeats.includes('J6')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J7"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J7') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J7')
                      }
                      disabled={selectedSeats.includes('J7')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J8"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J8') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J8')
                      }
                      disabled={selectedSeats.includes('J8')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J9"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J9') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J9')
                      }
                      disabled={selectedSeats.includes('J9')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J10"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J10') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J10')
                      }
                      disabled={selectedSeats.includes('J10')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J11"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J11') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J11')
                      }
                      disabled={selectedSeats.includes('J11')}
                    />
                  </td>
                  <td>
                    <StyledCheckbox
                      type="checkbox"
                      className="seats"
                      value="J12"
                      onChange={(e) => handleChange(e)}
                      remove={
                        (seats.includes('J12') && Boolean(seats.length <= number)) ||
                        selectedSeats.includes('J12')
                      }
                      disabled={selectedSeats.includes('J12')}
                    />
                  </td>
                </tr>
              </table>

              <div className="screen">
                <h2 className="wthree">Screen this way</h2>
              </div>
              <button onClick={handleClick}>Confirm Selection</button>
            </div>

            <div className="displayerBoxes txt-center" style={{ overflowX: 'auto' }}>
              <table className="Displaytable w3ls-table" width="100%">
                <tr>
                  <th>Name</th>
                  <th>Number of Seats</th>
                  <th>Seats</th>
                </tr>
                {tickets.map((ticket) => (
                  <tr>
                    <td>{ticket.name}</td>
                    <td>{ticket.number}</td>
                    <td>{ticket.seats.map((item) => `${item}`)}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
