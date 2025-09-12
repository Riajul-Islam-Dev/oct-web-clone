import { Edit, Trash2 } from "lucide-react";

interface RoomsPolicy {
  policyLevel: string;
  travelerType: string;
  policy: string;
}

interface RoomsTableProps {
  data: RoomsPolicy[];
}

export function RoomsTable({ data }: RoomsTableProps) {
  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm border border-[#e2e8f0]">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e2e8f0]">
              <th className="text-left py-4 px-6 font-medium text-[#2a2b2f] text-sm">Policy level</th>
              <th className="text-left py-4 px-6 font-medium text-[#2a2b2f] text-sm">Traveler type</th>
              <th className="text-left py-4 px-6 font-medium text-[#2a2b2f] text-sm">Policy</th>
              <th className="text-left py-4 px-6 font-medium text-[#2a2b2f] text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((policy, index) => (
              <tr key={index} className="border-b border-[#e2e8f0] last:border-b-0">
                <td className="py-4 px-6 text-[#18181a] text-sm">{policy.policyLevel}</td>
                <td className="py-4 px-6 text-[#18181a] text-sm">{policy.travelerType}</td>
                <td className="py-4 px-6 text-[#18181a] text-sm">{policy.policy}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-[#e2e8f0] transition-colors">
                      <Edit className="w-4 h-4" style={{ color: "#64748b" }} />
                    </button>
                    <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-[#e2e8f0] transition-colors">
                      <Trash2 className="w-4 h-4" style={{ color: "#eda92c" }} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}