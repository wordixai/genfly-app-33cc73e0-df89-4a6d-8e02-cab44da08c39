export default function CompanyDetailPage() {
  const company = {
    id: 1,
    name: "TechCorp",
    logo: "/placeholder-company.png",
    description: "Leading tech company specializing in web solutions and cloud infrastructure.",
    website: "https://techcorp.example.com",
    employees: "500+",
    founded: "2010",
    headquarters: "San Francisco, CA",
    openJobs: [
      { id: 1, title: "Frontend Developer", type: "Full-time" },
      { id: 2, title: "DevOps Engineer", type: "Full-time" },
      { id: 3, title: "Product Manager", type: "Full-time" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500">Logo</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
            <p className="text-gray-600">{company.headquarters}</p>
            <a 
              href={company.website} 
              className="text-blue-600 hover:underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 mb-2">{company.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-gray-500">Founded</p>
              <p className="text-gray-900">{company.founded}</p>
            </div>
            <div>
              <p className="text-gray-500">Employees</p>
              <p className="text-gray-900">{company.employees}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Open Positions ({company.openJobs.length})</h2>
          <div className="space-y-4">
            {company.openJobs.map(job => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <h3 className="font-medium text-gray-900">{job.title}</h3>
                <span className="inline-block mt-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {job.type}
                </span>
                <button className="mt-2 text-blue-600 hover:underline">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}