import Title from "./Title";

export default function Archives() {
  const archives = [
    {
      id: 1,
      title: "December, 2016",
      items: 26,
    },
    {
      id: 2,
      title: "November, 2016",
      items: 24,
    },
    {
      id: 3,
      title: "October, 2016",
      items: 32,
    },
    {
      id: 4,
      title: "September, 2016",
      items: 69,
    },
    {
      id: 5,
      title: "August, 2016",
      items: 78,
    },
  ];

  return (
    <div className="bg-white p-4 mb-12">
      <Title title="Archives" />
      {archives.map((archive, index) => (
        <div
          key={archive.id}
          className={`flex justify-between border-gray-300 py-2 ${
            archives.length === index + 1 ? "" : "border-b"
          }`}
        >
          <p>{archive.title}</p>
          <span className="text-gray-400">{archive.items}</span>
        </div>
      ))}
    </div>
  );
}
