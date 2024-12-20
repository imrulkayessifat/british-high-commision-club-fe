export interface Member {
    id?: number;
    MemberID: string;
    FullName: string;
    PhoneNo: string;
    Email: string;
    PresentAddress?: string;
    PermanentAddress?: string;
    Country: string;
    Profession?: string;
    Status?: "ACTIVE" | "ONHOLD" | "CLOSED";
    Priority: "HIGH" | "MEDIUM" | "LOW";
    Gender: 'MALE' | "FEMALE" | "OTHERS";
    Rfid: string;
    MaxGuestAllow?: number;
    IsCheckIn: boolean;
    CreatedAt?: string;
}

export interface MemberGuest {
    id?: number;
    MemberVisitID?: number;
    FullName?: string;
    PhoneNo?: string;
    Rfid?: string;
    InTime?: string | null;
    OutTime?: string | null;
}

export interface MemberVisit {
    id?: number;
    MemberInfoID: number;
    VisitingDate?: string;
    InTime?: string;
    OutTime?: string | null;
    GuestCount?: number;
    Member?: Member;
}
