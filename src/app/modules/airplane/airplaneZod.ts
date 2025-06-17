import { z } from 'zod';

export const createAirplaneSchema = z.object({
  registrationCode: z
    .string({ required_error: 'Registration code is required.' })
    .min(1, 'Registration code cannot be empty.')
    .max(10, 'Registration code cannot exceed 10 characters.'),

  model: z
    .string({ required_error: 'Airplane model is required.' })
    .min(1, 'Model name cannot be empty.')
    .max(25, 'Model name cannot exceed 25 characters.'),

  year: z
    .number({ required_error: 'Manufacturing year is required.' })
    .int('Year must be an integer.')
    .gte(1900, 'Year must be a valid number greater than or equal to 1900.'),

  seats: z
    .number({ required_error: 'Number of seats is required.' })
    .int('Seats must be an integer.')
    .gte(10, 'Seats must be at least 10.'),

  capacity: z
    .number({ required_error: 'Capacity is required.' })
    .int('Capacity must be an integer.')
    .gte(10, 'Capacity must be at least 10.'),

  manufacturer: z
    .string({ required_error: 'Manufacturer name is required.' })
    .min(1, 'Manufacturer name cannot be empty.'),

  engineType: z
    .string({ required_error: 'Engine type is required.' })
    .min(1, 'Engine type cannot be empty.'),

  type: z.enum(['Passenger', 'Cargo', 'Private', 'Military'], {
    required_error: 'Airplane type is required.',
  }),

  status: z.enum(['Active', 'Inactive', 'InMaintenance', 'Retired'], {
    required_error: 'Airplane status is required.',
  }),

  rangeKm: z
    .number({ required_error: 'Range is required.' })
    .int('Range must be an integer.')
    .gte(1000, 'Range must be at least 1000 km.'),

  speedKmph: z
    .number({ required_error: 'Speed is required.' })
    .int('Speed must be an integer.')
    .gte(300, 'Speed must be at least 300 km/h.'),

  isWideBody: z.boolean({ required_error: 'Wide-body flag is required.' }),

  seatConfiguration: z.record(z.string(), z.number().int().gte(0)).default({}),

  photoUrl: z
    .string({ required_error: 'Photo URL is required.' })
    .url('Invalid URL format for photo.'),

  airlineId: z
    .string({ required_error: 'Airline ID is required.' })
    .uuid('Invalid airline ID format. Please provide a valid UUID.'),
});
export const updateAirplaneSchema = z.object({
  registrationCode: z.string().min(1).max(10).optional(),

  model: z.string().min(1, 'Model name cannot be empty.').max(25).optional(),

  year: z.number().int('Year must be an integer.').gte(1900).optional(),

  seats: z.number().int('Seats must be an integer.').gte(1).optional(),

  capacity: z.number().int('Capacity must be an integer.').gte(1).optional(),

  manufacturer: z.string().min(1).optional(),

  engineType: z.string().min(1).optional(),

  type: z.enum(['Passenger', 'Cargo', 'Private', 'Military']).optional(),

  status: z.enum(['Active', 'Inactive', 'InMaintenance', 'Retired']).optional(),

  rangeKm: z.number().int().gte(1000).optional(),

  speedKmph: z.number().int().gte(300).optional(),

  isWideBody: z.boolean().optional(),

  seatConfiguration: z.record(z.string(), z.number().int().gte(0)).optional(),

  photoUrl: z.string().url().optional(),

  airlineId: z.string().uuid('Invalid airline ID format.').optional(),
});
