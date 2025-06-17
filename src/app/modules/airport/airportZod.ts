import { z } from 'zod';

export const createAirportSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  IATAcode: z.string().optional(),
  cityId: z
    .string({
      required_error: 'City ID is required',
    })
    .uuid('City ID must be a valid UUID'),
  stateId: z.string().uuid('State ID must be a valid UUID').optional(),

  address: z.string().min(5, 'Address is required'),
  timezone: z.string().min(1, 'Timezone is required'),
  phoneNumber: z.string().optional().nullable(),
  countryId: z
    .string({
      required_error: 'Country ID is required',
    })
    .uuid('Country ID must be a valid UUID'),
});

export const updateAirportSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  IATAcode: z.string().min(2, 'IATAcode must be at least 2 characters').optional(),
  cityId: z.string().uuid('City ID must be a valid UUID').optional(),
  stateId: z.string().uuid('State ID must be a valid UUID').optional(),
  address: z.string().min(5, 'Address is required').optional(),
  timezone: z.string().min(1, 'Timezone is required').optional(),
  phoneNumber: z.string().optional().nullable(),
  countryId: z.string().uuid('Country ID must be a valid UUID').optional(),
});
