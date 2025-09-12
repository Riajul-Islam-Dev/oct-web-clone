import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BudgetControl {
  id: number;
  policyLevel: string;
  travelerType: string;
  flightDuration: string[];
  policy: string[];
}

interface BudgetControlTableProps {
  data: BudgetControl[];
}

export function BudgetControlTable({ data }: BudgetControlTableProps) {
  return (
    <div className="bg-[#ffffff] rounded-lg border border-[#e2e8f0]">
            <div className="px-6 py-4 border-b border-[#e2e8f0]">
              <h2 className="text-lg font-medium text-[#2a2b2f]">Budget Control</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e2e8f0]">
                    <th className="text-left px-6 py-3 text-sm font-medium text-[#64748b]">Policy level</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-[#64748b]">Traveler type</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-[#64748b]">Flight Duration</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-[#64748b]">Policy</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-[#64748b]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className="border-b border-[#e2e8f0] hover:bg-[#f7f9fc]">
                      <td className="px-6 py-4 text-sm text-[#2a2b2f]">{row.policyLevel}</td>
                      <td className="px-6 py-4 text-sm text-[#2a2b2f]">{row.travelerType}</td>
                      <td className="px-6 py-4 text-sm text-[#2a2b2f]">
                        <div className="space-y-1">
                          {row.flightDuration.map((duration, idx) => (
                            <div key={idx} className="text-sm text-[#64748b]">{duration}</div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#2a2b2f]">
                        <div className="space-y-1">
                          {row.policy.map((policy, idx) => (
                            <div key={idx} className="text-sm text-[#2a2b2f]">{policy}</div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="p-1 h-8 w-8 text-[#087dc2] hover:bg-[#f5fafd]">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-1 h-8 w-8 text-[#eda92c] hover:bg-[#f7f9fc]">
                            <Trash2 className="w-4 h-4" />
                          </Button>
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