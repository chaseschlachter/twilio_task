const Event = require('../models/event');
const Guest = require('../models/guest');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const router = require('../routes/events');
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
const catchAsync = require('../utils/catchAsync');
const dayjs = require('dayjs')
const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
const moment = require("moment");
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


module.exports.showEvent = async (req, res) => {
	const event = await Event.findById(req.params.id).populate('artist');
    const { guest_id } = req.cookies;
    const eventIdCookie = req.cookies.event_id;
    let totalGuests = 0;
	let attendedGuests = 0;
	const eventData = await Event.aggregate([
		{
			"$match": {
				"_id": objectId(req.params.id)
			}
		},
		{
			$project: {
				_id: 1,
				name: 1,
				guests: 1,
				totalGuests: { $cond: { if: { $isArray: "$guests" }, then: { $size: "$guests" }, else: "NA" } },
				attendedGuests: {
					$size: {
						$filter: {
							input: "$guests",
							as: "guest",
							cond: {
								$and: [{
									$eq: ["$$guest.attended", "Y"]
								}]
							}
						}
					}
				}
			}
		}
	])
	if (eventData && Array.isArray(eventData) && eventData.length > 0) {
		totalGuests = eventData[0].totalGuests;
		attendedGuests = eventData[0].attendedGuests;
	}
	if (!event) {
		req.flash('error', 'Cannot find that Event');
		return res.redirect('/events');
	}
    const guestSignups = JSON.stringify(totalGuests);
    const guestAttends = JSON.stringify(attendedGuests);
    const date = Date().toString();
    const currentDateParse = Date.parse(date);
    const trigger = Date.parse(event.event_start) + 1000 * 10// this is just ten seconds after event start for the moment
    res.render('events/show', { event, guestAttends, guestSignups, currentDateParse, eventIdCookie, trigger });
};
