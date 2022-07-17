const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

//@desc     :Get user ticket
//@route    :GET /v1/api/tickets
//@access   :Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get Tickets" });
});

//@desc     :Create new ticket
//@route    :POST /v1/api/tickets
//@access   :Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get Tickets" });
});

module.exports = {
  getTickets,
  createTicket,
};