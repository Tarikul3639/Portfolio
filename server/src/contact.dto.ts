import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

/**
 * Data Transfer Object for handling contact form submissions.
 * Includes validation rules for each field.
 */
export class CreateContactDto {
    @IsString()
    @IsNotEmpty({ message: 'Name is required' })
    @MinLength(2, { message: 'Name must be at least 2 characters long' })
    @MaxLength(50, { message: 'Name cannot exceed 50 characters' })
    name!: string;

    @IsEmail({}, { message: 'Please provide a valid email address' })
    @IsNotEmpty({ message: 'Email is required' })
    email!: string;

    @IsString()
    @IsOptional() // Since company might not be mandatory
    @MaxLength(100, { message: 'Company name cannot exceed 100 characters' })
    company?: string;

    @IsString()
    @IsNotEmpty({ message: 'Message cannot be empty' })
    @MinLength(10, { message: 'Message should be at least 10 characters long' })
    @MaxLength(1000, { message: 'Message is too long (max 1000 characters)' })
    message!: string;
}