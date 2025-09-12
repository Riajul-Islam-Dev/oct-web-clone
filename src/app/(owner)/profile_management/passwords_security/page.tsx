import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="flex-1 px-3 pt-3">
      <div className="pb-2 border-b">
        <h4 className="font-medium font-ubuntu text-lg">Change Password</h4>
      </div>

      <div className="bg-white rounded-md mt-5 py-4 px-6 shadow-[0px_4px_30px_0px_#0000000F] mb-8">
        <div className="flex-1 mb-4">
          <Label className="mb-2  ">Old Password*</Label>
          <div>
            <Input className="rounded-sm h-11" placeholder="Enter password" />
          </div>
        </div>

        <div className="flex-1 mb-4">
          <Label className="mb-2  ">New Password*</Label>
          <div>
            <Input className="rounded-sm h-11" placeholder="Enter password" />
            <ul className="text-sm flex flex-col gap-1 flex-wrap mt-1">
              <li>PASSWORD REQUIREMENTS:</li>
              <li className="flex items-center gap-1 text-[#0DBC53]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10.562 14.492l-2.496-2.496q-.141-.14-.345-.15t-.363.15t-.16.354t.16.354l2.638 2.638q.242.243.565.243t.566-.243l5.477-5.476q.14-.141.15-.345t-.15-.363t-.354-.16t-.354.16zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
                  />
                </svg>
                <p>Must Contain 1 Uppercase Letter</p>
              </li>
              <li className="flex items-center gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#E0E0E0"
                    d="m10.562 14.492l-2.496-2.496q-.141-.14-.345-.15t-.363.15t-.16.354t.16.354l2.638 2.638q.242.243.565.243t.566-.243l5.477-5.476q.14-.141.15-.345t-.15-.363t-.354-.16t-.354.16zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
                  />
                </svg>
                <p>Must Contain 1 Lowercase Letter</p>
              </li>
              <li className="flex items-center gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#E0E0E0"
                    d="m10.562 14.492l-2.496-2.496q-.141-.14-.345-.15t-.363.15t-.16.354t.16.354l2.638 2.638q.242.243.565.243t.566-.243l5.477-5.476q.14-.141.15-.345t-.15-.363t-.354-.16t-.354.16zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
                  />
                </svg>
                <p>Must Contain 1 Number</p>
              </li>
              <li className="flex items-center gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.3em"
                  height="1.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#E0E0E0"
                    d="m10.562 14.492l-2.496-2.496q-.141-.14-.345-.15t-.363.15t-.16.354t.16.354l2.638 2.638q.242.243.565.243t.566-.243l5.477-5.476q.14-.141.15-.345t-.15-.363t-.354-.16t-.354.16zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
                  />
                </svg>
                <p>Must Have at Least 8 Characters</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 mb-4">
          <Label className="mb-2  ">Confirm Password*</Label>
          <div>
            <Input className="rounded-sm h-11" placeholder="Enter password" />
          </div>
        </div>

        <div className="flex gap-5 justify-end mt-5 mb-3">
          <Button
            variant="ghost"
            className="font-ubuntu font-medium text-[#316DB4]"
          >
            Forgot Password?
          </Button>
          <Button className="font-ubuntu font-medium">Update Password</Button>
        </div>
      </div>
    </div>
  );
}
