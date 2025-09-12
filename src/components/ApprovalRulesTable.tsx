import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ApprovalRule {
  policyLevel: string;
  travelerType: string;
  reviewProcess: string;
  overrideApprover?: string;
}

interface ApprovalRulesTableProps {
  data: ApprovalRule[];
}

export function ApprovalRulesTable({ data }: ApprovalRulesTableProps) {
  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm border border-[#e2e8f0]">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e2e8f0]">
              <th className="text-left py-4 px-6 font-medium text-[#2a2b2f] text-sm">Policy level</th>
              <th className="text-left py-4 px-6 font-medium text-[#2a2b2f] text-sm">Traveler type</th>
              <th className="text-left py-4 px-6 font-medium text-[#2a2b2f] text-sm">Review process</th>
              <th className="text-left py-4 px-6 font-medium text-[#2a2b2f] text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((policy, index) => (
              <tr key={index} className="border-b border-[#e2e8f0] last:border-b-0">
                <td className="py-4 px-6 text-[#18181a] text-sm">{policy.policyLevel}</td>
                <td className="py-4 px-6 text-[#18181a] text-sm">{policy.travelerType}</td>
                <td className="py-4 px-6">
                  <div className="text-[#18181a] text-sm">{policy.reviewProcess}</div>
                  {policy.overrideApprover && (
                    <div className="text-[#5e6369] text-xs mt-1">Override approver : {policy.overrideApprover}</div>
                  )}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-[#316db4] hover:text-[#316db4] hover:bg-[#316db4]/10"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-[#eda92c] hover:text-[#eda92c] hover:bg-[#eda92c]/10"
                    >
                      <Trash2 className="h-4 w-4" />
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