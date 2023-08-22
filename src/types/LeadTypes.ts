
interface Lead {
  id: number;
  name: string;
  contactDetails: string;
  status: string;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
}

interface LeadDetails {
  lead: Lead;
  notes: string[];
  documents: string[];
}

interface LeadResponse {
  success: boolean;
  errorMessage?: string;
  leads: Lead[];
}

interface LeadCreationRequest {
  name: string;
  contactDetails: string;
  assignedTo: string;
}

interface LeadCreationResponse {
  success: boolean;
  errorMessage?: string;
  lead?: Lead;
}

interface LeadUpdateRequest {
  id: number;
  status: string;
  assignedTo: string;
}

interface LeadUpdateResponse {
  success: boolean;
  errorMessage?: string;
  lead?: Lead;
}

export type {
  Lead,
  LeadDetails,
  LeadResponse,
  LeadCreationRequest,
  LeadCreationResponse,
  LeadUpdateRequest,
  LeadUpdateResponse,
};