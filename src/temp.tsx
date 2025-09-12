import { Edit, Trash2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PolicySectionProps {
  title: string
  continentsName: string
  policyLevel: string
  policyDetails: string
  showDropdown?: boolean
  dropdownValue?: string
}

function PolicySection({
  title,
  continentsName,
  policyLevel,
  policyDetails,
  showDropdown = false,
  dropdownValue,
}: PolicySectionProps) {
  return (
    <div className="bg-[#ffffff] rounded-lg p-6 mb-6 border border-[#e2e8f0]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[#18181a] font-medium text-lg">{title}</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="p-1 h-8 w-8 text-[#316db4] hover:bg-[#316db4]/10">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="p-1 h-8 w-8 text-[#eda92c] hover:bg-[#eda92c]/10">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
          <label className="text-[#2a2b2f] text-sm font-medium">Continents Name</label>
          <div className="text-[#18181a]">{continentsName}</div>
        </div>

        <div className="grid grid-cols-[140px_1fr] gap-4 items-start">
          <label className="text-[#2a2b2f] text-sm font-medium pt-1">Policy level</label>
          <div>
            <div className="text-[#18181a] mb-1">{policyLevel}</div>
            {showDropdown && dropdownValue && (
              <div className="flex items-center gap-2 text-[#2a2b2f] text-sm">
                <ChevronDown className="h-3 w-3" />
                <span>{dropdownValue}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
          <label className="text-[#2a2b2f] text-sm font-medium">Policy Details</label>
          <button className="text-[#316db4] text-left hover:underline">{policyDetails}</button>
        </div>
      </div>
    </div>
  )
}

export function TravelPolicyManager() {
  const policies = [
    {
      title: "Restrict Continents",
      continentsName: "Asia",
      policyLevel: "Block all travel",
      policyDetails: "Learn More",
    },
    {
      title: "Restrict Continents",
      continentsName: "Europe",
      policyLevel: "Allow travel only within the continent",
      policyDetails: "Learn More",
    },
    {
      title: "Restrict Continents",
      continentsName: "North America",
      policyLevel: "Allow travel based on policy group",
      policyDetails: "Learn More",
      showDropdown: true,
      dropdownValue: "Default",
    },
    {
      title: "Restrict Countries",
      continentsName: "UK",
      policyLevel: "Allow travel based on policy group",
      policyDetails: "Learn More",
      showDropdown: true,
      dropdownValue: "Director",
    },
  ]

  return (
    <div className="space-y-0">
      {policies.map((policy, index) => (
        <PolicySection key={index} {...policy} />
      ))}

      {/* Restrict Cities Section */}
      <div className="bg-[#ffffff] rounded-lg p-6 border border-[#e2e8f0]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[#18181a] font-medium text-lg">Restrict Cities</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="p-1 h-8 w-8 text-[#316db4] hover:bg-[#316db4]/10">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1 h-8 w-8 text-[#eda92c] hover:bg-[#eda92c]/10">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
            <label className="text-[#2a2b2f] text-sm font-medium">Continents Name</label>
            <div className="text-[#18181a]">Dhaka</div>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
            <label className="text-[#2a2b2f] text-sm font-medium">City Radius</label>
            <div className="text-[#18181a]">50 miles</div>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
            <label className="text-[#2a2b2f] text-sm font-medium">Policy level</label>
            <div className="text-[#18181a]">Block all travel</div>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-4 items-center">
            <label className="text-[#2a2b2f] text-sm font-medium">Policy Details</label>
            <button className="text-[#316db4] text-left hover:underline">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}