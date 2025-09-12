import { UpdateCompanyInformationSheet } from "@/components/sheet/UpdateCompanyInformationSheet";
import { UpdateCompanyRepresentativeSheet } from "@/components/sheet/UpdateCompanyRepresentativeSheet";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Edit2 } from "iconsax-reactjs";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="px-4 py-4 flex-1 ">
      <div className="mb-4">
        <h4 className="text-lg font-ubuntu">Company Information</h4>
      </div>

      <Sheet>
        <div className="py-4 px-4 mb-3 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F]">
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <p className="text-md font-ubuntu">Company information</p>
              <SheetTrigger asChild>
                <Button size={"sm"}>
                  Update <Edit2 size="32" />
                </Button>
              </SheetTrigger>
            </div>
          </div>

          <table className="border-separate border-spacing-y-4 w-full">
            <tbody>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Legal entity name :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <Input
                    type="text"
                    value={"FLYRINC"}
                    placeholder="FLYRINC"
                    className="bg-[#F7F9FC] border-0 opacity-100!"
                    disabled
                  />
                </td>
              </tr>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Employer Identification Number (EIN) :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <Input
                    type="text"
                    value={"12-3456789"}
                    placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    className="bg-[#F7F9FC] border-0 opacity-100!"
                    disabled
                  />
                </td>
              </tr>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Website :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <Input
                    type="text"
                    value={"https://flyrabs.com"}
                    placeholder="hitpsy/flyrabs.com"
                    className="bg-[#F7F9FC] border-0 opacity-100!"
                    disabled
                  />
                </td>
              </tr>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Phone number :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <Input
                    type="text"
                    value={"+18884324062"}
                    placeholder="+18884324062"
                    className="bg-[#F7F9FC] border-0 opacity-100!"
                    disabled
                  />
                </td>
              </tr>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Address :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <Input
                    type="text"
                    value="16th Floor San Francisco, CA 94106, US"
                    placeholder="16th Floor San Francisco, CA 94106, US"
                    className="bg-[#F7F9FC] border-0 opacity-100!"
                    disabled
                  />
                </td>
              </tr>
              <tr className="align-top">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Attach a document :
                </td>
                <td className="w-full font-ubuntu w-17/24">
                  <div className="bg-[#F7F9FC] flex justify-between items-center py-2 rounded px-4 pr-18 mb-3">
                    <span>01</span>
                    <span>NON-DISCLOSURE AGREEMENT</span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none">
                          <path
                            stroke="#316DB4"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M7.792 21.25h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53a3.5 3.5 0 0 0-1.024-2.475l-5.969-5.97A3.5 3.5 0 0 0 10.24 2.75H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5"
                          />
                          <path
                            fill="#316DB4"
                            fillRule="evenodd"
                            d="M10.437 7.141c-.239.078-.392.236-.436.411c-.09.352 0 .73.253 1.203c.126.234.28.471.45.725l.092.137l.145.215l.019-.068l.086-.306q.148-.503.23-1.02c.089-.642-.011-1.018-.309-1.26c-.08-.065-.278-.119-.53-.037m.055 4.152l-.27-.362l-.032-.048c-.115-.19-.243-.38-.382-.585l-.1-.149a10 10 0 0 1-.512-.828c-.31-.578-.558-1.286-.358-2.067c.17-.664.698-1.081 1.227-1.254c.517-.168 1.174-.147 1.66.247c.792.644.848 1.573.739 2.357a9 9 0 0 1-.261 1.174l-.096.34q-.112.382-.208.769l-.067.194l1.392 1.864c.65-.078 1.364-.125 2.03-.077c.769.054 1.595.242 2.158.776a1.56 1.56 0 0 1 .395 1.441c-.117.48-.454.88-.919 1.123c-.985.515-1.902.105-2.583-.416c-.533-.407-1.045-.975-1.476-1.453l-.104-.114c-.37.057-.72.121-1.004.175c-.305.057-.684.128-1.096.22l-.151.443q-.125.288-.238.58l-.122.303a8 8 0 0 1-.427.91c-.33.578-.857 1.192-1.741 1.241c-1.184.066-1.986-.985-1.756-2.108l.006-.027c.2-.791.894-1.31 1.565-1.653c.597-.306 1.294-.532 1.941-.701zm.87 1.165l-.287.843l.421-.08l.004-.001l.38-.07zm2.84 1.604c.274.29.547.56.831.777c.55.42.94.493 1.299.305c.2-.105.284-.241.309-.342a.35.35 0 0 0-.08-.309c-.257-.228-.722-.38-1.392-.428a8 8 0 0 0-.967-.003m-5.005.947c-.318.109-.62.23-.89.368c-.587.3-.87.604-.944.867c-.078.415.192.673.516.655c.27-.015.506-.184.766-.639q.204-.372.358-.767l.107-.266z"
                            clipRule="evenodd"
                          />
                        </g>
                      </svg>
                      <span>pdf</span>
                    </span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83337 18C5.37504 18 4.98282 17.8369 4.65671 17.5108C4.3306 17.1847 4.16726 16.7922 4.16671 16.3333V5.5H3.33337V3.83333H7.50004V3H12.5V3.83333H16.6667V5.5H15.8334V16.3333C15.8334 16.7917 15.6703 17.1842 15.3442 17.5108C15.0181 17.8375 14.6256 18.0006 14.1667 18H5.83337ZM7.50004 14.6667H9.16671V7.16667H7.50004V14.6667ZM10.8334 14.6667H12.5V7.16667H10.8334V14.6667Z"
                        fill="#F9262A"
                      />
                    </svg>
                  </div>
                  <div className="bg-[#F7F9FC] flex justify-between items-center py-2 rounded px-4 pr-18 mb-3">
                    <span>02</span>
                    <span>NON-DISCLOSURE AGREEMENT</span>
                    <span className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 18.8337H8.93917C6.2225 18.8337 4.8625 18.8337 3.91917 18.1687C3.65071 17.9804 3.41075 17.7545 3.20667 17.4978C2.5 16.6095 2.5 15.3312 2.5 12.7728V10.652C2.5 8.18283 2.5 6.94783 2.89083 5.96199C3.51917 4.37616 4.8475 3.12616 6.5325 2.53449C7.57917 2.16699 8.89 2.16699 11.515 2.16699C13.0133 2.16699 13.7633 2.16699 14.3617 2.37699C15.3242 2.71533 16.0833 3.42949 16.4425 4.33533C16.6667 4.89866 16.6667 5.60449 16.6667 7.01533V8.83366"
                          stroke="#316DB4"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 10.5003C2.5 9.76369 2.79263 9.05722 3.31351 8.53634C3.83439 8.01545 4.54086 7.72283 5.2775 7.72283C5.8325 7.72283 6.48667 7.81949 7.02583 7.67533C7.26142 7.61192 7.47621 7.4877 7.64865 7.31511C7.82109 7.14252 7.94513 6.92764 8.00833 6.69199C8.1525 6.15283 8.05583 5.49866 8.05583 4.94366C8.05605 4.20716 8.34878 3.50091 8.86964 2.98021C9.3905 2.45951 10.0968 2.16699 10.8333 2.16699M5.83333 15.5003V11.7503C5.83333 11.6398 5.87723 11.5338 5.95537 11.4557C6.03351 11.3776 6.13949 11.3337 6.25 11.3337H7.24833C7.66583 11.3337 8.09417 11.5287 8.21917 11.927C8.3025 12.1953 8.29917 12.447 8.21583 12.732C8.08583 13.1737 7.62917 13.417 7.16833 13.417H6.25M10 15.5003L10.0833 11.642C10.0832 11.6242 10.0888 11.6068 10.0992 11.5924C10.1096 11.578 10.1244 11.5674 10.1414 11.562C10.1583 11.5566 10.1765 11.5567 10.1934 11.5624C10.2102 11.5681 10.2248 11.5791 10.235 11.5937L12.6875 15.2603C12.6977 15.2749 12.7123 15.2859 12.7291 15.2916C12.746 15.2973 12.7642 15.2974 12.7811 15.292C12.7981 15.2866 12.8129 15.2759 12.8233 15.2615C12.8337 15.2471 12.8393 15.2298 12.8392 15.212L12.9167 11.3337M17.5 12.0612C17.4 11.4628 17.2892 11.3337 16.6667 11.3337H15.4167C14.9567 11.3337 14.7492 11.707 14.7492 12.167V14.667C14.7492 15.127 14.9567 15.5003 15.4167 15.5003H16.8333C17.0101 15.5003 17.1797 15.4301 17.3047 15.3051C17.4298 15.18 17.5 15.0105 17.5 14.8337V14.167C17.5 14.0786 17.4649 13.9938 17.4024 13.9313C17.3399 13.8688 17.2551 13.8337 17.1667 13.8337H16.5417"
                          stroke="#316DB4"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>png</span>
                    </span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83337 18C5.37504 18 4.98282 17.8369 4.65671 17.5108C4.3306 17.1847 4.16726 16.7922 4.16671 16.3333V5.5H3.33337V3.83333H7.50004V3H12.5V3.83333H16.6667V5.5H15.8334V16.3333C15.8334 16.7917 15.6703 17.1842 15.3442 17.5108C15.0181 17.8375 14.6256 18.0006 14.1667 18H5.83337ZM7.50004 14.6667H9.16671V7.16667H7.50004V14.6667ZM10.8334 14.6667H12.5V7.16667H10.8334V14.6667Z"
                        fill="#F9262A"
                      />
                    </svg>
                  </div>
                  <div className="bg-[#F7F9FC] flex justify-between items-center py-2 rounded px-4 pr-18 mb-3">
                    <span>03</span>
                    <span>NON-DISCLOSURE AGREEMENT</span>
                    <span className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 18.8337H8.93917C6.2225 18.8337 4.8625 18.8337 3.91917 18.1687C3.65071 17.9804 3.41075 17.7545 3.20667 17.4978C2.5 16.6095 2.5 15.3312 2.5 12.7728V10.652C2.5 8.18283 2.5 6.94783 2.89083 5.96199C3.51917 4.37616 4.8475 3.12616 6.5325 2.53449C7.57917 2.16699 8.89 2.16699 11.515 2.16699C13.0133 2.16699 13.7633 2.16699 14.3617 2.37699C15.3242 2.71533 16.0833 3.42949 16.4425 4.33533C16.6667 4.89866 16.6667 5.60449 16.6667 7.01533V8.83366"
                          stroke="#316DB4"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 10.5003C2.5 9.76369 2.79263 9.05722 3.31351 8.53634C3.83439 8.01545 4.54086 7.72283 5.2775 7.72283C5.8325 7.72283 6.48667 7.81949 7.02583 7.67533C7.26142 7.61192 7.47621 7.4877 7.64865 7.31511C7.82109 7.14252 7.94513 6.92764 8.00833 6.69199C8.1525 6.15283 8.05583 5.49866 8.05583 4.94366C8.05605 4.20716 8.34878 3.50091 8.86964 2.98021C9.3905 2.45951 10.0968 2.16699 10.8333 2.16699M5.83333 15.5003V11.7503C5.83333 11.6398 5.87723 11.5338 5.95537 11.4557C6.03351 11.3776 6.13949 11.3337 6.25 11.3337H7.24833C7.66583 11.3337 8.09417 11.5287 8.21917 11.927C8.3025 12.1953 8.29917 12.447 8.21583 12.732C8.08583 13.1737 7.62917 13.417 7.16833 13.417H6.25M10 15.5003L10.0833 11.642C10.0832 11.6242 10.0888 11.6068 10.0992 11.5924C10.1096 11.578 10.1244 11.5674 10.1414 11.562C10.1583 11.5566 10.1765 11.5567 10.1934 11.5624C10.2102 11.5681 10.2248 11.5791 10.235 11.5937L12.6875 15.2603C12.6977 15.2749 12.7123 15.2859 12.7291 15.2916C12.746 15.2973 12.7642 15.2974 12.7811 15.292C12.7981 15.2866 12.8129 15.2759 12.8233 15.2615C12.8337 15.2471 12.8393 15.2298 12.8392 15.212L12.9167 11.3337M17.5 12.0612C17.4 11.4628 17.2892 11.3337 16.6667 11.3337H15.4167C14.9567 11.3337 14.7492 11.707 14.7492 12.167V14.667C14.7492 15.127 14.9567 15.5003 15.4167 15.5003H16.8333C17.0101 15.5003 17.1797 15.4301 17.3047 15.3051C17.4298 15.18 17.5 15.0105 17.5 14.8337V14.167C17.5 14.0786 17.4649 13.9938 17.4024 13.9313C17.3399 13.8688 17.2551 13.8337 17.1667 13.8337H16.5417"
                          stroke="#316DB4"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>png</span>
                    </span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83337 18C5.37504 18 4.98282 17.8369 4.65671 17.5108C4.3306 17.1847 4.16726 16.7922 4.16671 16.3333V5.5H3.33337V3.83333H7.50004V3H12.5V3.83333H16.6667V5.5H15.8334V16.3333C15.8334 16.7917 15.6703 17.1842 15.3442 17.5108C15.0181 17.8375 14.6256 18.0006 14.1667 18H5.83337ZM7.50004 14.6667H9.16671V7.16667H7.50004V14.6667ZM10.8334 14.6667H12.5V7.16667H10.8334V14.6667Z"
                        fill="#F9262A"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <UpdateCompanyInformationSheet />
      </Sheet>

      <Sheet>
        <div className="py-4 px-4 mb-3 bg-white rounded-md shadow-[0px_4px_30px_0px_#0000000F]">
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <p className="text-md font-ubuntu">Company representative</p>
              <div className="flex gap-3">
                <Button variant={"secondary"} size={"sm"}>
                  Add Representative <Plus />
                </Button>
                <SheetTrigger asChild>
                  <Button size={"sm"}>
                    Update <Edit2 size="32" />
                  </Button>
                </SheetTrigger>
              </div>
            </div>
          </div>

          <table className="border-separate border-spacing-y-4 w-full">
            <tbody>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Legal name :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <Input
                    type="text"
                    value={"Seyad Ashraf"}
                    placeholder="Seyad Ashraf"
                    className="bg-[#F7F9FC] border-0 opacity-100!"
                    disabled
                  />
                </td>
              </tr>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu   w-7/24">
                  Job title :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <Input
                    type="text"
                    value={"Other Executive"}
                    placeholder="Other Executive"
                    className="bg-[#F7F9FC] border-0 opacity-100!"
                    disabled
                  />
                </td>
              </tr>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Date of birth :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <DatePicker
                    placeholder="20/20/2020"
                    className="bg-[#F7F9FC] border-0 opacity-100! pointer-events-none"
                  />
                </td>
              </tr>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Personal address :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <Input
                    type="text"
                    value={"16th Floor San Francisco, CA 94106, US"}
                    placeholder="16th Floor San Francisco, CA 94106, US"
                    className="bg-[#F7F9FC] border-0 opacity-100!"
                    disabled
                  />
                </td>
              </tr>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Phone number :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <Input
                    type="text"
                    value={"+18884324062"}
                    placeholder="+18884324062"
                    className="bg-[#F7F9FC] border-0 opacity-100!"
                    disabled
                  />
                </td>
              </tr>
              <tr className="align-middle">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  SSN :
                </td>
                <td className="w-full font-raleway w-17/24">
                  <Input
                    type="text"
                    value={"123-45-6789"}
                    placeholder="xxxxxxxxxxxxxxx"
                    className="bg-[#F7F9FC] border-0 opacity-100!"
                    disabled
                  />
                </td>
              </tr>
              <tr className="align-top">
                <td className="whitespace-nowrap pr-4 font-ubuntu w-7/24">
                  Attach a document :
                </td>
                <td className="w-full font-ubuntu w-17/24">
                  <div className="bg-[#F7F9FC] flex justify-between items-center py-2 rounded px-4 pr-18 mb-3">
                    <span>01</span>
                    <span>NON-DISCLOSURE AGREEMENT</span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none">
                          <path
                            stroke="#316DB4"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M7.792 21.25h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53a3.5 3.5 0 0 0-1.024-2.475l-5.969-5.97A3.5 3.5 0 0 0 10.24 2.75H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5"
                          />
                          <path
                            fill="#316DB4"
                            fillRule="evenodd"
                            d="M10.437 7.141c-.239.078-.392.236-.436.411c-.09.352 0 .73.253 1.203c.126.234.28.471.45.725l.092.137l.145.215l.019-.068l.086-.306q.148-.503.23-1.02c.089-.642-.011-1.018-.309-1.26c-.08-.065-.278-.119-.53-.037m.055 4.152l-.27-.362l-.032-.048c-.115-.19-.243-.38-.382-.585l-.1-.149a10 10 0 0 1-.512-.828c-.31-.578-.558-1.286-.358-2.067c.17-.664.698-1.081 1.227-1.254c.517-.168 1.174-.147 1.66.247c.792.644.848 1.573.739 2.357a9 9 0 0 1-.261 1.174l-.096.34q-.112.382-.208.769l-.067.194l1.392 1.864c.65-.078 1.364-.125 2.03-.077c.769.054 1.595.242 2.158.776a1.56 1.56 0 0 1 .395 1.441c-.117.48-.454.88-.919 1.123c-.985.515-1.902.105-2.583-.416c-.533-.407-1.045-.975-1.476-1.453l-.104-.114c-.37.057-.72.121-1.004.175c-.305.057-.684.128-1.096.22l-.151.443q-.125.288-.238.58l-.122.303a8 8 0 0 1-.427.91c-.33.578-.857 1.192-1.741 1.241c-1.184.066-1.986-.985-1.756-2.108l.006-.027c.2-.791.894-1.31 1.565-1.653c.597-.306 1.294-.532 1.941-.701zm.87 1.165l-.287.843l.421-.08l.004-.001l.38-.07zm2.84 1.604c.274.29.547.56.831.777c.55.42.94.493 1.299.305c.2-.105.284-.241.309-.342a.35.35 0 0 0-.08-.309c-.257-.228-.722-.38-1.392-.428a8 8 0 0 0-.967-.003m-5.005.947c-.318.109-.62.23-.89.368c-.587.3-.87.604-.944.867c-.078.415.192.673.516.655c.27-.015.506-.184.766-.639q.204-.372.358-.767l.107-.266z"
                            clipRule="evenodd"
                          />
                        </g>
                      </svg>
                      <span>pdf</span>
                    </span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83337 18C5.37504 18 4.98282 17.8369 4.65671 17.5108C4.3306 17.1847 4.16726 16.7922 4.16671 16.3333V5.5H3.33337V3.83333H7.50004V3H12.5V3.83333H16.6667V5.5H15.8334V16.3333C15.8334 16.7917 15.6703 17.1842 15.3442 17.5108C15.0181 17.8375 14.6256 18.0006 14.1667 18H5.83337ZM7.50004 14.6667H9.16671V7.16667H7.50004V14.6667ZM10.8334 14.6667H12.5V7.16667H10.8334V14.6667Z"
                        fill="#F9262A"
                      />
                    </svg>
                  </div>
                  <div className="bg-[#F7F9FC] flex justify-between items-center py-2 rounded px-4 pr-18 mb-3">
                    <span>02</span>
                    <span>NON-DISCLOSURE AGREEMENT</span>
                    <span className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 18.8337H8.93917C6.2225 18.8337 4.8625 18.8337 3.91917 18.1687C3.65071 17.9804 3.41075 17.7545 3.20667 17.4978C2.5 16.6095 2.5 15.3312 2.5 12.7728V10.652C2.5 8.18283 2.5 6.94783 2.89083 5.96199C3.51917 4.37616 4.8475 3.12616 6.5325 2.53449C7.57917 2.16699 8.89 2.16699 11.515 2.16699C13.0133 2.16699 13.7633 2.16699 14.3617 2.37699C15.3242 2.71533 16.0833 3.42949 16.4425 4.33533C16.6667 4.89866 16.6667 5.60449 16.6667 7.01533V8.83366"
                          stroke="#316DB4"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 10.5003C2.5 9.76369 2.79263 9.05722 3.31351 8.53634C3.83439 8.01545 4.54086 7.72283 5.2775 7.72283C5.8325 7.72283 6.48667 7.81949 7.02583 7.67533C7.26142 7.61192 7.47621 7.4877 7.64865 7.31511C7.82109 7.14252 7.94513 6.92764 8.00833 6.69199C8.1525 6.15283 8.05583 5.49866 8.05583 4.94366C8.05605 4.20716 8.34878 3.50091 8.86964 2.98021C9.3905 2.45951 10.0968 2.16699 10.8333 2.16699M5.83333 15.5003V11.7503C5.83333 11.6398 5.87723 11.5338 5.95537 11.4557C6.03351 11.3776 6.13949 11.3337 6.25 11.3337H7.24833C7.66583 11.3337 8.09417 11.5287 8.21917 11.927C8.3025 12.1953 8.29917 12.447 8.21583 12.732C8.08583 13.1737 7.62917 13.417 7.16833 13.417H6.25M10 15.5003L10.0833 11.642C10.0832 11.6242 10.0888 11.6068 10.0992 11.5924C10.1096 11.578 10.1244 11.5674 10.1414 11.562C10.1583 11.5566 10.1765 11.5567 10.1934 11.5624C10.2102 11.5681 10.2248 11.5791 10.235 11.5937L12.6875 15.2603C12.6977 15.2749 12.7123 15.2859 12.7291 15.2916C12.746 15.2973 12.7642 15.2974 12.7811 15.292C12.7981 15.2866 12.8129 15.2759 12.8233 15.2615C12.8337 15.2471 12.8393 15.2298 12.8392 15.212L12.9167 11.3337M17.5 12.0612C17.4 11.4628 17.2892 11.3337 16.6667 11.3337H15.4167C14.9567 11.3337 14.7492 11.707 14.7492 12.167V14.667C14.7492 15.127 14.9567 15.5003 15.4167 15.5003H16.8333C17.0101 15.5003 17.1797 15.4301 17.3047 15.3051C17.4298 15.18 17.5 15.0105 17.5 14.8337V14.167C17.5 14.0786 17.4649 13.9938 17.4024 13.9313C17.3399 13.8688 17.2551 13.8337 17.1667 13.8337H16.5417"
                          stroke="#316DB4"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>png</span>
                    </span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83337 18C5.37504 18 4.98282 17.8369 4.65671 17.5108C4.3306 17.1847 4.16726 16.7922 4.16671 16.3333V5.5H3.33337V3.83333H7.50004V3H12.5V3.83333H16.6667V5.5H15.8334V16.3333C15.8334 16.7917 15.6703 17.1842 15.3442 17.5108C15.0181 17.8375 14.6256 18.0006 14.1667 18H5.83337ZM7.50004 14.6667H9.16671V7.16667H7.50004V14.6667ZM10.8334 14.6667H12.5V7.16667H10.8334V14.6667Z"
                        fill="#F9262A"
                      />
                    </svg>
                  </div>
                  <div className="bg-[#F7F9FC] flex justify-between items-center py-2 rounded px-4 pr-18 mb-3">
                    <span>03</span>
                    <span>NON-DISCLOSURE AGREEMENT</span>
                    <span className="flex items-center gap-1">
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 18.8337H8.93917C6.2225 18.8337 4.8625 18.8337 3.91917 18.1687C3.65071 17.9804 3.41075 17.7545 3.20667 17.4978C2.5 16.6095 2.5 15.3312 2.5 12.7728V10.652C2.5 8.18283 2.5 6.94783 2.89083 5.96199C3.51917 4.37616 4.8475 3.12616 6.5325 2.53449C7.57917 2.16699 8.89 2.16699 11.515 2.16699C13.0133 2.16699 13.7633 2.16699 14.3617 2.37699C15.3242 2.71533 16.0833 3.42949 16.4425 4.33533C16.6667 4.89866 16.6667 5.60449 16.6667 7.01533V8.83366"
                          stroke="#316DB4"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 10.5003C2.5 9.76369 2.79263 9.05722 3.31351 8.53634C3.83439 8.01545 4.54086 7.72283 5.2775 7.72283C5.8325 7.72283 6.48667 7.81949 7.02583 7.67533C7.26142 7.61192 7.47621 7.4877 7.64865 7.31511C7.82109 7.14252 7.94513 6.92764 8.00833 6.69199C8.1525 6.15283 8.05583 5.49866 8.05583 4.94366C8.05605 4.20716 8.34878 3.50091 8.86964 2.98021C9.3905 2.45951 10.0968 2.16699 10.8333 2.16699M5.83333 15.5003V11.7503C5.83333 11.6398 5.87723 11.5338 5.95537 11.4557C6.03351 11.3776 6.13949 11.3337 6.25 11.3337H7.24833C7.66583 11.3337 8.09417 11.5287 8.21917 11.927C8.3025 12.1953 8.29917 12.447 8.21583 12.732C8.08583 13.1737 7.62917 13.417 7.16833 13.417H6.25M10 15.5003L10.0833 11.642C10.0832 11.6242 10.0888 11.6068 10.0992 11.5924C10.1096 11.578 10.1244 11.5674 10.1414 11.562C10.1583 11.5566 10.1765 11.5567 10.1934 11.5624C10.2102 11.5681 10.2248 11.5791 10.235 11.5937L12.6875 15.2603C12.6977 15.2749 12.7123 15.2859 12.7291 15.2916C12.746 15.2973 12.7642 15.2974 12.7811 15.292C12.7981 15.2866 12.8129 15.2759 12.8233 15.2615C12.8337 15.2471 12.8393 15.2298 12.8392 15.212L12.9167 11.3337M17.5 12.0612C17.4 11.4628 17.2892 11.3337 16.6667 11.3337H15.4167C14.9567 11.3337 14.7492 11.707 14.7492 12.167V14.667C14.7492 15.127 14.9567 15.5003 15.4167 15.5003H16.8333C17.0101 15.5003 17.1797 15.4301 17.3047 15.3051C17.4298 15.18 17.5 15.0105 17.5 14.8337V14.167C17.5 14.0786 17.4649 13.9938 17.4024 13.9313C17.3399 13.8688 17.2551 13.8337 17.1667 13.8337H16.5417"
                          stroke="#316DB4"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>png</span>
                    </span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83337 18C5.37504 18 4.98282 17.8369 4.65671 17.5108C4.3306 17.1847 4.16726 16.7922 4.16671 16.3333V5.5H3.33337V3.83333H7.50004V3H12.5V3.83333H16.6667V5.5H15.8334V16.3333C15.8334 16.7917 15.6703 17.1842 15.3442 17.5108C15.0181 17.8375 14.6256 18.0006 14.1667 18H5.83337ZM7.50004 14.6667H9.16671V7.16667H7.50004V14.6667ZM10.8334 14.6667H12.5V7.16667H10.8334V14.6667Z"
                        fill="#F9262A"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <UpdateCompanyRepresentativeSheet />
      </Sheet>
    </div>
  );
}
