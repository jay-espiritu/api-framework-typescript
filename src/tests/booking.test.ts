import { HttpMethods } from '../helpers';
import { StatusCodes } from 'http-status-codes';

describe('Booking tests', () => {
	it('Create booking', async () => {
		const response = await HttpMethods.postRequest('/booking');
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
