import { FileText, Edit, Trash2 } from "lucide-react";

interface PolicyDocument {
  id: string;
  name: string;
  date: string;
  description: string;
}

const policyDocuments: PolicyDocument[] = [
  {
    id: "1",
    name: "Travel Policy 2024",
    date: "2024-01-15",
    description: "Updated travel guidelines and expense policies for all employees"
  },
  {
    id: "2",
    name: "Remote Work Policy",
    date: "2024-02-01",
    description: "Guidelines for remote work arrangements and productivity standards"
  },
  {
    id: "3",
    name: "Expense Reimbursement",
    date: "2024-01-30",
    description: "Process and requirements for expense claim submissions"
  }
];

export default function PolicyManagementTable() {
  return (
    <div className="border rounded-lg overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
      {/* Table Header */}
      <div 
        className="grid grid-cols-12 gap-4 p-4 border-b font-medium text-sm" 
        style={{ backgroundColor: "#f5fafd", borderColor: "#e2e8f0", color: "#64748b" }} 
      > 
        <div className="col-span-3">File name</div> 
        <div className="col-span-2">Time and Date</div> 
        <div className="col-span-5">Short Description</div> 
        <div className="col-span-2">Quick Actions</div> 
      </div> 

      {/* Table Rows */}
      {policyDocuments.map((doc) => ( 
        <div 
          key={doc.id} 
          className="grid grid-cols-12 gap-4 p-4 border-b items-center hover:bg-[#f5fafd] transition-colors" 
          style={{ borderColor: "#e2e8f0" }} 
        > 
          <div className="col-span-3 flex items-center gap-3"> 
            <div 
              className="w-8 h-8 rounded flex items-center justify-center" 
              style={{ backgroundColor: "#dfeef7" }} 
            > 
              <FileText className="w-4 h-4" style={{ color: "#316db4" }} /> 
            </div> 
            <span className="font-medium" style={{ color: "#18181a" }}> 
              {doc.name} 
            </span> 
          </div> 
          <div className="col-span-2" style={{ color: "#64748b" }}> 
            {doc.date} 
          </div> 
          <div className="col-span-5" style={{ color: "#64748b" }}> 
            {doc.description} 
          </div> 
          <div className="col-span-2 flex items-center gap-2"> 
            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-[#e2e8f0] transition-colors"> 
              <Edit className="w-4 h-4" style={{ color: "#64748b" }} /> 
            </button> 
            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-[#e2e8f0] transition-colors"> 
              <Trash2 className="w-4 h-4" style={{ color: "#eda92c" }} /> 
            </button> 
          </div> 
        </div> 
      ))} 
    </div>
  );
}