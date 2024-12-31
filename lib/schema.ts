import { z } from "zod"

export const MemberStatusSchema = z.enum(['ACTIVE', 'ONHOLD', 'CLOSED']);
export const PriorityTypeSchema = z.enum(['LOW', 'MEDIUM', 'HIGH']);
export const GenderTypeSchema = z.enum(['MALE', 'FEMALE', 'OTHERS'])

// Member Zod Schema
export const MemberSchema = z.object({
    MemberID: z.string().min(1, { message: "MemberID is required" }),
    FullName: z.string().min(1, { message: "Full Name is required" }),
    PhoneNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
    Email: z.string().email({ message: "Invalid email address" }),
    PresentAddress: z.string().optional(),
    PermanentAddress: z.string().optional(),
    Country: z.string().min(1, { message: "Country is required" }),
    Profession: z.string().optional(),
    Status: MemberStatusSchema.default('ACTIVE').optional(),
    Gender: GenderTypeSchema.default('MALE').refine(value => value !== undefined, {
        message: "Gender is required"
    }),
    Priority: PriorityTypeSchema,
    Rfid: z.string().min(1, { message: "RFID is required" }),
    IsCheckIn: z.boolean(),
    MaxGuestAllow: z.number().int().min(0).optional()
});

export const GuestSchema = z.object({
    MemberVisitID: z.number(),
    FullName: z.string().min(1, { message: "Full Name is required" }),
    PhoneNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
    Rfid: z.string().min(1, { message: "RFID is required" }),
})

export const ManualCheckInSchema = z.object({
    FullName: z.string().optional(),
    PhoneNo: z.string().optional(),
    Email: z.string().optional(),
})

const GuestInEventSchema = z.object({
    FullName: z.string().min(1, { message: "Full Name is required" }),
    PhoneNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
})

export const EventSchema = z.object({
    Title: z.string().min(1, { message: "Title is required" }),
    MemberInfoID: z.string().min(1, { message: "MemberInfoID is required" }),
    Date: z.string().min(1, { message: "Date is required" }),
    TotalGuestCount: z.number().int().min(0),
    PresentGuestCount: z.number().int().min(0).default(0),
    StartTime: z.string().min(1, { message: "Start Time is required" }),
    EndTime: z.string().min(1, { message: "End Time is required" }),
    EventDuration: z.number(),
    Summary: z.string().min(1, { message: "Summary is required" }),
    Guests: z.array(GuestInEventSchema)
})