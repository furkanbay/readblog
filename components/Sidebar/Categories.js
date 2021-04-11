import Title from "./Title";

export default function Categories() {
  const categories = [
    {
      id: 1,
      title: "Advertising",
      items: 39,
    },
    {
      id: 2,
      title: "Creative",
      items: 48,
    },
    {
      id: 3,
      title: "Inspiration",
      items: 26,
    },
    {
      id: 4,
      title: "LifeStyle",
      items: 24,
    },
    {
      id: 5,
      title: "Music",
      items: 32,
    },
    {
      id: 6,
      title: "Photography",
      items: 69,
    },
    {
      id: 7,
      title: "Fashion",
      items: 78,
    },
    {
      id: 8,
      title: "Travel",
      items: 49,
    },
  ];

  return (
    <div className="bg-white p-4 mb-12">
      <Title title="Categories" />
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`flex justify-between border-gray-300 py-2 ${
            categories.length === index + 1 ? "" : "border-b"
          }`}
        >
          <p>{category.title}</p>
          <span className="text-gray-400">{category.items}</span>
        </div>
      ))}
    </div>
  );
}
