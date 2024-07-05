const Rows = () => {
  const studentsProfile = [
    {
      id: "1",
      name: "Alice Johnson",
      imagePath: "https://ibb.co/Jj4Cd1m",
      score: 78,
      percentage: 62.4,
      class: "one",
    },
    {
      id: "2",
      name: "Bob Smith",
      imagePath: "/images/bob.jpg",
      score: 92,
      percentage: 74.2,
      class: "one",
    },
    {
      id: "3",
      name: "Charlie Brown",
      imagePath: "/images/charlie.jpg",
      score: 85,
      percentage: 68.0,
      class: "one",
    },
    {
      id: "4",
      name: "David Lee",
      imagePath: "/images/david.jpg",
      score: 65,
      percentage: 52.0,
      class: "one",
    },
    {
      id: "5",
      name: "Emma Wilson",
      imagePath: "/images/emma.jpg",
      score: 76,
      percentage: 60.8,
      class: "one",
    },
    {
      id: "6",
      name: "Frank Miller",
      imagePath: "/images/frank.jpg",
      score: 88,
      percentage: 70.4,
      class: "one",
    },
    {
      id: "7",
      name: "Grace Davis",
      imagePath: "/images/grace.jpg",
      score: 94,
      percentage: 75.2,
      class: "one",
    },
    {
      id: "8",
      name: "Henry White",
      imagePath: "/images/henry.jpg",
      score: 70,
      percentage: 56.0,
      class: "one",
    },
    {
      id: "9",
      name: "Ivy Turner",
      imagePath: "/images/ivy.jpg",
      score: 82,
      percentage: 65.6,
      class: "one",
    },
    {
      id: "10",
      name: "Jack Robinson",
      imagePath: "/images/jack.jpg",
      score: 91,
      percentage: 72.8,
      class: "one",
    },
    {
      id: "11",
      name: "Katie Davis",
      imagePath: "/images/katie.jpg",
      score: 79,
      percentage: 63.2,
      class: "one",
    },
    {
      id: "12",
      name: "Leo Wilson",
      imagePath: "/images/leo.jpg",
      score: 87,
      percentage: 69.6,
      class: "one",
    },
    {
      id: "13",
      name: "Mia Johnson",
      imagePath: "/images/mia.jpg",
      score: 73,
      percentage: 58.4,
      class: "two",
    },
    {
      id: "14",
      name: "Nathan Brown",
      imagePath: "/images/nathan.jpg",
      score: 84,
      percentage: 67.2,
      class: "two",
    },
    {
      id: "15",
      name: "Olivia White",
      imagePath: "/images/olivia.jpg",
      score: 96,
      percentage: 76.8,
      class: "two",
    },
    {
      id: "16",
      name: "Peter Wilson",
      imagePath: "/images/peter.jpg",
      score: 75,
      percentage: 60.0,
      class: "two",
    },
    {
      id: "17",
      name: "Quinn Turner",
      imagePath: "/images/quinn.jpg",
      score: 89,
      percentage: 71.2,
      class: "two",
    },
    {
      id: "18",
      name: "Rachel Lee",
      imagePath: "/images/rachel.jpg",
      score: 68,
      percentage: 54.4,
      class: "two",
    },
    {
      id: "19",
      name: "Samuel Brown",
      imagePath: "/images/samuel.jpg",
      score: 80,
      percentage: 64.0,
      class: "two",
    },
    {
      id: "20",
      name: "Tina Robinson",
      imagePath: "/images/tina.jpg",
      score: 93,
      percentage: 74.4,
      class: "two",
    },
    {
      id: "21",
      name: "Ulysses Turner",
      imagePath: "/images/ulysses.jpg",
      score: 77,
      percentage: 61.6,
      class: "two",
    },
    {
      id: "22",
      name: "Victoria Davis",
      imagePath: "/images/victoria.jpg",
      score: 72,
      percentage: 57.6,
      class: "two",
    },
    {
      id: "23",
      name: "Walter Smith",
      imagePath: "/images/walter.jpg",
      score: 86,
      percentage: 68.8,
      class: "two",
    },
    {
      id: "24",
      name: "Xena Turner",
      imagePath: "/images/xena.jpg",
      score: 81,
      percentage: 64.8,
      class: "two",
    },
  ];
  const classOneStudents = studentsProfile.filter(
    (student) => student.class === "one"
  );
  const classTwoStudents = studentsProfile.filter(
    (student) => student.class === "two"
  );
  return (
    <tbody>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          className One
        </td>
      </tr>
      {classOneStudents.map((singleStudent) => {
        return (
          <tr key={singleStudent.id} className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{singleStudent.id}</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src="./assets/avatar.png"
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">{singleStudent.name}</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {singleStudent.score}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {singleStudent.percentage}
            </td>
          </tr>
        );
      })}

      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          className Two
        </td>
      </tr>
      {classTwoStudents.map((singleStudent) => {
        return (
          <tr key={singleStudent.id} className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{singleStudent.id}</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={singleStudent.imagePath}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">{singleStudent.name}</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {singleStudent.score}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {singleStudent.percentage}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Rows;
