import { SearchBar } from "@/components/SearchBar";
import { JobList } from "@/components/JobList";
import { FilterPanel } from "@/components/FilterPanel";
import { CompanyList } from "@/components/CompanyList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Job Board</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <SearchBar />
            <FilterPanel />
            <JobList />
          </div>
          
          <div className="lg:col-span-1">
            <CompanyList />
          </div>
        </div>
      </div>
    </div>
  );
}