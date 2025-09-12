import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CreateNewRoleSheet } from "@/components/sheet/CreateNewRoleSheet";
import RolePermissionTable from "@/components/RolePermissionTable";

export default function Page() {
  return (
    <Sheet>
      <div className="px-4 py-4 flex-1">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-ubuntu">User Roles</h4>
          <SheetTrigger asChild>
            <Button size={"sm"} className="">
              <Plus />
              Create New Role
            </Button>
          </SheetTrigger>
        </div>

        <RolePermissionTable />
      </div>
      <CreateNewRoleSheet />
    </Sheet>
  );
}
