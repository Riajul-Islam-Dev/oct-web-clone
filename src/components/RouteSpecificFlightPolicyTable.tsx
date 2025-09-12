import { Pencil, Trash2 } from "lucide-react";

interface RoutePolicy {
  id: string;
  route: string;
  flightType: string;
  maxPrice: string;
  cabinClass: string;
  policyLevel: string;
  additionalInfo?: string;
}

const routePolicies: RoutePolicy[] = [
  {
    id: "1",
    route: "USA To UK",
    flightType: "Roundtrip",
    maxPrice: "500 USD",
    cabinClass: "Premium Economy",
    policyLevel: "Default policy"
  },
  {
    id: "2",
    route: "USA To Pakistan",
    flightType: "One-way",
    maxPrice: "500 USD",
    cabinClass: "Premium Economy",
    policyLevel: "Default policy"
  },
  {
    id: "3",
    route: "USA To Pakistan",
    flightType: "One-way",
    maxPrice: "500 USD",
    cabinClass: "Premium Economy",
    policyLevel: "Default policy",
    additionalInfo: "— Admins"
  }
];

export default function RouteSpecificFlightPolicyTable() {
  return (
    <div className="space-y-4">
      {routePolicies.map((policy) => (
        <div key={policy.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-[#18181a] text-lg font-medium">Route trip flight policy</h2>
              <span className="bg-[#eda92c] text-[#18181a] px-4 py-1 rounded-full text-sm font-medium">
                {policy.route}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-[#316db4] hover:text-[#316db4]/80">
                <Pencil size={18} />
              </button>
              <button className="text-[#eda92c] hover:text-[#eda92c]/80">
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* Policy Details */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex justify-between">
              <span className="text-[#2a2b2f] font-medium">Type of flight</span>
              <span className="text-[#2a2b2f]">{policy.flightType}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#2a2b2f] font-medium">Maximum price</span>
              <span className="text-[#2a2b2f]">{policy.maxPrice}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#2a2b2f] font-medium">Cabin class</span>
              <span className="text-[#2a2b2f]">{policy.cabinClass}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#2a2b2f] font-medium">Policy level</span>
              <span className="text-[#2a2b2f]">{policy.policyLevel}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}