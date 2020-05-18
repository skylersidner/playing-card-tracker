const suits = [
  {
    name: 'Hearts',
    icon: 'H'
  },
  {
    name: 'Spades',
    icon: 'S'
  },
  {
    name: 'Diamonds',
    icon: 'D'
  },
  {
    name: 'Clubs',
    icon: 'C'
  }
]

const ranks = [
  {
    name: 'Ace',
    value: 1,
    character: 'A'
  },
  {
    name: 'Two',
    value: 2,
    character: '2'
  },
  {
    name: 'Three',
    value: 3,
    character: '3'
  },
  {
    name: 'Four',
    value: 4,
    character: '4'
  },
  {
    name: 'Five',
    value: 5,
    character: '5'
  },
  {
    name: 'Six',
    value: 6,
    character: '6'
  },
  {
    name: 'Seven',
    value: 7,
    character: '7'
  },
  {
    name: 'Eight',
    value: 8,
    character: '8'
  },
  {
    name: 'Nine',
    value: 9,
    character: '9'
  },
  {
    name: 'Ten',
    value: 10,
    character: '10'
  },
  {
    name: 'Jack',
    value: 11,
    character: 'J'
  },
  {
    name: 'Queen',
    value: 12,
    character: 'Q'
  },
  {
    name: 'King',
    value: 13,
    character: 'K'
  }
]


let cardSuit, cardRank

// jquery initialization function
$(function() {

  function selectCell(cell) {
    cell.addClass('selected')
  }

  function deselectCell(cell) {
    cell.removeClass('selected')
  }

  function toggleSelectedCell(cell) {
    cell.hasClass('selected')
      ? deselectCell(cell)
      : selectCell(cell)
  }

  function getCell(suit, rank) {
    const cell = $('<td></td>').text(`${rank.character} ${suit.icon}`)
    cell.on('click', () => toggleSelectedCell(cell))
    return cell
  }

  function getTrackingRow(suit) {
    const row = $('<tr></tr>')
    const rowCells = ranks.map(rank => {
      return getCell(suit, rank)
    })

    const suitName = suit.name
    if (suitName === 'Diamonds' || suitName === 'Hearts') {
      row.addClass('alt-color')
    }

    row.append(...rowCells)
    return row
  }

  function buildTrackingTable() {
    const trackingTableWrapper = $('#tracking-table-wrapper')
    const trackingTable = $('<table id="tracking-table"></table>')
    const rows = suits.map(suit => getTrackingRow(suit))

    trackingTable.append(...rows)

    trackingTableWrapper.append(trackingTable)
  }

  function resetTable() {
    const cells = $('td')
    deselectCell(cells)
  }

  function bindResetButton() {
    $('#reset').on('click', () => resetTable())
  }

  buildTrackingTable()
  bindResetButton()
})
