import { DocumentText, ElementPlus, Notepad2, Receipt2 } from "iconsax-reactjs";
import NestedSidebarItem from "./NestedSidebarItem";

export default function CompanySettingsNestedSidebar() {
  return (
    <div>
      <ul className="text-[#64748B] gap-2 flex flex-col font-ubuntu">
        <NestedSidebarItem
          label="Role & Permission"
          href="/company_settings/role_permission"
          icon={<ElementPlus size="18" color="currentColor" />}
        />

        <NestedSidebarItem
          label="Departments"
          href="/company_settings/departments"
          icon={<Notepad2 size="18" color="currentColor" />}
        />
        <NestedSidebarItem
          label="Office"
          href="/company_settings/office"
          icon={<DocumentText size="18" color="currentColor" />}
        />
        <NestedSidebarItem
          label="Custom Field"
          href="/company_settings/custom_field"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 7h5v10h-5v2a1 1 0 0 0 1 1h2v2h-2.5c-.55 0-1.5-.45-1.5-1c0 .55-.95 1-1.5 1H12v-2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2V2h2.5c.55 0 1.5.45 1.5 1c0-.55.95-1 1.5-1H20v2h-2a1 1 0 0 0-1 1zM2 7h11v2H4v6h9v2H2zm18 8V9h-3v6z"
              />
            </svg>
          }
        />

        <NestedSidebarItem
          label="General Setting"
          href="/company_settings/general_setting"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 0 1 5.25 7H4v4a1 1 0 0 0 1 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 14.25 16h-3.5A1.75 1.75 0 0 1 9 14.25v-.75H5A2.5 2.5 0 0 1 2.5 11V7h-.75A1.75 1.75 0 0 1 0 5.25Zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Zm9 9a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Z"
              />
            </svg>
          }
        />

        <NestedSidebarItem
          label="Payment Method"
          href="/company_settings/payment_method"
          icon={
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2.5H2C1.445 2.5 1.005 2.945 1.005 3.5L1 9.5C1 10.055 1.445 10.5 2 10.5H10C10.555 10.5 11 10.055 11 9.5V3.5C11 2.945 10.555 2.5 10 2.5ZM9.5 9.5H2.5C2.225 9.5 2 9.275 2 9V6.5H10V9C10 9.275 9.775 9.5 9.5 9.5ZM10 4.5H2V4C2 3.725 2.225 3.5 2.5 3.5H9.5C9.775 3.5 10 3.725 10 4V4.5Z"
                fill="currentColor"
              />
            </svg>
          }
        />
        <NestedSidebarItem
          label="Integration Link"
          href="/company_settings/integration_link"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.5 4.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 3 2.122v3.906q.13-.096.27-.178c.949-.572 2.165-.739 3.198-.88l.179-.025c1.161-.162 2.102-.322 2.777-.777c.505-.342.937-.91 1.048-2.056a2.25 2.25 0 1 1 1.504.018c-.126 1.577-.738 2.622-1.712 3.28c-1.013.685-2.322.87-3.41 1.02l-.025.004c-1.17.162-2.107.292-2.786.7c-.315.19-.562.436-.737.782c-.18.354-.306.856-.306 1.584v1.378a2.251 2.251 0 1 1-1.5 0V7.622A2.25 2.25 0 0 1 5.25 5.5m11.25-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-9 13a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"
              />
            </svg>
          }
        />

        <NestedSidebarItem
          label="Company Information"
          href="/company_settings/company_information"
          icon={
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 8H8V9H9M9 6H8V7H9M10 10H6V9H7V8H6V7H7V6H6V5H10M5 4H4V3H5M5 6H4V5H5M5 8H4V7H5M5 10H4V9H5M3 4H2V3H3M3 6H2V5H3M3 8H2V7H3M3 10H2V9H3M6 4V2H1V11H11V4H6Z"
                fill="currentColor"
              />
            </svg>
          }
        />
        <NestedSidebarItem
          label="Notification"
          href="/company_settings/notification"
          icon={<Receipt2 size="18" color="currentColor" />}
        />
      </ul>
    </div>
  );
}
