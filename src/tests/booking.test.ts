import { HttpMethods } from '../helpers';
import { StatusCodes } from 'http-status-codes';

describe('Booking tests', () => {
	it.only('Create booking', async () => {
		const data = {
			firstname: 'Jim',
			lastname: 'Brown',
			totalprice: 111,
			depositpaid: true,
			bookingdates: {
				checkin: '2018-01-01',
				checkout: '2019-01-01'
			},
			additionalneeds: 'Breakfast'
		};
		const response = await HttpMethods.postRequest('/booking', data);
		const test = '';
	});

	it('Update booking', async () => {
		const bookings = await HttpMethods.getRequest('/booking');
	});

	it('Delete booking', async () => {
		const bookings = await HttpMethods.getRequest('/booking');
		const recordToBeDeleted = bookings.data.slice(-1);

		const recordBookingId = recordToBeDeleted[0].bookingid;
		const response = await HttpMethods.deleteRequest(`/booking/${recordBookingId}`);
		expect(response.status).toBe(StatusCodes.OK);
	});

	it('Get all booking', async () => {
		const bookings = await HttpMethods.getRequest('/booking');
		expect(bookings.status).toBe(StatusCodes.OK);
		expect(bookings.data.length).toBeGreaterThan(5);

		const record = bookings.data[0];
		expect(record.bookingid).toBeTruthy();
	});
});
