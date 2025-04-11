const mockCompanies = [
  {
    id: 1,
    name: "TechCorp",
    logo: "/placeholder-company.png",
    jobs: 12,
    description: "Leading tech company specializing in web solutions"
  },
  {
    id: 2,
    name: "DesignHub",
    logo: "/placeholder-company.png",
    jobs: 5,
    description: "Creative agency focused on UX/UI design"
  },
  {
    id: 3,
    name: "DataSystems",
    logo: "/placeholder-company.png",
    jobs: 8,
    description: "Data infrastructure and analytics platform"
  }
];

export function CompanyList() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Companies</h2>
      
      <div className="space-y-6">
        {mockCompanies.map(company => (
          <div key={company.id} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">Logo</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{company.name}</h3>
              <p className="text-sm text-gray-600">{company.jobs} jobs</p>
              <p className="text-sm text-gray-500 mt-1">{company.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-6 w-full text-blue-600 border border-blue-600 py-2 rounded-md hover:bg-blue-50 transition">
        View All Companies
      </button>
    </div>
  );
}