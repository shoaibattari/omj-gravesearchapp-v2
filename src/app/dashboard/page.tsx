// app/dashboard/page.tsx
"use client";
import React from "react";
import withAdminProtection from "../Components/withAdminProtection";

const AdminDashboard = () => {
  return (
    <div className="h-svh">
      <p>Welcome to the Admin Dashboard</p>
      
    </div>
  );
};

export default withAdminProtection(AdminDashboard);
