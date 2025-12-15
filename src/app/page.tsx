"use client";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import EmployeesGrid from "./components/EmployeeGrid";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Employees</h1>
      <EmployeesGrid />
    </main>
  );
}
