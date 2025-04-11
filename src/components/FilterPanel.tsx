export function FilterPanel() {
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
  const locations = ['Remote', 'New York', 'San Francisco', 'London', 'Berlin'];

  return (
    <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
          <select className="p-2 border border-gray-300 rounded-md">
            {jobTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select className="p-2 border border-gray-300 rounded-md">
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        
        <button className="self-end bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Filter
        </button>
      </div>
    </div>
  );
}