import Title from "./Title";

export default function TagsCloud() {
  const tags = [
    {
      id: 1,
      title: "Creative",
    },
    {
      id: 2,
      title: "Lifestyle",
    },
    {
      id: 3,
      title: "Music",
    },
    {
      id: 4,
      title: "Fashion",
    },
    {
      id: 5,
      title: "Life",
    },
    {
      id: 6,
      title: "Typography",
    },
    {
      id: 7,
      title: "Design",
    },
    {
      id: 8,
      title: "Travel",
    },
    {
      id: 9,
      title: "Image",
    },
  ];

  return (
    <div className="bg-white p-4 mb-12">
      <Title title="Tags Cloud" />
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="cursor-pointer px-4 py-2 m-2 bg-white text-green-500 border border-green-500 hover:bg-green-500 hover:text-white"
          >
            {tag.title}
          </div>
        ))}
      </div>
    </div>
  );
}
