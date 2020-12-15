let resturaunt = {
    name: 'Chicken World',
    guestCapacity: 100,
    guestCount: 30,
    checkAvalability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (incomingPartySize) {
        this.guestCount = this.guestCount + incomingPartySize
    },
    removeParty: function (outgoingPartySize) {
        this.guestCount = this.guestCount - outgoingPartySize
    }
}

// let seatParty = function(partyEnter) {
//     partyEnter + resturaunt.guestCount
// }

// let removeParty = function(partyLeave) {
//     resturaunt.guestCount - partyLeave
// }

resturaunt.seatParty(7)
resturaunt.seatParty(15)
resturaunt.seatParty (33)



console.log(resturaunt.guestCount)



console.log(resturaunt.checkAvalability(16));