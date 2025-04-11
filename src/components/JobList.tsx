const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    posted: "2 days ago",
    description: "We're looking for a skilled Frontend Developer to join our team..."
  },
  {
    id: 2,
    title: "UX Designer",
    company: "DesignHub",
    location: "San Francisco",
    type: "Contract",
    salary: "$70 - $90 per hour",
    posted: "1 week ago",
    description: "Join our design team to create beautiful user experiences..."
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    posted: "3 days ago",
    description: "Looking for an experienced Backend Engineer to build our API infrastructure..."
  }
];

export function JobList() {
  return (
    <div className="space-y-6">
      {mockJobs.map(job => (
        <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
              <p className="text-gray-600">{job.company} • {job.location}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {job.type}
            </span>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-700">{job.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-900 font-medium">{job.salary}</span>
              <span className="text-gray-500 text-sm">{job.posted}</span>
            </div>
          </div>
          
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
}