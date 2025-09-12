import { Edit, Trash2, Clock } from "lucide-react";

interface BookingLeadTimeData {
  id: string;
  policyLevel: string;
  travelerType: string;
  short: string;
  long: string;
}

interface BookingLeadTimeTableProps {
  data: BookingLeadTimeData[];
}

export function BookingLeadTimeTable({ data }: BookingLeadTimeTableProps) {
  return (
    <div className="border rounded-lg overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
      {/* Table Header */}
      <div 
        className="grid grid-cols-12 gap-4 p-4 border-b font-medium text-sm" 
        style={{ backgroundColor: "#f5fafd", borderColor: "#e2e8f0", color: "#64748b" }} 
      > 
        <div className="col-span-3">Policy level</div> 
        <div className="col-span-2">Traveler type</div> 
        <div className="col-span-3">Short</div> 
        <div className="col-span-2">Long</div> 
        <div className="col-span-2">Action</div> 
      </div> 

      {/* Table Rows */}
      {data.map((item) => ( 
        <div 
          key={item.id} 
          className="grid grid-cols-12 gap-4 p-4 border-b items-center hover:bg-[#f5fafd] transition-colors" 
          style={{ borderColor: "#e2e8f0" }} 
        > 
          <div className="col-span-3 flex items-center"> 
            <span className="font-medium" style={{ color: "#18181a" }}> 
              {item.policyLevel} 
            </span> 
          </div> 
          <div className="col-span-2" style={{ color: "#64748b" }}> 
            {item.travelerType} 
          </div> 
          <div className="col-span-3" style={{ color: "#64748b" }}> 
            {item.short} 
          </div> 
          <div className="col-span-2" style={{ color: "#64748b" }}> 
            {item.long} 
          </div> 
          <div className="col-span-2 flex items-center gap-2"> 
            <button className="p-2 h-8 w-8 rounded flex items-center justify-center hover:bg-[#e2e8f0] transition-colors"> 
              <Edit className="w-4 h-4" style={{ color: "#316db4" }} /> 
            </button> 
            <button className="p-2 h-8 w-8 rounded flex items-center justify-center hover:bg-[#e2e8f0] transition-colors"> 
              <Trash2 className="w-4 h-4" style={{ color: "#eda92c" }} /> 
            </button> 
          </div> 
        </div> 
      ))} 
    </div>
  );
}