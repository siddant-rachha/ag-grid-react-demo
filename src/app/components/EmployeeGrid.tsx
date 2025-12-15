"use client";

import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import employeesData from "../../../employee-data.json";
import { Employee } from "../types";

export default function EmployeesGrid() {
  const [rowData] = useState<Employee[]>(employeesData.employees);

  const [columnDefs] = useState<ColDef<Employee>[]>([
    { field: "id" },
    { field: "firstName" },
    { field: "lastName" },
    { field: "email" },
    { field: "position" },
    { field: "department" },
    { field: "salary" },
    { field: "hireDate" },
    { field: "age" },
    { field: "location" },
    { field: "performanceRating" },
    { field: "projectsCompleted" },
    { field: "isActive" },
    { field: "skills" },
    { field: "manager" },
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: 500, width: "100%" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
}
