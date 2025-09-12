import { Edit, Trash2 } from "lucide-react";

interface FlightPolicy {
  policyLevel: string;
  travelerType: string;
  seatsLimit: string;
}

interface FlightPolicyTableProps {
  data: FlightPolicy[];
}

export function FlightPolicyTable({ data }: FlightPolicyTableProps) {
  return (
    <div className="border rounded-lg overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
      {/* Table Header */}
      <div 
        className="grid grid-cols-12 gap-4 p-4 border-b font-medium text-sm" 
        style={{ backgroundColor: "#f5fafd", borderColor: "#e2e8f0", color: "#64748b" }} 
      > 
        <div className="col-span-3">Policy level</div> 
        <div className="col-span-4">Traveler type</div> 
        <div className="col-span-3">Seats limit</div> 
        <div className="col-span-2">Action</div> 
      </div> 

      {/* Table Rows */}
      {data.map((policy, index) => ( 
        <div 
          key={index} 
          className="grid grid-cols-12 gap-4 p-4 border-b items-center hover:bg-[#f5fafd] transition-colors" 
          style={{ borderColor: "#e2e8f0" }} 
        > 
          <div className="col-span-3 font-medium text-sm" style={{ color: "#18181a" }}>{policy.policyLevel}</div> 
          <div className="col-span-4 text-sm" style={{ color: "#64748b" }}>{policy.travelerType}</div> 
          <div className="col-span-3 text-sm" style={{ color: "#64748b" }}>{policy.seatsLimit}</div>
          <div className="col-span-2 flex items-center space-x-2">
            <button className="text-[#64748b] hover:text-[#316db4] hover:bg-[#f0f9ff] p-1 rounded">
              <Edit className="h-4 w-4" />
            </button>
            <button className="text-[#64748b] hover:text-red-500 hover:bg-[#fef2f2] p-1 rounded">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div> 
      ))}
    </div>
  );
}