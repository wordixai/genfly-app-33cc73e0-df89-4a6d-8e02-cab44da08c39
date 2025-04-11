export function JobDetail() {
  const job = {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    posted: "2 days ago",
    description: "We're looking for a skilled Frontend Developer to join our team working on cutting-edge web applications.",
    requirements: [
      "3+ years of experience with React",
      "Strong JavaScript/TypeScript skills",
      "Experience with modern CSS frameworks",
      "Familiarity with REST APIs"
    ],
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable components",
      "Collaborate with designers and backend engineers",
      "Optimize applications for performance"
    ]
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
          <p className="text-lg text-gray-600">{job.company} • {job.location}</p>
        </div>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          {job.type}
        </span>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Job Description</h2>
        <p className="text-gray-700">{job.description}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Requirements</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {job.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Responsibilities</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {job.responsibilities.map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-900 font-medium">{job.salary}</p>
          <p className="text-gray-500 text-sm">Posted {job.posted}</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}