"use client";

import { ElementPlus, ArrowDown2 } from "iconsax-reactjs";
import NestedSidebarItem from "./NestedSidebarItem";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PolicyManagementNestedSidebar() {
  const pathname = usePathname();
  const [isFlightPolicyOpen, setIsFlightPolicyOpen] = useState(false);
  const [isTrainsPolicyOpen, setIsTrainsPolicyOpen] = useState(false);
  const [isHotelPolicyOpen, setIsHotelPolicyOpen] = useState(false);
  const [isRentalCarsPolicyOpen, setIsRentalCarsPolicyOpen] = useState(false);
  const [isPolicyViolationsLogOpen, setIsPolicyViolationsLogOpen] = useState(false);
  const [isPolicySettingOpen, setIsPolicySettingOpen] = useState(false);

  // Auto-expand parent menu based on current route
  useEffect(() => {
    const flightPolicyRoutes = [
      '/policy_management/flight_duration',
      '/policy_management/budget_control',
      '/policy_management/travelers_per_flight',
      '/policy_management/cabin_class',
      '/policy_management/upgrade',
      '/policy_management/booking_lead_time'
    ];
    
    const trainsPolicyRoutes = [
      '/policy_management/trains_policy_budget_control',
      '/policy_management/trains_policy_cabin_class',
      '/policy_management/trains_policy_booking_lead_time'
    ];
    
    const hotelPolicyRoutes = [
      '/policy_management/hotel_policy_budget_control',
      '/policy_management/hotel_policy_rooms',
      '/policy_management/hotel_policy_booking_lead_time'
    ];
    
    const rentalCarsPolicyRoutes = [
      '/policy_management/rental_cars_policy_budget_control',
      '/policy_management/rental_cars_policy_car_class',
      '/policy_management/rental_cars_policy_booking_lead_time'
    ];
    
    const policyViolationsLogRoutes = [
      '/policy_management/policy_violations_log/new_violations',
      '/policy_management/policy_violations_log/violations_history'
    ];
    
    const policySettingRoutes = [
      '/policy_management/policy_settings/restricted_destinations',
      '/policy_management/policy_settings/rout_specific_flight_policy',
      '/policy_management/policy_settings/location_specific_hotel_policy',
      '/policy_management/policy_settings/access_levels',
      '/policy_management/policy_settings/approval_rules'
    ];
    
    // Reset all menus to collapsed first
    setIsFlightPolicyOpen(false);
    setIsTrainsPolicyOpen(false);
    setIsHotelPolicyOpen(false);
    setIsRentalCarsPolicyOpen(false);
    setIsPolicyViolationsLogOpen(false);
    setIsPolicySettingOpen(false);
    
    // Then expand the appropriate menu based on current route
    if (flightPolicyRoutes.includes(pathname)) {
      setIsFlightPolicyOpen(true);
    } else if (trainsPolicyRoutes.includes(pathname)) {
      setIsTrainsPolicyOpen(true);
    } else if (hotelPolicyRoutes.includes(pathname)) {
      setIsHotelPolicyOpen(true);
    } else if (rentalCarsPolicyRoutes.includes(pathname)) {
      setIsRentalCarsPolicyOpen(true);
    } else if (policyViolationsLogRoutes.includes(pathname)) {
      setIsPolicyViolationsLogOpen(true);
    } else if (policySettingRoutes.includes(pathname)) {
       setIsPolicySettingOpen(true);
     }
   }, [pathname]);

  return (
    <div>
      <ul className="text-[#64748B] gap-2 flex flex-col font-ubuntu">
        {/* Flight Policy Parent Menu */}
        <li className="flex flex-col">
          <div 
            className="flex items-center justify-between py-1 px-4 hover:shadow-xs hover:[box-shadow:0px_4px_73.8px_0px_#3A75BA26] hover:text-[#316DB4] hover:bg-white transition-all border-l-[3px] border-transparent hover:border-[#316DB4] cursor-pointer"
            onClick={() => setIsFlightPolicyOpen(!isFlightPolicyOpen)}
          >
            <div className="flex items-center">
              <div className="mr-1.5">
                <ElementPlus size="18" color="currentColor" />
              </div>
              <p>Flight policy</p>
            </div>
            <ArrowDown2 
              size="16" 
              color="currentColor" 
              className={`transition-transform duration-200 ${isFlightPolicyOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {/* Flight Policy Submenu */}
          {isFlightPolicyOpen && (
            <ul className="ml-6 mt-1 space-y-1">
              <NestedSidebarItem
                label="Flight duration"
                href="/policy_management/flight_duration"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Budget Control"
                href="/policy_management/budget_control"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Travelers per flight"
                href="/policy_management/travelers_per_flight"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Cabin Class"
                href="/policy_management/cabin_class"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Upgrade"
                href="/policy_management/upgrade"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Booking Lead Time"
                href="/policy_management/booking_lead_time"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
            </ul>
          )}
        </li>
        {/* Trains Policy Parent Menu */}
        <li className="flex flex-col">
          <div 
            className="flex items-center justify-between py-1 px-4 hover:shadow-xs hover:[box-shadow:0px_4px_73.8px_0px_#3A75BA26] hover:text-[#316DB4] hover:bg-white transition-all border-l-[3px] border-transparent hover:border-[#316DB4] cursor-pointer"
            onClick={() => setIsTrainsPolicyOpen(!isTrainsPolicyOpen)}
          >
            <div className="flex items-center">
              <div className="mr-1.5">
                <ElementPlus size="18" color="currentColor" />
              </div>
              <p>Trains Policy</p>
            </div>
            <ArrowDown2 
              size="16" 
              color="currentColor" 
              className={`transition-transform duration-200 ${isTrainsPolicyOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {/* Trains Policy Submenu */}
          {isTrainsPolicyOpen && (
            <ul className="ml-6 mt-1 space-y-1">
              <NestedSidebarItem
                label="Budget Control"
                href="/policy_management/trains_policy_budget_control"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Cabin class"
                href="/policy_management/trains_policy_cabin_class"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Booking lead time"
                href="/policy_management/trains_policy_booking_lead_time"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
            </ul>
          )}
        </li>
        {/* Hotel Policy Parent Menu */}
        <li className="flex flex-col">
          <div 
            className="flex items-center justify-between py-1 px-4 hover:shadow-xs hover:[box-shadow:0px_4px_73.8px_0px_#3A75BA26] hover:text-[#316DB4] hover:bg-white transition-all border-l-[3px] border-transparent hover:border-[#316DB4] cursor-pointer"
            onClick={() => setIsHotelPolicyOpen(!isHotelPolicyOpen)}
          >
            <div className="flex items-center">
              <div className="mr-1.5">
                <ElementPlus size="18" color="currentColor" />
              </div>
              <p>Hotel policy</p>
            </div>
            <ArrowDown2 
              size="16" 
              color="currentColor" 
              className={`transition-transform duration-200 ${isHotelPolicyOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {/* Hotel Policy Submenu */}
          {isHotelPolicyOpen && (
            <ul className="ml-6 mt-1 space-y-1">
              <NestedSidebarItem
                label="Budget Control"
                href="/policy_management/hotel_policy_budget_control"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Rooms"
                href="/policy_management/hotel_policy_rooms"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Booking lead time"
                href="/policy_management/hotel_policy_booking_lead_time"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
            </ul>
          )}
        </li>
         
         {/* Rental Cars Policy Parent Menu */}
         <li className="flex flex-col">
           <div 
             className="flex items-center justify-between py-1 px-4 hover:shadow-xs hover:[box-shadow:0px_4px_73.8px_0px_#3A75BA26] hover:text-[#316DB4] hover:bg-white transition-all border-l-[3px] border-transparent hover:border-[#316DB4] cursor-pointer"
             onClick={() => setIsRentalCarsPolicyOpen(!isRentalCarsPolicyOpen)}
           >
             <div className="flex items-center">
               <div className="mr-1.5">
                 <ElementPlus size="18" color="currentColor" />
               </div>
               <p>Rental cars policy</p>
             </div>
             <ArrowDown2 
               size="16" 
               color="currentColor" 
               className={`transition-transform duration-200 ${isRentalCarsPolicyOpen ? 'rotate-180' : ''}`}
             />
           </div>
           
           {/* Rental Cars Policy Submenu */}
           {isRentalCarsPolicyOpen && (
             <ul className="ml-6 mt-1 space-y-1">
               <NestedSidebarItem
                 label="Budget Control"
                 href="/policy_management/rental_cars_policy_budget_control"
                 icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
               />
               <NestedSidebarItem
                 label="Car class"
                 href="/policy_management/rental_cars_policy_car_class"
                 icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
               />
               <NestedSidebarItem
                 label="Booking lead time"
                 href="/policy_management/rental_cars_policy_booking_lead_time"
                 icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
               />
             </ul>
           )}
         </li>
        <NestedSidebarItem
          label="Black cars policy"
          href="/policy_management/black_cars"
          icon={<ElementPlus size="18" color="currentColor" />}
        />
        
        {/* Policy Violations Log Parent Menu */}
        <li className="flex flex-col">
          <div 
            className="flex items-center justify-between py-1 px-4 hover:shadow-xs hover:[box-shadow:0px_4px_73.8px_0px_#3A75BA26] hover:text-[#316DB4] hover:bg-white transition-all border-l-[3px] border-transparent hover:border-[#316DB4] cursor-pointer"
            onClick={() => setIsPolicyViolationsLogOpen(!isPolicyViolationsLogOpen)}
          >
            <div className="flex items-center">
              <div className="mr-1.5">
                <ElementPlus size="18" color="currentColor" />
              </div>
              <p>Policy violations log</p>
            </div>
            <ArrowDown2 
              size="16" 
              color="currentColor" 
              className={`transition-transform duration-200 ${isPolicyViolationsLogOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {/* Policy Violations Log Submenu */}
          {isPolicyViolationsLogOpen && (
            <ul className="ml-6 mt-1 space-y-1">
              <NestedSidebarItem
                label="New violations"
                href="/policy_management/policy_violations_log/new_violations"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Violations history"
                href="/policy_management/policy_violations_log/violations_history"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
            </ul>
          )}
        </li>
        
        {/* Policy Setting Parent Menu */}
        <li className="flex flex-col">
          <div 
            className="flex items-center justify-between py-1 px-4 hover:shadow-xs hover:[box-shadow:0px_4px_73.8px_0px_#3A75BA26] hover:text-[#316DB4] hover:bg-white transition-all border-l-[3px] border-transparent hover:border-[#316DB4] cursor-pointer"
            onClick={() => setIsPolicySettingOpen(!isPolicySettingOpen)}
          >
            <div className="flex items-center">
              <div className="mr-1.5">
                <ElementPlus size="18" color="currentColor" />
              </div>
              <p>Policy Setting</p>
            </div>
            <ArrowDown2 
              size="16" 
              color="currentColor" 
              className={`transition-transform duration-200 ${isPolicySettingOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {/* Policy Setting Submenu */}
          {isPolicySettingOpen && (
            <ul className="ml-6 mt-1 space-y-1">
              <NestedSidebarItem
                label="Restricted Destinations"
                href="/policy_management/policy_settings/restricted_destinations"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Rout specific flight policy"
                href="/policy_management/policy_settings/rout_specific_flight_policy"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Location-specific hotel policy"
                href="/policy_management/policy_settings/location_specific_hotel_policy"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Access Levels"
                href="/policy_management/policy_settings/access_levels"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
              <NestedSidebarItem
                label="Approval Rules"
                href="/policy_management/policy_settings/approval_rules"
                icon={<div className="w-2 h-2 rounded-full bg-current opacity-60"></div>}
              />
            </ul>
          )}
        </li>
        <NestedSidebarItem
          label="Policy documentation"
          href="/policy_management/policy_documentation"
          icon={<ElementPlus size="18" color="currentColor" />}
        />
      </ul>
    </div>
  );
}